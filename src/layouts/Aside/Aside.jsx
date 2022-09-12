// Librerias
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";

// Contextos

// Hooks

// Componentes

// Imagenes
import Logo from "../../assets/images/static/logo.png";

// Estilos

/**
 * Descripción: La descripción de por qué estamos haciendo este componente y que resuelve.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const Aside = () => {
  // Estados

  // Contextos

  // Hooks

  // Funciones

  // UseEffects

  return (
    <aside className="aside">
      <div className="aside__header">
        <img src={Logo} alt="" />
      </div>

      <div className="aside__links">
        <Link to="/dashboard">
          <AiFillHome />
          <span>Inicio</span>
        </Link>

        <Link to="/dashboard/create-post">
          <IoIosCreate />
          <span>Crear post</span>
        </Link>
      </div>
    </aside>
  );
};

export default Aside;
