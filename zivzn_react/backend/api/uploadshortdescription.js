import express from 'express';
import {BlogShortDescriptionModel} from './models/shortdescription.js';

const router = express.Router();

router.post('/upload', async (req, res) => {
    try {
        const { shortDescription } = req.body;

        // Create a new blog long description
        const newshortDescription = new BlogShortDescriptionModel({shortDescription});
        await newshortDescription.save();

        res.status(201).json({ message: 'Long description uploaded successfully', shortDescription : newshortDescription });
    } catch (error) {
        console.error('Error uploading long description:', error);
        res.status(500).send('Error uploading long description');
    }
});
router.put('/:id/updateShortDescription', async (req, res) => {
    try {
        const { id } = req.params;
        const { shortDescription } = req.body;

        const updatedShortDescription = await BlogShortDescriptionModel.findByIdAndUpdate(id, { shortDescription }, { new: true });

        res.status(200).json({ message: 'Short description updated successfully', shortDescription: updatedShortDescription });
    } catch (error) {
        console.error('Error updating short description:', error);
        res.status(500).send('Error updating short description');
    }
});

// Delete Short Description
router.delete('/:id/deleteShortDescription', async (req, res) => {
    try {
        const { id } = req.params;

        await BlogShortDescriptionModel.findByIdAndDelete(id);

        res.status(200).json({ message: 'Short description deleted successfully' });
    } catch (error) {
        console.error('Error deleting short description:', error);
        res.status(500).send('Error deleting short description');
    }
});

export default router;