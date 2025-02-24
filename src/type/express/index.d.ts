// src/types/express/index.d.ts
import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: any; // ou use um tipo mais específico se souber a estrutura de 'user'
    }
  }
}
