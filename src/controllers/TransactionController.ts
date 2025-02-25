import { TransactionService } from "../services/TransactionService";
import { Request, Response } from "express";

export class TransactionController 
{
  constructor (
    readonly service: TransactionService
  ) {}

  async create(req: Request, res: Response)
  {
    const { name, amount, quantity, date } = req.body;
    const user = req.user;
    const response = await this.service.create(user.id, name, amount, quantity, date);
    res.json({ message: "Transaction create", response })
  }

  async get(req: Request, res: Response)
  {
    const { name, password } = req.body;
    const token = await this.service.login(name, password);
    res.json({ token })
  }
}
