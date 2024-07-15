import express from 'express';
import { BlogTitleModel } from './models/blogtitlemodel.js';
import { BlogShortDescriptionModel } from './models/shortdescription.js';
import { BlogLongDescriptionModel } from './models/longdescription.js';

const router = express.Router();


// Route to fetch blog title by image ID
router.get('/getByImageId/:imageId', async (req, res) => {
    try {
        const { imageId } = req.params;


        
        const blogTitle = await BlogTitleModel.findOne({ image: imageId })
            .populate('shortDescription', 'shortDescription') 
            .populate('longDescription', 'longDescription'); 

        if (!blogTitle) {
            return res.status(404).json({ message: 'Blog title not found' });
        }

        res.status(200).json({
            title: blogTitle.title,
            shortDescription: blogTitle.shortDescription.shortDescription,
            longDescription: blogTitle.longDescription.longDescription,
            category:blogTitle.category,
            href: blogTitle.href
        });
    } catch (error) {
        console.error('Error fetching blog title by image ID:', error);
        res.status(500).send('Error fetching blog title by image ID');
    }
});


router.post('/upload', async (req, res) => {
    try {
        const { title, imageId, shortDescription, longDescription,category,href} = req.body;

    
        const newShortDescription = new BlogShortDescriptionModel({ shortDescription });
        await newShortDescription.save();

        
        const newLongDescription = new BlogLongDescriptionModel({ longDescription });
        await newLongDescription.save();

        
        const newBlogTitle = new BlogTitleModel({
            title,
            image: imageId,
            shortDescription: newShortDescription._id,
            longDescription: newLongDescription._id,
            category,
            href,
        });
        await newBlogTitle.save();

        
        const populatedBlogTitle = await BlogTitleModel.findById(newBlogTitle._id)
            .populate('shortDescription')
            .populate('longDescription');

        res.status(201).json({ message: 'Blog title uploaded successfully', blogTitle: populatedBlogTitle });
    } catch (error) {
        console.error('Error uploading blog title:', error);
        res.status(500).send('Error uploading blog title');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title,category,href} = req.body;

        const updatedBlogTitle = await BlogTitleModel.findByIdAndUpdate(
            id,
            { title,category,href },
            { new: true }
        ).populate('shortDescription longDescription');

        res.status(200).json({ message: 'Blog title updated successfully', blogTitle: updatedBlogTitle });
    } catch (error) {
        console.error('Error updating blog title:', error);
        res.status(500).send('Error updating blog title');
    }
});

// Delete Blog Title
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedBlogTitle = await BlogTitleModel.findByIdAndDelete(id);
        
        if (!deletedBlogTitle) {
            return res.status(404).json({ message: 'Blog title not found' });
        }

    
        if (deletedBlogTitle.shortDescription) {
            await BlogShortDescriptionModel.findByIdAndDelete(deletedBlogTitle.shortDescription);
        }
        if (deletedBlogTitle.longDescription) {
            await BlogLongDescriptionModel.findByIdAndDelete(deletedBlogTitle.longDescription);
        }

        res.status(200).json({ message: 'Blog title and associated descriptions deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog title:', error);
        res.status(500).send('Error deleting blog title');
    }
});

export default router;