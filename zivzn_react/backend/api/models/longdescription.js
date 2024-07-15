import mongoose from 'mongoose';
import { BlogTitleModel } from './blogtitlemodel.js';

const blogLongDescriptionSchema = new mongoose.Schema({
    longDescription: {
        type: String,
        required: true
    }
});

// Middleware to remove references from BlogTitle when deleting Long Description
blogLongDescriptionSchema.pre('findOneAndDelete', async function (next) {
    try {
        const docToDelete = await this.model.findOne(this.getQuery());
        await BlogTitleModel.updateMany(
            { longDescription: docToDelete._id },
            { $unset: { longDescription: "" } }
        );
        next();
    } catch (error) {
        next(error);
    }
});

export const BlogLongDescriptionModel = mongoose.model('BlogLongDescription', blogLongDescriptionSchema);
