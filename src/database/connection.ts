import { DataSource } from "typeorm"
import {CategoryProduct} from '../models/CategoryProductModel';
import {Client} from '../models/ClientModel';
import {Discount} from '../models/DiscountMode';
import {Employee} from '../models/EmployeeModel';
import {FormPay} from '../models/FormPayModel';
import {Post} from '../models/PostModel';
import {Product} from '../models/ProductModel';
import {SaleDetail} from '../models/SaleDetailModel';
import {Sale} from '../models/SaleModel';
import {Supplier} from '../models/SupplierModel';
import {User} from '../models/UserModel';
import dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DBHOST,
    port: Number(process.env.DBPORT) || 3306,
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    entities: [
        CategoryProduct,
        Client,
        Discount,
        Employee,
        FormPay,
        Post,
        Product,
        SaleDetail,
        Sale,
        Supplier,
        User
    ],
    logging: true,
    synchronize: true,
})