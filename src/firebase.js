import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyD_24cLP9BdUgzfzplidGIW96idq1Va6O0",
  authDomain: "pokemon-api-vue-3.firebaseapp.com",
  projectId: "pokemon-api-vue-3",
  storageBucket: "pokemon-api-vue-3.firebasestorage.app",
  messagingSenderId: "228324536431",
  appId: "1:228324536431:web:75266b8bff71301ada1d9a",
};

initializeApp(firebaseConfig);

const functions = getFunctions(firebaseApp);

if (process.env.NODE_ENV === "development") {
  connectFunctionsEmulator(functions, "localhost", 5001);
}

export { functions };