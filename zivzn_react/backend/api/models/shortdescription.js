import mongoose from 'mongoose';
import { BlogTitleModel } from './blogtitlemodel.js';

const blogShortDescriptionSchema = new mongoose.Schema({
    shortDescription: {
        type: String,
        required: true
    }
});
blogShortDescriptionSchema.pre('findOneAndDelete', async function (next) {
    try {
        const docToDelete = await this.model.findOne(this.getQuery());
        await BlogTitleModel.updateMany(
            { shortDescription: docToDelete._id },
            { $unset: { shortDescription: "" } }
        );
        next();
    } catch (error) {
        next(error);
    }
});


export const BlogShortDescriptionModel = mongoose.model('BlogShortDescription', blogShortDescriptionSchema);
