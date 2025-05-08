import { Request, Response } from "express";
import { CategoryProduct } from "../models/CategoryProductModel";

class CategoryProductController{
    constructor(){}

    async getAll(req: Request, res: Response){
        try{
            const data = await CategoryProduct.find();
            res.status(200).json({message:data});
        }catch(err){
            if(err instanceof Error)
                res.status(500).json({message:err.message});
        }
    }

    async getById(req: Request, res: Response){
        const {id} = req.params;
        try{
            const data = await CategoryProduct.findOneBy({id:Number(id)});
            res.status(200).json({message:data});
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;
        try{
            const data = await CategoryProduct.delete({id:Number(id)});
            res.status(200).json({message:data});
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        try{
            const data = await CategoryProduct.findOneBy({id:Number(id)});
            if(!data){
                res.status(4004).json({message:"Data not found"});
            }
            const updated = await CategoryProduct.update({id:Number(id)}, req.body);
            res.status(200).json({message:updated});
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }

    async create(req: Request, res: Response){
        try{
            const data = await CategoryProduct.save(req.body);
            res.status(204).json({message:data});
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }
}

export default new CategoryProductController();