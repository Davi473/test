import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/UserRoutes";
import walletRoutes from "./routes/WalletRoutes";
import cors from "cors";

const PORT = 3000

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRoutes);
// app.use(walletRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
