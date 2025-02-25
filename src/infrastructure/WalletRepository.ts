import Wallet from "../models/wallet";

export default interface WalletRepository
{
    save(wallet: Wallet): Promise<void>;
    // find(): Promise<any | []>;
    findAll(idUser: string): Promise<Wallet[]>;
    delete(): Promise<void>;
}