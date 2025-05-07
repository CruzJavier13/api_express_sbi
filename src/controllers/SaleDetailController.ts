import { Request, Response } from "express";

class SaleDetailController{
    constructor(){}

    async getAll(req: Request, res: Response){
        await res.status(200).json({message:'Get Sale Detail'});
    }

    async getById(req: Request, res: Response){
        await res.status(200).json({message:'Get Sale Detail for id'});
    }

    async delete(req: Request, res: Response){
        await res.status(200).json({message:'Delete Sale Detail'});
    }

    async update(req: Request, res: Response){
        await res.status(200).json({message:'Update Sale Detail'});
    }

    async create(req: Request, res: Response){
        await res.status(200).json({message:'Create Sale Detail'});
    }
}

export default new SaleDetailController();