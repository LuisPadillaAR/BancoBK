import { type Request, type Response } from "express";
import type { Createuser, UpdateUser, User } from "../models/user.model.js";
interface Id {
    id: string;
}
export declare const getUsers: (req: Request, res: Response) => void;
export declare const getUserById: ({ params }: Request<Id, User>, res: Response) => void;
export declare const createUser: ({ body }: Request<{}, {}, Createuser>, res: Response) => void;
export declare const updateUser: ({ body, params }: Request<Id, {}, UpdateUser>, res: Response) => void;
export declare const deleteUser: ({ params }: Request<Id>, res: Response) => void;
export {};
//# sourceMappingURL=user.controller.d.ts.map