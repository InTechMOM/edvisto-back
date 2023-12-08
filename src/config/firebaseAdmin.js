import { initializeApp } from 'firebase/app';
import admin from 'firebase-admin';
import { firebaseAdmin, databaseUrl } from './index.js';

//inicializar Firebase admin
const adminFB = admin.initializeApp({
  credential: admin.credential.cert(firebaseAdmin),
  databaseURL: databaseUrl,
});

export default adminFB;
