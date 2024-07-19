import express, { Application } from 'express';
import quizRoute from './presentation/routes/quizRoutes';
import { connectToDatabase } from "./database/connection-config";
import { errorHandler } from './presentation/middleware/errorHandler';
const cors = require('cors');
import dotenv from "dotenv";
dotenv.config();  

const app: Application = express();
app.use(cors());
// Middleware
app.use(express.json()); 

// Routes
app.use('/', quizRoute);
const port = process.env.PORT 
connectToDatabase()
.then(()=>{
    app.use('/', quizRoute); 
    app.use(errorHandler);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch(error => {
    console.error("Failed to connect to MongoDB:", error);
  });

