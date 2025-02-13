import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';
import upload from '../middleware/multer.js';

const userRouter = express.Router();

userRouter.post('/register', upload.fields([{name: 'image1', maxCount:1}, {name: 'image2', maxCount:1}, {name: 'image3', maxCount:1}, {name: 'image4', maxCount:1}]), registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

export default userRouter;