import { TransactionService } from "../services/TransactionService";
import { Request, Response } from "express";

export class TransactionController 
{
  constructor (
    readonly service: TransactionService
  ) {}

  async create(req: Request, res: Response)
  {
    const { idWallet, name, amount, quantity, date } = req.body;
    const user = req.user;
    const transaction = await this.service.create(user.id, idWallet, name, amount, quantity, date);
    res.json({ message: "Transaction create", transaction })
  }

  async get(req: Request, res: Response)
  {
    const { id } = req.user;
    const response = await this.service.getLastTen(id);
    res.json({ response });
  }
}
