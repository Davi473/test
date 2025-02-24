import { Router } from "express";
import { WalletController } from "../controllers/WalletController";
import { WalletService } from "../services/WalletService";

const router = Router();
router.use(applyRoutes(WalletController, WalletService, 
    WalletService));
export default router;
