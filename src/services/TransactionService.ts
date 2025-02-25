import TransactionRepository from "../infrastructure/TransactionRepository";
import Transaction from "../models/Transaction";

export class TransactionService 
{
  constructor(
    readonly repository: TransactionRepository
  ) {}

  async create(idUser: string, name: string, amount: number, quantity: number, date: Date): Promise<Object | string>
  {
    const createTransaction = Transaction.create(idUser, name, amount, quantity, date);
    this.repository.save(createTransaction);
    return createWallet.id;
  }
}
  