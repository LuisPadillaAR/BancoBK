import type { User, UpdateUser, Createuser } from "../models/user.model.js";
export declare const findUsers: () => User[] | null;
export declare const findUserById: (id: number) => User | null;
export declare const addUser: (data: Createuser) => User | null;
export declare const updateUserById: (id: number, userU: UpdateUser) => User | null;
export declare const deleteUserById: (id: number) => User[] | null;
//# sourceMappingURL=user.service.d.ts.map