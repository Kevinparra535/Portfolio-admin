// Librerias
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Componentes
import fileTypes from "../validations/Files.validations";
import returnFileSize from "../helpers/ReturnFileSize";

// Imagenes

// Estilos

/**
 * Descripción: La descripción de por qué estamos haciendo este componente y que resuelve.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const PreviewImageSelected = ({
  name,
  isMultiple,
  register,
  errors,
  rules,
  nameRules,
}) => {
  // Estados

  // Contextos

  // Hooks
  const input = useRef(null);
  const preview = useRef(null);

  // Funciones

  const validFileType = (file) => {
    return fileTypes.includes(file.type);
  };

  const handleChange = () => {
    console.log("hola");
    while (preview.current.firstChild) {
      preview.current.removeChild(preview.current.firstChild);
    }

    const curFiles = input.current.files;

    if (curFiles.length === 0) {
      const para = document.createElement("p");
      para.textContent = "No files currently selected for upload";
      preview.current.style.display = "none";
      preview.current.appendChild(para);
    } else {
      const list = document.createElement("ol");
      preview.current.appendChild(list);
      preview.current.style.display = "flex";
      preview.current.classList.add("active");

      for (const file of curFiles) {
        const listItem = document.createElement("li");
        const para = document.createElement("p");

        if (validFileType(file)) {
          para.innerHTML = `<b>File name:</b> ${
            file.name
          }, <b>file size:</b> ${returnFileSize(file.size)}.`;

          const image = document.createElement("img");
          image.src = URL.createObjectURL(file);

          listItem.appendChild(image);
          listItem.appendChild(para);
        } else {
          para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
          listItem.appendChild(para);
        }

        list.appendChild(listItem);
      }
    }
  };

  // UseEffects
  console.log(errors);

  // NOS FALTA TERMINAR ESTE COMPONENTE

  // Renders
  return (
    <>
      <label htmlFor={name}>
        <p>Cover Image:</p>
        <input
          ref={input}
          type="file"
          name={name}
          size={1024}
          aria-label={name}
          onChange={handleChange}
          {...register(nameRules, rules)}
          multiple={isMultiple ? true : false}
          accept=".jpg, .jpeg, .png, .svg, .gif"
        ></input>
        {errors[nameRules] && <span>This field is required</span>}
      </label>

      <div className="imagepreview" ref={preview}></div>
    </>
  );
};

PreviewImageSelected.propTypes = {};

PreviewImageSelected.defaultProps = {};

export default PreviewImageSelected;
