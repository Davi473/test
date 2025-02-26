import { Router } from "express";
import { TransactionRepositoryPostgres } from "../repository/TransactionRepository";
import { TransactionService } from "../services/TransactionService";
import { TransactionController } from "../controllers/TransactionController";
import Token from "../Token";

const repository = new TransactionRepositoryPostgres();
const service = new TransactionService(repository)
const transactionController = new TransactionController(service);
const router = Router();
router.get("/transaction/", Token.authToken, transactionController.get.bind(transactionController));
router.post("/transaction/", Token.authToken, transactionController.create.bind(transactionController));
export default router;
