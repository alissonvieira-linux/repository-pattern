import { Client } from "../../entities/Client";
import { IClientsRepository } from "../../repositories/ClientsRepository";

export class CreateClientService {
    constructor(
        private clientsRepository: IClientsRepository
    ) {}

    public async execute(props: Client): Promise<Client> {
        const client = await this.clientsRepository.create(props);
        return client;
    }
}