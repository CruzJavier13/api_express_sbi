import { Request, Response } from "express";
import { SaleDetail } from "../models/SaleDetailModel";
import { AppDataSource } from "../database/connection";

class SaleDetailController{
    constructor(){}

    async getAll(req: Request, res: Response){
            try{
                const saleDetailRepository = AppDataSource.getRepository(SaleDetail);
                const data = await saleDetailRepository.find();
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
                const saleDetailRepository = AppDataSource.getRepository(SaleDetail);
                const data = await saleDetailRepository.findOneBy({id:Number(id)});
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
                const saleDetailRepository = AppDataSource.getRepository(SaleDetail);
                const data = await saleDetailRepository.update({id:Number(id)}, {state:false});
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
                const saleDetailRepository = AppDataSource.getRepository(SaleDetail);
                const data = await saleDetailRepository.findOneBy({id:Number(id)});
                if(!data){
                    res.status(404).json({message:'Data not found'});
                }
                const updated = await saleDetailRepository.update({id:Number(id)}, req.body);
                res.status(200).json({message:updated});
            }catch(err){
                if(err instanceof Error){
                    res.status(500).json({message:err.message});
                }
            }
        }
    
        async create(req: Request, res: Response){
            try{
                const saleDetailRepository = AppDataSource.getRepository(SaleDetail);
                const data = await saleDetailRepository.save(req.body);
                res.status(200).json({message:data});
            }catch(err){
                if(err instanceof Error){
                    res.status(500).json({message:err.message});
                }
            }
        }
}

export default new SaleDetailController();