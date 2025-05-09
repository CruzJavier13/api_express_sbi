import { Request, Response } from "express";
import { AppDataSource } from "../database/connection";
import { User } from "../models/UserModel";

class UserController{
    constructor(){}
    
    async getAll(req: Request, res: Response){
                try{
                    const userRepository = AppDataSource.getRepository(User);
                    const data = (await userRepository.find()).filter((u)=>u.state==true);
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
                    const userRepository = AppDataSource.getRepository(User);
                    const data = await userRepository.findOneBy({id:Number(id), state:true});
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
                    const userRepository = AppDataSource.getRepository(User);
                    const data:User | null = await userRepository.findOneBy({id:Number(id)});
                    if(!data){
                        res.status(404).json({message:"Not found"})
                    }
                    const deleted = await userRepository.update({id:Number(id)}, {state:false})
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
                    const userRepository = AppDataSource.getRepository(User);
                    const data = await userRepository.findOneBy({id:Number(id)});
                    if(!data){
                        res.status(404).json({message:'Data not found'});
                    }
                    const updated = await userRepository.update({id:Number(id)}, req.body);
                    res.status(200).json({message:updated});
                }catch(err){
                    if(err instanceof Error){
                        res.status(500).json({message:err.message});
                    }
                }
            }
        
            async create(req: Request, res: Response){
                try{
                    const userRepository = AppDataSource.getRepository(User);
                    const data = await userRepository.save(req.body);
                    res.status(200).json({message:data});
                }catch(err){
                    if(err instanceof Error){
                        res.status(500).json({message:err.message});
                    }
                }
            }
}

export default new UserController();