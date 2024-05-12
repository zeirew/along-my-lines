import express from 'express';
import { Request, Response } from 'express';
import { ScanCommand } from '@aws-sdk/client-dynamodb';

const dynamoDBClient = require('../database/connection');
const router = express.Router();

router.get('/stations', async (req: Request, res: Response) => {
        
    try {
        const command = new ScanCommand({
            TableName: 'subway-lines',
            IndexName: "stop-name",
        });
    
        const response = await dynamoDBClient.send(command);
        res.send(response.Items);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving station list: ")
    }
});

module.exports = router;