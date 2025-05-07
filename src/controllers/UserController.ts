import { Request, Response } from "express";

class UserController{
    constructor(){}

    async getAll(req: Request, res: Response){
        await res.status(200).json({message:'Get User'});
    }

    async getById(req: Request, res: Response){
        await res.status(200).json({message:'Get User for id'});
    }

    async delete(req: Request, res: Response){
        await res.status(200).json({message:'Delete User'});
    }

    async update(req: Request, res: Response){
        await res.status(200).json({message:'Update User'});
    }

    async create(req: Request, res: Response){
        await res.status(200).json({message:'Create User'});
    }
}

export default new UserController();