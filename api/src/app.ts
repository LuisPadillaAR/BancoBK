import express, { json, type Request, type Response } from "express";
import cors from "cors";
import userRoute from "./routes/user.routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(json());

app.get("/", (req: Request, res: Response) => res.send("HOME API. WORKS!"));
app.use("/users", userRoute);

app.listen(PORT, () => console.log(`Corriendo en http://localhost:${PORT}`));
