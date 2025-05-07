import { Request, Response } from "express";

class SaleController{
    constructor(){}

    async getAll(req: Request, res: Response){
        await res.status(200).json({message:'Get Sale'});
    }

    async getById(req: Request, res: Response){
        await res.status(200).json({message:'Get Sale for id'});
    }

    async delete(req: Request, res: Response){
        await res.status(200).json({message:'Delete Sale'});
    }

    async update(req: Request, res: Response){
        await res.status(200).json({message:'Update Sale'});
    }

    async create(req: Request, res: Response){
        await res.status(200).json({message:'Create Sale'});
    }
}

export default new SaleController();