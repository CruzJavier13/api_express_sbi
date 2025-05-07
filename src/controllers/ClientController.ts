import { Request, Response } from "express";

class ClientController{
    constructor(){}

    async getAll(req: Request, res: Response){
        await res.status(200).json({message:'Get Client'});
    }

    async getById(req: Request, res: Response){
        await res.status(200).json({message:'Get Client for id'});
    }

    async delete(req: Request, res: Response){
        await res.status(200).json({message:'Delete Client'});
    }

    async update(req: Request, res: Response){
        await res.status(200).json({message:'Update Client'});
    }

    async create(req: Request, res: Response){
        await res.status(200).json({message:'Create Client'});
    }
}

export default new ClientController();