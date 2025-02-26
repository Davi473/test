import TransactionRepository from "../infrastructure/TransactionRepository";
import Transaction from "../models/Transaction";

export class TransactionService 
{
  constructor(
    readonly repository: TransactionRepository
  ) {}

  async create(idUser: string, idWallet: string, name: string, amount: number, quantity: number, date: Date): Promise<Object | string>
  {
    const createTransaction = Transaction.create(idUser, idWallet, name, amount, quantity, date);
    this.repository.save(createTransaction);
    return createTransaction.id;
  }

  async getLastTen(id: string)
  {
    const transactions = await this.repository.findAll(id);
    const transactionObject = transactions.reduce((transactionsFilter: Object[], transaction) => 
    {
      transactionsFilter.push(transaction.toObject());
      return transactionsFilter;
    }, []);
    return transactionObject.reverse().slice(0, 10);
  }

  async pickUpTransactionsFromWallet(idWallet: string, idUser: string): Promise<Object[]>
  {
    const transactions = await this.repository.findAll(idUser);
    const transactionObject = transactions.reduce((transactionsFilter: Object[], transaction) => 
    {
      if(transaction.idWallet === idWallet)
        transactionsFilter.push(transaction.toObject());
      return transactionsFilter;
    }, []);
    return transactionObject.reverse();
  }
}
  