import express from 'express';
import { BlogLongDescriptionModel } from './models/longdescription.js';

const router = express.Router();

router.post('/upload', async (req, res) => {
    try {
        const { longDescription } = req.body;

        // Create a new blog long description
        const newLongDescription = new BlogLongDescriptionModel({ longDescription });
        await newLongDescription.save();

        res.status(201).json({ message: 'Long description uploaded successfully', longDescription: newLongDescription });
    } catch (error) {
        console.error('Error uploading long description:', error);
        res.status(500).send('Error uploading long description');
    }
});


router.put('/:id/updateLongDescription', async (req, res) => {
    try {
        const { id } = req.params;
        const { longDescription } = req.body;

        const updatedLongDescription = await BlogLongDescriptionModel.findByIdAndUpdate(id, { longDescription }, { new: true });

        res.status(200).json({ message: 'Long description updated successfully', longDescription: updatedLongDescription });
    } catch (error) {
        console.error('Error updating long description:', error);
        res.status(500).send('Error updating long description');
    }
});

// Delete Long Description
router.delete('/:id/deleteLongDescription', async (req, res) => {
    try {
        const { id } = req.params;

        await BlogLongDescriptionModel.findByIdAndDelete(id);

        res.status(200).json({ message: 'Long description deleted successfully' });
    } catch (error) {
        console.error('Error deleting long description:', error);
        res.status(500).send('Error deleting long description');
    }
});



export default router;
