import { config } from 'dotenv';
config();

export const port = process.env.PORT || 3000;
export const googleApiKey = process.env.GOOGLE_API_KEY;
export const mongoUri = process.env.MONGO_URI;
export const databaseUrl = process.env.FIREBASE_DB_URL;

export const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
};

export const firebaseAdmin = {
  // type: process.env.FIREBASE_ADMIN_TYPE,
  // project_id: process.env.FIREBASE_ADMIN_PROJECT_ID,
  // private_key_id: process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
  // private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  // client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  // client_id: process.env.FIREBASE_ADMIN_CLIENT_ID,
  // auth_uri: process.env.FIREBASE_ADMIN_AUTH_URI,
  // token_uri: process.env.FIREBASE_ADMIN_TOKEN_URI,
  // auth_provider_x509_cert_url:
  //   process.env.FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
  // client_x509_cert_url: process.env.FIREBASE_ADMIN_CLIENT_X509_CERT_URL,
  // universe_domain: process.env.FIREBASE_ADMIN_UNIVERSE_DOMAIN,
};
