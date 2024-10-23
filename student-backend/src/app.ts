import express from 'express';
import sequelize from './config/database';
import studentRoutes from './routes/routes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', studentRoutes);

sequelize.sync().then(() => console.log('Database connected'));

export default app;