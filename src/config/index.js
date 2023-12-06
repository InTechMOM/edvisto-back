import { config } from 'dotenv';
config();

export const port = process.env.PORT || 3000;
export const googleApiKey = process.env.GOOGLE_API_KEY;
export const mongo_uri = process.env.MONGO_URI;
