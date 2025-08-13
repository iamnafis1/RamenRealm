import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";

import {dbConnect} from "./configs/database.config";
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';
dbConnect()


const app = express();
app.use(express.json());
// app.use(cors({
//     credentials: true,
//     origin: ["http://localhost:4200"]
// }))
app.use(cors({
    credentials: true,
    origin: "http://localhost:4200"  // Use a single string instead of an array if only one origin
}));

 app.use("/api/foods", foodRouter);
 app.use("/api/users", userRouter);
 app.use("/api/orders", orderRouter);

 
 const PORT = Number(process.env.PORT || 5000);
 function startServer(port: number) {
    const server = app.listen(port, () => {
      console.log(`Server running on localhost port ${port}`);
    });
  
    server.on('error', (err: NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is busy, trying another...`);
        startServer(port + 1);
      }
    });
  }
  
  startServer(PORT);