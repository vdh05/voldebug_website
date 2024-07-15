import mongoose from 'mongoose';

const blogTitleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category:
    {
        type:String,
        required:true
    },
    href:
    {
         type:String,
         required:true
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
    },
    shortDescription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogShortDescription' // Reference to BlogShortDescription model
    },
    longDescription: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogLongDescription' // Reference to BlogLongDescription model
    }
});

export const BlogTitleModel = mongoose.model('BlogTitle', blogTitleSchema);
