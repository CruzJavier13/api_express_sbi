import express from 'express';
import categoryProduct from '../endpoint/categoryProduct';
import client from '../endpoint/client';
import employee from '../endpoint/employee';
import product from '../endpoint/product';
import sale from '../endpoint/sale';
import saleDetail from '../endpoint/saleDetail';
import user from '../endpoint/userView';

const app = express();

app.use('/category', categoryProduct);
app.use('/client', client);
app.use('/employee', employee);
app.use('/product', product);
app.use('/sale', sale);
app.use('/saleDetail', saleDetail);
app.use('/user', user);

export default app;