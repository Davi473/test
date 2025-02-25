import crypto from "crypto";

export default class Wallet 
{
    private readonly _id: string;
    private readonly _name: string;
    private readonly _icone: string;
    private readonly _valueTarget: number;
    private readonly _creationDate: Date;
    private readonly _idUser: string;
    private readonly _coin: string;

    constructor(id: string, idUser: string, name: string, icone: 
        string, valueTarget: number, creationDate: Date, coin: string)
    {
        this._id = id;
        this._name = name;
        this._icone = icone;
        this._valueTarget = valueTarget;
        this._creationDate = creationDate;
        this._idUser = idUser;
        this._coin = coin;
    }

    public static create(idUSer: string, name: string, icone: string, 
        valueTarget: number, coin: string): Wallet
    {
        const id: string = crypto.randomUUID();
        const creationDate = new Date();
        return new Wallet(id, idUSer, name, icone, valueTarget, creationDate, coin);
    }

    get id(): string
    {
        return this._id;
    }

    get name(): string
    {
        return this._name;
    }

    get icone(): string
    {
        return this._icone;
    }

    get valueTarget(): number
    {
        return this._valueTarget;
    }

    get creationDate(): Date
    {
        return this._creationDate;
    }

    get idUser(): string
    {
        return this._idUser;
    }

    get coin(): string
    {
        return this._coin;
    }

    public userJson(): Object
    {
        return {
            id: this._id, name: this._name, icone: this._icone,
            valueTarget: this._valueTarget, cretionDate: this._creationDate
        }
    }
}