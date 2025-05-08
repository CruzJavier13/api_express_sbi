import { Request, Response } from "express";
import { Client } from "../models/ClientModel";
import { brotliDecompress } from "zlib";

class ClientController{
    constructor(){}

    async getAll(req: Request, res: Response){
        try{
            const data = await Client.find();
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
            const data = await Client.findOneBy({id:Number(id)});
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
            const data = await Client.delete({id:Number(id)})
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
            const data = await Client.findOneBy({id:Number(id)});
            if(!data){
                res.status(404).json({message:"Data not found"})
            }
            const updated = await Client.update({id:Number(id)}, req.body);
            res.status(200).json({message:'Update Client'});
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }

    async create(req: Request, res: Response){
        try{
            const data = await Client.save(req.body);
            res.status(201).json({message:data});
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }
}

export default new ClientController();