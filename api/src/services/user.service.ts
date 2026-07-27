import users from "../db/db.js";
import type { User, UpdateUser, Createuser } from "../models/user.model.js";

export const findUsers = () => {
  if (users.length) {
    return users
  }
  return null;
};

export const findUserById = (id: number) => {
  const data = users.find((e) => e.id === id);
  return data || null;
};

export const addUser = (data: Createuser) => {
  let idgen: number = 0;
  let n = users[users.length - 1];
  n ? (idgen = n.id) : (idgen = 0);

  const newUser: User = {
    id: ++idgen,
    name: data.name,
    sex: data.sex || "Undefined",
    age: data.age || 0,
  };
  const add = users.push(newUser);

  if (add >= 0) {
    return newUser;
  } else {
    return null;
  }
};

export const updateUserById = (id: number, userU: UpdateUser) => {
  const data = users.find((e) => e.id === id);
  if (data) {
    data.name = userU.name;
    data.sex = userU.sex || "Undefined";
    data.age = userU.age || 0;
    return data;
  } else {
    return null;
  }
};

export const deleteUserById = (id: number) => {
  const n = users.findIndex((e) => e.id === id);
  if (n >= 0) {
    return users.splice(n, 1);
  } else {
    return null;
  }
};
