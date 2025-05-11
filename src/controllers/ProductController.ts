import { Request, Response } from "express";
import { Product } from "../models/ProductModel";
import { AppDataSource } from "../database/connection";

class ProductController{
    constructor(){}

    async getAll(req: Request, res: Response){
        try{
            const productRepository = AppDataSource.getRepository(Product);
            const data = await productRepository.find({relations: ['category', 'supplier']});
            res.status(200).json({message:data});
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }

    async getById(req: Request, res: Response){
        const {id} = req.params;
        try{
            const productRepository = AppDataSource.getRepository(Product);
            const data = await productRepository.findOneBy({id:Number(id)});
            res.status(200).json({message:data})
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;
        try{
            const productRepository = AppDataSource.getRepository(Product);
            const data = await productRepository.update({id:Number(id)}, {state:false});
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
            const productRepository = AppDataSource.getRepository(Product);
            const data = await productRepository.findOneBy({id:Number(id)});
            if(!data){
                res.status(404).json({message:'Data not found'});
            }
            const updated = await productRepository.update({id:Number(id)}, req.body);
            res.status(200).json({message:updated});
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }

    async create(req: Request, res: Response){
        try{
            const productRepository = AppDataSource.getRepository(Product);
            const data = await productRepository.save(req.body);
            res.status(201).json({message:data});
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }
}

export default new ProductController();