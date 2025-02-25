import UserRepository from "../infrastructure/UserRepository";
import User from "../models/User";
import Token from "../Token";

export class UserService 
{
  constructor(
    readonly repository: UserRepository
  ) {}

  async create(name: string, password: string): Promise<Object | string>
  {
    const userExist = await this.repository.find(name);
    if (userExist instanceof User) return "User exist"
    const user = User.create(name, password);
    this.repository.save(user);
    return {id: user.id, name: user.name };
  }

  async login(name: string, password: string): Promise<string>
  {
    const user = await this.repository.find(name);
    if (!(user instanceof User)) return "Not exist";
    if (!user.authPassword(password)) return "Password false";
    const token = Token.create(user.id, user.name);
    return token;
    
  }

  async delete(id: string, name: string, 
    password: string): Promise<string>
  {
    const user = await this.repository.find(name);
    if (!(user instanceof User)) return "Not exist";
    if (!user.authPassword(password)) return "Password false";
    await this.repository.delete(user.id, user.name);
    return "Delete user"
  }
}
  