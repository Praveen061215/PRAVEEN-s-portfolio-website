import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  orderBy,
  updateDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

export const isFirebaseConfigured = () => {
  return firebaseConfig.apiKey && firebaseConfig.apiKey !== 'YOUR_API_KEY_HERE';
};

const _isConfigured = isFirebaseConfigured();

let app;
let db;

if (_isConfigured) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

const COLLECTION_NAME = 'testimonials';

export const addTestimonial = async (testimonial) => {
  if (!_isConfigured) throw new Error("Firebase is not configured. Please add your config to the .env file.");
  const colRef = collection(db, COLLECTION_NAME);
  const docRef = await addDoc(colRef, testimonial);
  return { ...testimonial, id: docRef.id };
};

export const updateTestimonial = async (id, updatedData) => {
  if (!_isConfigured) throw new Error("Firebase is not configured. Please add your config to the .env file.");
  const docRef = doc(db, COLLECTION_NAME, id);
  await updateDoc(docRef, updatedData);
  return true;
};

export const deleteTestimonial = async (id) => {
  if (!_isConfigured) throw new Error("Firebase is not configured. Please add your config to the .env file.");
  const docRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(docRef);
  return true;
};

export const subscribeToTestimonials = (callback) => {
  if (!_isConfigured) {
    callback([]);
    return () => {};
  }

  const colRef = collection(db, COLLECTION_NAME);
  const q = query(colRef, orderBy('createdAt', 'desc'));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(data);
  });

  return unsubscribe;
};
