export default class Transaction
{
    private readonly _id: string;
    private readonly _idUser: string;   
    private readonly _idWallet: string;   
    private readonly _name: string;
    private readonly _amount: number;
    private readonly _quantity: number;
    private readonly _date: Date;

    constructor(id: string, idUser: string, idWallet: string, name: string, amount: number, quantity: number, date: Date)
    {
        this._id = id;
        this._idUser = idUser;
        this._idWallet = idWallet;
        this._name = name;
        this._amount = amount;
        this._quantity = quantity;
        this._date = date;
    }

    public static create(idUser: string, idWallet: string, name: string, amount: number, quantity: number, date: Date)
    {
        const id = crypto.randomUUID();
        return new Transaction(id, idUser, idWallet, name, amount, quantity, date);
    }

    get id(): string
    {
        return this._id;
    }

    get idUser(): string
    {
        return this._idUser;
    }

    get idWallet(): string
    {
        return this._idWallet;
    }

    get name(): string
    {
        return this._name;
    }

    get amount(): number
    {
        return this._amount;
    }

    get quantity(): number
    {
        return this._quantity;
    }

    get date(): Date
    {
        return this._date;
    }

    public toObject()
    {
        return {
            id: this.id,
            idWallet: this.idWallet,
            name: this.name,
            amount: this.amount,
            quantity: this.quantity,
            date: this.date
        }
    }
}