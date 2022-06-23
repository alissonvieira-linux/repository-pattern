import { Client } from "../../entities/Client";
import { IClientsRepository } from "../../repositories/ClientsRepository";

export class FindClientService {
    constructor(
        private clientsRepository: IClientsRepository
    ) {}

    public async execute(): Promise<Client[]> {
        const clients = await this.clientsRepository.find();
        return clients;
    }
}