import mongoose, { Schema, model, Document } from 'mongoose';
import { Client } from '../../../../entities/Client';

const ClientSchema = new Schema<Client>({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        zipCode: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
    }
});

export default model<Client>('Client', ClientSchema);
