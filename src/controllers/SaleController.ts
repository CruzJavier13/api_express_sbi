import { Request, Response } from "express";
import { Sale } from "../models/SaleModel";

class SaleController{
    constructor(){}

    async getAll(req: Request, res: Response){
            try{
                const data = await Sale.find();
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
                const data = await Sale.findOneBy({id:Number(id)});
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
                const data = await Sale.delete({id:Number(id)});
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
                const data = await Sale.findOneBy({id:Number(id)});
                if(!data){
                    res.status(404).json({message:'Data not found'});
                }
                const updated = await Sale.update({id:Number(id)}, req.body);
                res.status(200).json({message:updated});
            }catch(err){
                if(err instanceof Error){
                    res.status(500).json({message:err.message});
                }
            }
        }
    
        async create(req: Request, res: Response){
            try{
                const data = await Sale.save(req.body);
                res.status(200).json({message:data});
            }catch(err){
                if(err instanceof Error){
                    res.status(500).json({message:err.message});
                }
            }
        }
}

export default new SaleController();