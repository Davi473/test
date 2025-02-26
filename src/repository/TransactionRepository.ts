import * as fs from 'fs';
import TransactionRepository from '../infrastructure/TransactionRepository';
import Transaction from '../models/Transaction';

export class TransactionRepositoryPostgres implements TransactionRepository
{
    constructor() {}

    private location = __dirname + "/../../database/transaction.json";

    public async save(transaction: Transaction): Promise<void>
    {
        try {
            const transactions: any[] = await this.readFile();
            transactions.push({id: transaction.id, idUser: transaction.idUser, idWallet: transaction.idWallet, name: transaction.name, 
                amount: transaction.amount, quantity: transaction.quantity, date: transaction.date});
            await fs.promises.writeFile(this.location, JSON.stringify(transactions, null, 2))
        } catch (e: any) 
        {
            console.log("Error creating an wallet");
        }
    }


    async findAll(idUser: string): Promise<Transaction[]> 
    {
        const transactions: any[] = await this.readFile();
        const transactionsUser = transactions.reduce((transactionsFilter, transaction) => 
        {
            if (transaction.idUser === idUser) transactionsFilter.push(new Transaction(transaction.id, transaction.idUser, transaction.idWallet, transaction.name, transaction.amount, transaction.quantity, transaction.date));
            return transactionsFilter;
        }, []);
        return transactionsUser;
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