// db.js
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_DB_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_DB_SECRET_ACCESS_KEY,
  region: "us-east-2",
});

const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "latest" });

export default db;
