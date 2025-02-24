import WalletRepository from "../repository/WalletRepository";
import Wallet from "../models/wallet";

export class WalletService 
{
  constructor(
    readonly repository: WalletRepository
  ) {}

  async get(idUser: string): Promise<Object>
  {
    return {
        id: "sdfsdf",

    }
  }

  async create(idUser: string, name: string, icone: string, 
    valueTarget: number): Promise<void>
  {
    const createWallet = Wallet.create(idUser, name, icone, valueTarget);
    this.repository.save(createWallet);
  }
}
  