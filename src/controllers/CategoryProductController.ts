import { Request, Response } from "express";

class CategoryProductController{
    constructor(){}

    async getAll(req: Request, res: Response){
        await res.status(200).json({message:'Get Category Product'});
    }

    async getById(req: Request, res: Response){
        await res.status(200).json({message:'Get Category Product for id'});
    }

    async delete(req: Request, res: Response){
        await res.status(200).json({message:'Delete Category Product'});
    }

    async update(req: Request, res: Response){
        await res.status(200).json({message:'Update Category Product'});
    }

    async create(req: Request, res: Response){
        await res.status(200).json({message:'Create Category Product'});
    }
}

export default new CategoryProductController();