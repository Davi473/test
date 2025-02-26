import { Router } from "express";
import { WalletController } from "../controllers/WalletController";
import { WalletService } from "../services/WalletService";
import { WalletRepositoryPostgres } from "../repository/WalletRepository"
import Token from "../Token";
import { TransactionRepositoryPostgres } from "../repository/TransactionRepository";
import { TransactionService } from "../services/TransactionService";

const repository = new WalletRepositoryPostgres();
const repositoryTransaction = new TransactionRepositoryPostgres();
const serviceTransaction = new TransactionService(repositoryTransaction);
const service = new WalletService(repository, serviceTransaction);
const walletController = new WalletController(service);
const router = Router();
router.post("/wallet", Token.authToken, walletController.create.bind(walletController));
router.get("/wallet", Token.authToken, walletController.get.bind(walletController));
router.get("/wallet/:id/transactions", Token.authToken, walletController.walletTransactions.bind(walletController));
export default router;
