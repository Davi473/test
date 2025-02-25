import WalletRepository from "../infrastructure/WalletRepository"
import Wallet from "../models/wallet";

export class WalletService 
{
  constructor(
    readonly repository: WalletRepository
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
}
  
