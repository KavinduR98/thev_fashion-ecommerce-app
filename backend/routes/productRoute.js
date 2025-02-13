import express from 'express';
import { addProduct, listProduct, deleteProduct, singleProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/add', addProduct);
productRouter.get('/list', listProduct);
productRouter.post('/delete', deleteProduct);
productRouter.post('/single', singleProduct);

export default productRouter;


