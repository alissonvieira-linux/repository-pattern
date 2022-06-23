import crypto from 'crypto';

export class Client {
    public id: string;
    public name: string;
    public email: string;
    public phone: string;
    public address: {
        zipCode: string;
        street: string;
        number: string;
        district: string;
        city: string;
        state: string;
    }

    constructor(props: Omit<Client, "id">, id: string = null) {
        Object.assign(this, props);
        if (!id) {
            this.id = crypto.randomBytes(64).toString('hex');
        } else {
            this.id = id;
        }

    }
}