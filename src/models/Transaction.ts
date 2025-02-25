export default class Transaction
{
    constructor()
    {

    }

    public static create(idUser: string, name: string, amount: number, quantity: number, date: Date)
    {
        const id = crypto.randomUUID();
        return new Transaction(id, idUser, name, amount, quantity, date);
    }
}