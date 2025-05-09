import { Request, Response } from "express";
import { Client } from "../models/ClientModel";
import { AppDataSource } from "../database/connection";

class ClientController{
    constructor(){}

    async getAll(req: Request, res: Response){
        try{
            const clientRepository = AppDataSource.getRepository(Client);
            const data = await clientRepository.find();
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
            const clientRepository = AppDataSource.getRepository(Client);
            const data = await clientRepository.findOneBy({id:Number(id)});
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
            const clientRepository = AppDataSource.getRepository(Client);
            const data = await clientRepository.update({id:Number(id)}, {state:false})
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
            const clientRepository = AppDataSource.getRepository(Client);
            const data = await clientRepository.findOneBy({id:Number(id)});
            if(!data){
                res.status(404).json({message:"Data not found"})
            }
            const updated = await clientRepository.update({id:Number(id)}, req.body);
            res.status(200).json({message:'Update Client'});
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }

    async create(req: Request, res: Response){
        try{
            const clientRepository = AppDataSource.getRepository(Client);
            const data = await clientRepository.save(req.body);
            res.status(201).json({message:data});
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message});
            }
        }
    }
}

export default new ClientController();