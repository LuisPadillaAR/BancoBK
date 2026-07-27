import { type Request, type Response } from "express";
import {
  findUserById,
  findUsers,
  addUser,
  updateUserById,
  deleteUserById,
} from "../services/user.service.js";
import type { Createuser, UpdateUser, User } from "../models/user.model.js";

interface Id {
  id: string;
}

export const getUsers = (req: Request, res: Response) => {
  const data = findUsers();
  data ? res.status(200).json(data) : res.status(404).json({error: "Data not found"})
};

export const getUserById = ({ params }: Request<Id, User>, res: Response) => {
  const data = findUserById(parseInt(params.id));
  data
    ? res.status(200).json(data)
    : res.status(404).json({ error: "Data not found" });
};

export const createUser = (
  { body }: Request<{}, {}, Createuser>,
  res: Response,
) => {
  const data = addUser(body);
  data ? res.status(200).json(data) : res.status(500).json({ r: "SIN BODY" });
};

export const updateUser = (
  { body, params }: Request<Id, {}, UpdateUser>,
  res: Response,
) => {
  const userId = parseInt(params.id);
  const data = updateUserById(userId, body);
  data
    ? res.status(200).json(data)
    : res.status(404).json({ error: "Data not found" });
};

export const deleteUser = ({ params }: Request<Id>, res: Response) => {
  const user = deleteUserById(parseInt(params.id));
  user
    ? res.status(200).json(user)
    : res.status(404).json({ error: "Data not found" });
};
