import { Router } from "express";
import { WalletController } from "../controllers/WalletController";
import { WalletService } from "../services/WalletService";
import { WalletRepositoryPostgres } from "../repository/WalletRepository"
import Token from "../Token";

const repository = new WalletRepositoryPostgres();
const service = new WalletService(repository);
const walletController = new WalletController(service);
const router = Router();
router.post("/wallet", Token.authToken, walletController.create.bind(walletController));
router.get("/wallet", Token.authToken, walletController.get.bind(walletController));
export default router;
