import express from "express";
import cors from "cors";

import taskRoutes from "./routes/task.routes.js";

import authRoutes from "./routes/auth.routes.js";

const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks",taskRoutes);
app.use(
"/api/auth",
authRoutes
);

app.get("/",(req,res)=>{
 res.json({
  success:true,
  message:"Task Management API Running Successfully"
 });
});

export default app;