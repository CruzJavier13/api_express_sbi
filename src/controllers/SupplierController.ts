import { Request, Response } from "express";
import { Supplier } from "../models/SupplierModel";
import { AppDataSource } from "../database/connection";

class SupplierController{
    constructor(){}

    async getAll(req: Request, res: Response){
        try{
            const supplierRepository = AppDataSource.getRepository(Supplier);
            const data = (await supplierRepository.find()).filter((supplier)=>supplier.state==true);
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
            const supplierRepository = AppDataSource.getRepository(Supplier);
            const data = await supplierRepository.findOneBy({id:Number(id)});
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
            const supplierRepository = AppDataSource.getRepository(Supplier);
            const data = await supplierRepository.update({id:Number(id)}, {state:false})
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
            const supplierRepository = AppDataSource.getRepository(Supplier);
            const data = await supplierRepository.findOneBy({id:Number(id)});
            if(!data){
                res.status(404).json({message:"Data not found"})
            }
            const updated = await supplierRepository.update({id:Number(id)}, req.body);
            res.status(200).json({message:updated});
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }

    async create(req: Request, res: Response){
        try{
            const supplierRepository = AppDataSource.getRepository(Supplier);
            const data = await supplierRepository.save(req.body);
            res.status(201).json({message:data});
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }
}

export default new SupplierController();