import { Client } from "../../../../entities/Client";
import { IClientsRepository } from "../../../../repositories/ClientsRepository";
import ClientSchema from "../models/Client";

export class ClientRepositoryMongoDB implements IClientsRepository {
    public async create(props: Client): Promise<Client> {
        const { id, name, email, phone, address } = props;
        
        const client = await ClientSchema.create({
            id, name, email, phone, address
        });

        return client;
    }

    public async find(): Promise<Client[]> {
        const clients = await ClientSchema.find({});
        return clients;
    }
}