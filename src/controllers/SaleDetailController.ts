import { Request, Response } from "express";
import { SaleDetail } from "../models/SaleDetailModel";

class SaleDetailController{
    constructor(){}

    async getAll(req: Request, res: Response){
            try{
                const data = await SaleDetail.find();
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
                const data = await SaleDetail.findOneBy({id:Number(id)});
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
                const data = await SaleDetail.delete({id:Number(id)});
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
                const data = await SaleDetail.findOneBy({id:Number(id)});
                if(!data){
                    res.status(404).json({message:'Data not found'});
                }
                const updated = await SaleDetail.update({id:Number(id)}, req.body);
                res.status(200).json({message:updated});
            }catch(err){
                if(err instanceof Error){
                    res.status(500).json({message:err.message});
                }
            }
        }
    
        async create(req: Request, res: Response){
            try{
                const data = await SaleDetail.save(req.body);
                res.status(200).json({message:data});
            }catch(err){
                if(err instanceof Error){
                    res.status(500).json({message:err.message});
                }
            }
        }
}

export default new SaleDetailController();