import * as fs from 'fs';
import WalletRepository from "../infrastructure/WalletRepository";
import Wallet from '../models/wallet';

export class WalletRepositoryPostgres implements WalletRepository
{
    constructor() {}

    private location = __dirname + "/../../database/wallet.json";

    public async save(wallet: Wallet): Promise<void>
    {
        try {
            const wallets: any[] = await this.readFile();
            wallets.push({id: wallet.id, idUser: wallet.idUser, name: wallet.name, 
                icone: wallet.icone, valueTarget: wallet.valueTarget, creationDate: wallet.creationDate});
            await fs.promises.writeFile(this.location, JSON.stringify(wallets, null, 2))
        } catch (e: any) 
        {
            console.log("Error creating an wallet");
        }
    }


    async findAll(idUser: string): Promise<Wallet[]> 
    {
        const wallets: any[] = await this.readFile();
        const walletsUser = wallets.reduce((walletFilter, wallet) => 
        {
            console.log(wallet.idUser === idUser);
            if (wallet.idUser === idUser) walletFilter.push(new Wallet(wallet.id, wallet.idUser, wallet.name, wallet.icone, wallet.valueTarget, wallet.creationDate));
            return walletFilter;
        }, []);
        console.log("wallet", walletsUser);
        return walletsUser;
    }

    public async delete(): Promise<void>
    {
        // const query = `DELETE user WHERE id = $1 AND name = $2`;
        // const queryValue = [id, name];
        // await this.connect.query(query, queryValue);
    }

    private async readFile (): Promise<any[]>
    {
        try {
           const fileContent = await fs.promises.readFile(this.location, "utf-8");
           const users: any[] = JSON.parse(fileContent);
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