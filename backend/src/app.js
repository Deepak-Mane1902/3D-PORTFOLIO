import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
// import cors from 'cors';

const app = express();
app.use(express.json());
app.use(morgan('dev'));



export default app;