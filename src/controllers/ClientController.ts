import { Request, Response } from 'express';
import { Client } from '../entities/Client';
import { CreateClientService } from '../services/client/CreateClient';
import { ClientRepositoryMongoDB } from '../infra/database/mongodb/implementations/Client';
import { FindClientService } from '../services/client/FindClients';

const createClientService = new CreateClientService(new ClientRepositoryMongoDB());
const findClientsService = new FindClientService(new ClientRepositoryMongoDB());

export class ClientController {
    async create(request: Request, response: Response) {
        const { name, email, phone, address } = request.body;

        try {
            const client = new Client({
                name, email, phone, address
            });

            const storagedClient = await createClientService.execute(client);
            return response.status(201).json(storagedClient);
        } catch (error) {
            console.log(error);
            return response.status(500).json('Unexpected error');
        }
    }

    async find(request: Request, response: Response) {
        try {
            const clients = await findClientsService.execute();
            return response.json(clients);
        } catch (error) {
            console.log(error);
            return response.status(500).json('Unexpected error');
        }
    }
}

