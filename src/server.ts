import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/UserRoutes";
import walletRoutes from "./routes/WalletRoutes";
import transactionRoutes from "./routes/TransactionRoutes";
import cors from "cors";

const PORT = 3000

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", walletRoutes);
app.use("/api", transactionRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
