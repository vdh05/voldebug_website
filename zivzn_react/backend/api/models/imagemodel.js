import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    originalname: {
        type: String,
        required: true
    },
   
    filename: {
        type: String,
        required: true,
        
    },
    path: {
        type: String,
        required: true
    }
});

export const ImageModel = mongoose.model('Image', imageSchema);
