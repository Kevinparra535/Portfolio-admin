// Librerias
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import PropTypes from "prop-types";

// Contextos

// Hooks

// Componentes
import PreviewImageSelected from "../PreviewImageSelected";
import {
  titleInput,
  shortDInput,
  largeDInput,
  githubInput,
  technologiesInput,
  coverInput,
  imagesInput,
} from "../../validations/Inputs.validations";

// Imagenes

// Estilos

/**
 * Descripción: La descripción de por qué estamos haciendo este componente y que resuelve.
 *
 * Implementación: Descripción sobre cómo puedes implementar el componente.
 *
 * Bugs: Qué bugs se han presentado y como se solucionan.
 */

const Form = () => {
  // Estados

  // Contextos

  // Hooks
  const animatedComponents = makeAnimated();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // Funciones
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const onSubmit = (data) => console.log(data);

  // UseEffects

  // Renders
  return (
    <div className="createpost__form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">
          <p>Work Title:</p>
          <input
            className={errors.titleInput ? "error" : null}
            type="text"
            name="title"
            aria-label="title"
            placeholder="Project title"
            {...register("titleInput", titleInput)}
          />
          {errors.titleInput && <span>This field is required</span>}
        </label>

        {/* Short description */}
        <label htmlFor="short-description">
          <p>Short Description:</p>
          <textarea
            className={errors.shortDInput ? "error" : null}
            name="short-description"
            id="short-description"
            cols="30"
            rows="3"
            minLength="10"
            maxLength="100"
            autoComplete="off"
            {...register("shortDInput", shortDInput)}
          ></textarea>
          {errors.shortDInput && <span>This field is required</span>}
        </label>

        {/* Large description */}
        <label htmlFor="large-description">
          <p>Large Description:</p>
          <textarea
            className={errors.largeDInput ? "error" : null}
            name="large-description"
            id="large-description"
            cols="30"
            rows="8"
            minLength="10"
            autoComplete="off"
            {...register("largeDInput", largeDInput)}
          ></textarea>
          {errors.largeDInputt && <span>This field is required</span>}
        </label>

        {/* Github Link */}
        <label htmlFor="title">
          <p>Github Link:</p>
          <input
            className={errors.githubInput ? "error" : null}
            type="url"
            name="github-link"
            aria-label="github-link"
            placeholder="Github link"
            {...register("githubInput", githubInput)}
          />
          {errors.githubInput && <span>This field is required</span>}
        </label>

        {/* Preview Preview */}
        <label htmlFor="preview-link">
          <p>Preview link:</p>
          <input
            type="url"
            name="preview-link"
            aria-label="preview-link"
            placeholder="Preview link"
            {...register("previewInput")}
          />
        </label>

        {/* Technologies */}
        <label htmlFor="technologies">
          <p>Technologies:</p>
          <Controller
            control={control}
            name="technologiesInput"
            {...register("technologiesInput", technologiesInput)}
            render={({ field }) => (
              <Select
                isMulti
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={[options[0], options[1]]}
                {...field}
                options={options}
              />
            )}
          />
        </label>

        {/* Cover Image */}

        {/* Images */}
        <label htmlFor="images">
          <p>Images:</p>
          <input
            className={errors.imagesInput ? "error" : null}
            type="file"
            name="images"
            aria-label="images"
            accept=".jpg, .jpeg, .png, .svg, .gif"
            multiple
            {...register("imagesInput", imagesInput)}
          ></input>
          {errors.imagesInput && <span>This field is required</span>}
        </label>

        <PreviewImageSelected
          name="cover-image"
          errors={errors}
          isMultiple={false}
          rules={coverInput}
          register={register}
          nameRules="coverInput"
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
