import Hash from "../Hash";
import crypto from "crypto";

export default class User 
{
    private readonly _id: string;
    private readonly _name: string;
    private readonly _hash: string;

    constructor(id: string, name: string, hash: string)
    {
        this._id = id;
        this._name = name;
        this._hash = hash;
    }

    public static create(name: string, password: string): User
    {
        const hash: string = Hash.create(password);
        const id: string = crypto.randomUUID();
        return new User(id, name, hash);
    }

    get id(): string
    {
        return this._id;
    }

    get name(): string
    {
        return this._name;
    }

    get hash(): string
    {
        return this._hash;
    }

    public authPassword(password: string): boolean
    {
        const response = Hash.authentic(password, this._hash);
        return response;
    }

    public userJson(): Object
    {
        return {
            id: this._id, name: this._name, hash: this._hash
        }
    }
}