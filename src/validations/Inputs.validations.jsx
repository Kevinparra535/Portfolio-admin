//Registros de inputs al useForm();

export const emailInput = {
  required: "Email is required",
  pattern: {
    value:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: `Invalid email address`,
  },
};

export const passInput =
  ("password",
  {
    required: `Password is required`,
    pattern: {
      // value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      message: `Wrong password`,
    },
  });
