import { WalletService } from "../services/WalletService";
import { Request, Response } from "express";

export class WalletController 
{
  constructor (
    readonly service: WalletService
  ) {}

  async create(req: Request, res: Response)
  {
     const { name, icone, valueTarget, coin } = req.body;
     const user = req.user;
     console.log(req.body, req.user);
     const walletNew = await this.service.create(user.id, name, icone, valueTarget, coin);
     console.log(walletNew);
     res.json({ walletNew })
  }

  async delete(req: Request, res: Response)
  {
    
  }

  async get(req: Request, res: Response) 
  {
    const { id } = req.user;
    const wallet = await this.service.get(id);
    res.json({ wallet });
  }
}
