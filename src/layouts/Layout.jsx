// Librerias
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Contextos

// Hooks

// Componentes
import Aside from "./Aside/Aside";

// Imagenes

// Estilos

/**
 * Descripción: La descripción de por qué estamos haciendo este componente y que resuelve.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const Layout = ({ children }) => {
  // Estados

  // Contextos

  // Hooks

  // Funciones
  const location = window.location;
  // const location = useLocation();

  // UseEffects
  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <>
      {location.pathname !== "/" ? (
        <div className="layout">{children}</div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Layout;
