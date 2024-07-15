import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import uploadingBlogTitleRouter from "./uploadingblogtitle.js";
import uploadImageRouter from "./uploadimage.js";
import longDescriptionRouter from './uploadlongdescription.js';
import shortDescription from './uploadshortdescription.js';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


import path from 'path';

dotenv.config({path: "../.env"});
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
    

  app.use('/api/uploadBlogTitle', uploadingBlogTitleRouter);
 app.use('/api/uploadImage', uploadImageRouter);
 app.use('/api/uploadLongDescription', longDescriptionRouter);
 app.use('/api/uploadshortdescription',shortDescription);
//connect to db
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
mongoose.connect(
    process.env.DB_CONNECTION)
    .then(() =>{
        console.log('connected')
    })
    // Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});