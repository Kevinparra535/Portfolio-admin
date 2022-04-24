/* eslint-disable no-unused-expressions */
// Librerias
import { createContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseApp } from "../config/Firebase.config";

// Otros

/**
 * Descripcion del context: La descripción de por qué estamos haciendo este context y que resuelve.
 *
 * Implementacion: Descripción sobre cómo puedes implementar el context.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [credentials, setCredentials] = useState(null);

  const auth = getAuth(firebaseApp);

  const getUSer = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        window.location.href !== "/home"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  const readExistingUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  };

  useEffect(() => {
    if (credentials) {
      getUSer(credentials.email, credentials.password);
    } else {
      readExistingUser();
    }
  }, [credentials]);

  return (
    <AuthContext.Provider value={{ error, user, setCredentials }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
