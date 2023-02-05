import "reflect-metadata";
import express from "express";
import { UserRoutes, UserSession, ContactRoutes } from "./routes";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/users", UserRoutes);
app.use("/login", cors(), UserSession);
app.use("/contact", ContactRoutes);

export default app;
