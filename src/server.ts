import express from 'express';
import mongoose from 'mongoose';
import { ClientController } from './controllers/ClientController';

mongoose.connect('mongodb+srv://developer:developer@mongodb.l1fvw.mongodb.net/?retryWrites=true&w=majority')

const server = express();

const clientController = new ClientController();

server.use(express.json());

server.post('/clients', clientController.create);
server.get('/clients', clientController.find);

server.listen(3000, () => console.log('Server is running...'));