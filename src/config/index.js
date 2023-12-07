import { config } from 'dotenv';
config();

export const port = process.env.PORT || 3000;
export const googleApiKey = process.env.GOOGLE_API_KEY;
export const mongoUri = process.env.MONGO_URI;
