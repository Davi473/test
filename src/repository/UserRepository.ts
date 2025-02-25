import User from "../models/User";
import * as fs from 'fs';
import UserRepository from "../infrastructure/UserRepository";

export class UserRepositoryPostgres implements UserRepository
{
    constructor() {}

    private location = __dirname + "/../../database/user.json";

    public async save(user: User): Promise<void>
    {
        try {
            const users: any[] = await this.readFile();
            users.push({id: user.id, name: user.name, hash: user.hash });
            await fs.promises.writeFile(this.location, JSON.stringify(users, null, 2));
        } catch (e: any) 
        {
            console.log("Error creating an account");
        }
    }
    
    public async find(name: string): Promise<User | []>
    {
        try {
            const users: any[] = await this.readFile();
            const [user]: any = users.filter( user => user.name === name);
            if (!user) return [];
            return new User(user.id, user.name, user.hash);
        } catch (e: any) 
        {
            return [];
        }
    }

    async findAll(): Promise<User[]> 
    {
        // const query = `SELECT * FROM user`
        // const users: User[] = await this.connect.query(query);
        // return users.map(user => new User(user.id, user.name, user.hash));
        return []
    }

    public async delete(id: string, name: string): Promise<void>
    {
        // const query = `DELETE user WHERE id = $1 AND name = $2`;
        // const queryValue = [id, name];
        // await this.connect.query(query, queryValue);
    }

    private async readFile (): Promise<User[]>
    {
        try {
           const fileContent = await fs.promises.readFile(this.location, "utf-8");
           const users: User[] = JSON.parse(fileContent);
           return users;
        } catch (e: any)
        {
            console.log("file does not exist");
            this.createDataBase();
            return [];
        }
    }
 
    private async createDataBase ()
    {
        try {
            await fs.promises.writeFile(this.location, JSON.stringify([], null, 2));
            console.log("successfully created");
        } catch (err)
        {
            console.log("Unable to create file");
        }
    }
}
