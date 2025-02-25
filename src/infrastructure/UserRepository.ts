import User from "../models/User";

export default interface UserRepository
{
    save(user: User): Promise<void>;
    find(name: string): Promise<User | []>;
    findAll(): Promise<User[]>;
    delete(id: string, name: string): Promise<void>;
}