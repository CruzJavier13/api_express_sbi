import { Request, Response } from "express";
import { User } from "../models/UserModel";

class UserController{
    constructor(){}

    async getAll(req: Request, res: Response){
                try{
                    const data = await User.find();
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
                    const data = await User.findOneBy({id:Number(id)});
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
                    const data = await User.delete({id:Number(id)});
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
                    const data = await User.findOneBy({id:Number(id)});
                    if(!data){
                        res.status(404).json({message:'Data not found'});
                    }
                    const updated = await User.update({id:Number(id)}, req.body);
                    res.status(200).json({message:updated});
                }catch(err){
                    if(err instanceof Error){
                        res.status(500).json({message:err.message});
                    }
                }
            }
        
            async create(req: Request, res: Response){
                try{
                    const data = await User.save(req.body);
                    res.status(200).json({message:data});
                }catch(err){
                    if(err instanceof Error){
                        res.status(500).json({message:err.message});
                    }
                }
            }
}

export default new UserController();