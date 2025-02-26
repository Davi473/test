import Transaction from "../models/Transaction";

export default interface TransactionRepository
{
    save(Transaction: Transaction): Promise<void>;
    // find(name: string): Promise<Transaction | []>;
    findAll(idUser: string): Promise<Transaction[]>;
    delete(): Promise<void>;
}