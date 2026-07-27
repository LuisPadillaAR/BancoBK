import express, {} from "express";
import { getUserById, getUsers, createUser, updateUser, deleteUser, } from "../controllers/user.controller.js";
const userRoute = express.Router();
userRoute
    .get("/", getUsers)
    .get("/:id", getUserById)
    .post("/", createUser)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser);
export default userRoute;
//# sourceMappingURL=user.routes.js.map