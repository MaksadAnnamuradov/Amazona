/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
// import data from './data.js';
import dotenv from 'dotenv';
import path from 'path';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

app.use('/api/orders', orderRouter);

app.use('/api/uploads', uploadRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));


app.get('/', (req, res) => {
    res.send('Server is ready Max');
});

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at https://localhost:${port}`);
});