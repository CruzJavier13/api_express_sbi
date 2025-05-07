import { Request, Response } from "express";

class EmployeeController{
    constructor(){}

    async getAll(req: Request, res: Response){
        await res.status(200).json({message:'Get Employee'});
    }

    async getById(req: Request, res: Response){
        await res.status(200).json({message:'Get Employee for id'});
    }

    async delete(req: Request, res: Response){
        await res.status(200).json({message:'Delete Employee'});
    }

    async update(req: Request, res: Response){
        await res.status(200).json({message:'Update Employee'});
    }

    async create(req: Request, res: Response){
        await res.status(200).json({message:'Create Employee'});
    }
}

export default new EmployeeController();