
// all the imports here
import dotenv from 'dotenv';
import path from 'path';

// requireing path from env file
dotenv.config({path: path.join(process.cwd(), '.env')});

// all the export from here
export default {
    port: process.env.PORT,
    databaseUrl: process.env.DATABASE_URL,
};