import { Client } from "../entities/Client";

export interface IClientsRepository {
    create(props: Client): Promise<Client>;
    find(): Promise<Client[]>;
}