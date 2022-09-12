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

export const titleInput = {
  required: "Title is required",
};

export const shortDInput = {
  required: "Short description is required",
};

export const largeDInput = {
  required: "Large description is required",
};

export const githubInput = {
  required: "Link is required",
};


export const technologiesInput = {
  required: "Technologies is required",
};

export const coverInput = {
  required: "Cover is required",
};

export const imagesInput = {
  required: "Images is required",
};
