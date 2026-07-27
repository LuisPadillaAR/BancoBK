import {} from "express";
import { findUserById, findUsers, addUser, updateUserById, deleteUserById, } from "../services/user.service.js";
export const getUsers = (req, res) => {
    const data = findUsers();
    data ? res.status(200).json(data) : res.status(404).json({ error: "Data not found" });
};
export const getUserById = ({ params }, res) => {
    const data = findUserById(parseInt(params.id));
    data
        ? res.status(200).json(data)
        : res.status(404).json({ error: "Data not found" });
};
export const createUser = ({ body }, res) => {
    const data = addUser(body);
    data ? res.status(200).json(data) : res.status(500).json({ r: "SIN BODY" });
};
export const updateUser = ({ body, params }, res) => {
    const userId = parseInt(params.id);
    const data = updateUserById(userId, body);
    data
        ? res.status(200).json(data)
        : res.status(404).json({ error: "Data not found" });
};
export const deleteUser = ({ params }, res) => {
    const user = deleteUserById(parseInt(params.id));
    user
        ? res.status(200).json(user)
        : res.status(404).json({ error: "Data not found" });
};
//# sourceMappingURL=user.controller.js.map