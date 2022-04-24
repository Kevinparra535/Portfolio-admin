import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MESSAGING_SENDER_ID,
} from "../constants/Auth.types";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: "https://kevin-pl.firebaseio.com",
  projectId: "kevin-pl",
  storageBucket: "kevin-pl.appspot.com",
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

/**
 * getRedirectResult is unused and should not be included in the code base.
 * In addition, there are many other functions within firebase/auth that are
 * not imported and therefore should not be included as well.
 */
