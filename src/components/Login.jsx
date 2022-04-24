import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import AuthContext from "../contexts/Auth.context";

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email", emailInput)} />
        {errors.email && <span>This field is required</span>}

        <input type="password" {...register("password", passInput)} />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>

      <p>{error?.replace("Firebase:", "")}</p>
    </section>
  );
};

export default Login;
