import app from './app'
import { AppDataSource } from './database/connection'; 
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5500;

async function main(){
	try{
		await AppDataSource.initialize().then(()=>{
			console.log("The connection to the database was successfully...");
		}).catch(()=>console.log("The connection to the database failed..."));
		
		app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));
	}catch(err){
		if(err instanceof Error){
			console.log(err.message);
		}
	}
}

main();
