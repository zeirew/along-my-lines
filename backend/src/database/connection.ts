import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const dynamoDBClient = new DynamoDBClient({ region: 'us-east-1'});

module.exports = dynamoDBClient;