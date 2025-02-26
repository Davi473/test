import WalletRepository from "../infrastructure/WalletRepository"
import Wallet from "../models/wallet";
import { TransactionService } from "./TransactionService";

export class WalletService 
{
  constructor(
    readonly repository: WalletRepository,
    readonly serviceTransaction: TransactionService
  ) {}

  async create(idUser: string, name: string, icone: string, 
    valueTarget: number, coin: string): Promise<string>
  {
    const createWallet = Wallet.create(idUser, name, icone, valueTarget, coin);
    this.repository.save(createWallet);
    return createWallet.id;
  }

  async get(id: string)
  {
    const wallets = await this.repository.findAll(id);
    return wallets.reduce((walletFilter: Object[], wallet) => 
    {
      walletFilter.push(wallet.userJson());
      return walletFilter;
    }, []);
  }

  async walletTransactions(idWallet: string, idUser: string)
  {
    const transactions = await this.serviceTransaction.pickUpTransactionsFromWallet(idWallet, idUser);
    return transactions;
  }
}
  
