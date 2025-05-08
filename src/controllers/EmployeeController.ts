import { Request, Response } from "express";
import { Employee } from "../models/EmployeeModel";
import { AppDataSource } from "../database/connection";

class EmployeeController{
    constructor(){}
    async getAll(req: Request, res: Response){
        try{
            const data = await Employee.find();
            res.status(200).json({data: data});
        }catch(err){
            if(err instanceof Error)
                res.status(500).json({message:err.message})
        }
    }

    async getById(req: Request, res: Response){
        try{
            const {id} = req.params
            const data = await Employee.findOneBy({id:Number(id)});
            res.status(200).json({data: data});
        }catch(err){
            if(err instanceof Error)
                res.status(500).json({message:err.message})
        }
    }

    async delete(req: Request, res: Response){
        try{
            const {id} = req.params
            const data = await Employee.delete({id:Number(id)});
            res.status(200).json({data: data});
        }catch(err){
            if(err instanceof Error)
                res.status(500).json({message:err.message})
        }
    }

    async update(req: Request, res: Response){
        try{
            const data = await Employee.findOneBy({id:Number(req.params)});
            if(!data){
                res.status(404).json({message:"Data not found"});
            }
            await Employee.update({id:Number(req.params)}, req.body);
            const updated = await Employee.findOneBy({id:Number(req.params)});
            res.status(200).json({data: updated});
        }catch(err){
            if(err instanceof Error)
                res.status(500).json({message:err.message})
        }
    }

    async create(req: Request, res: Response){
        try{
            const data = await Employee.save(req.body);
            res.status(201).json({message:data})
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message:err.message})
            }
        }
    }
}

export default new EmployeeController();