import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import AuthContext from "../contexts/Auth.context";

import Logo from "../assets/images/static/logo.png";

import { emailInput, passInput } from "../validations/Inputs.validations";

const Login = () => {
  const { setCredentials, error } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setCredentials(data);
  };

  return (
    <section className="login">
      <div className="login__image"></div>

      <div className="login__form">
        <div className="login__form__header">
          <img src={Logo} alt="" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Correo"
            {...register("email", emailInput)}
          />
          {errors.email && <span>This field is required</span>}

          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", passInput)}
          />
          {errors.password && <span>This field is required</span>}

          <button type="submit">Enviar</button>
        </form>
        <p>{error?.replace("Firebase:", "")}</p>
      </div>
    </section>
  );
};

export default Login;
