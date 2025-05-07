import { Request, Response } from "express";

class ProductController{
    constructor(){}

    async getAll(req: Request, res: Response){
        await res.status(200).json({message:'Get Product'});
    }

    async getById(req: Request, res: Response){
        await res.status(200).json({message:'Get Product for id'});
    }

    async delete(req: Request, res: Response){
        await res.status(200).json({message:'Delete Product'});
    }

    async update(req: Request, res: Response){
        await res.status(200).json({message:'Update Product'});
    }

    async create(req: Request, res: Response){
        await res.status(200).json({message:'Create Product'});
    }
}

export default new ProductController();