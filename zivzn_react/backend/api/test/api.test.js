import { expect } from 'chai';
import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import { describe, it } from 'mocha'; // Import describe and it from Mocha

import router from '../models/addtitle.js'; // Ensure the path to your router is correct

const app = express();
app.use(bodyParser.json());
app.use('/', router);

// Remove the mocha.setup() call

describe('POST /imageId/title', () => {
    it('should add a new blog title successfully', async () => {
        const validData = {
          imageId: "665fd2bcef124888d8f8b1af", // Replace with a valid image ID
          title: "My New Blog Post Title"
        };
        const res = await request(app)
          .post('/imageId/title')
          .send(validData); // Add data object here
      
        expect(res.status).to.equal(201);
        expect(res.body.message).to.equal('Blog title added successfully!'); // Adjust based on actual response message
      }).timeout(10000);
      
    it('should return 400 for missing fields', async () => {
        const res = await request(app)
            .post('/imageId/title')
            .send({});

        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Missing required fields: imageId or title');
    });
});
