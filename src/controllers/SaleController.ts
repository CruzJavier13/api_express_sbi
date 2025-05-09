import { Request, Response } from "express";
import { Sale } from "../models/SaleModel";
import { AppDataSource } from "../database/connection";

class SaleController{
    constructor(){}

    async getAll(req: Request, res: Response){
            try{
                const saleRepository = AppDataSource.getRepository(Sale);
                const data = await saleRepository.find();
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
                const saleRepository = AppDataSource.getRepository(Sale);
                const data = await saleRepository.findOneBy({id:Number(id)});
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
                const saleRepository = AppDataSource.getRepository(Sale);
                const data = await saleRepository.update({id:Number(id)}, {state:false});
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
                const saleRepository = AppDataSource.getRepository(Sale);
                const data = await saleRepository.findOneBy({id:Number(id)});
                if(!data){
                    res.status(404).json({message:'Data not found'});
                }
                const updated = await saleRepository.update({id:Number(id)}, req.body);
                res.status(200).json({message:updated});
            }catch(err){
                if(err instanceof Error){
                    res.status(500).json({message:err.message});
                }
            }
        }
    
        async create(req: Request, res: Response){
            try{
                const saleRepository = AppDataSource.getRepository(Sale);
                const data = await saleRepository.save(req.body);
                res.status(200).json({message:data});
            }catch(err){
                if(err instanceof Error){
                    res.status(500).json({message:err.message});
                }
            }
        }
}

export default new SaleController();