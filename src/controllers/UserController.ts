import { UserService } from "../services/UserService";
import { Request, Response } from "express";

export class UserController 
{
  constructor (
    readonly service: UserService
  ) {}

  async create(req: Request, res: Response)
  {
    const { name, password } = req.body;
    const response = await this.service.create(name, password);
    res.json({ message: "User create", response })
  }

  async login(req: Request, res: Response)
  {
    const { name, password } = req.body;
    const token = await this.service.login(name, password);
    res.json({ token })
  }
}