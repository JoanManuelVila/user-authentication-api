import express, {Application} from 'express';
import authRoutes from './routes/auth';
import morgan from 'morgan';

const app: Application = express ();

// settings

app.set('port', 3000);

//middlewares

app.use(morgan('dev'));
app.use(express.json())
// routes

app.use("/api/auth",authRoutes);

export default app;