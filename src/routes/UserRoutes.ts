import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { UserRepositoryPostgres } from "../repository/UserRepository";

const router = Router();
const repository = new UserRepositoryPostgres();
const service = new UserService(repository)
const userController = new UserController(service);
router.post("/users/", userController.create.bind(userController));
router.put("/users/", userController.login.bind(userController));
export default router;
