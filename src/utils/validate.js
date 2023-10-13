export const validateFormData = (formType, email, password, name) => {
  let errors = {};
  if (!email?.length) {
    errors = { ...errors, email: "This is a required field" };
  }
  if (!password?.length) {
    errors = { ...errors, password: "This is a required field" };
  }
  if (!name?.length && formType === "SignUp") {
    errors = { ...errors, name: "This is a required field" };
  } else {
    const isEmailValid =
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid)
      errors = { ...errors, email: "Please Enter a valid email address" };
    if (!isPasswordValid)
      return { ...errors, password: "Please Enter a valid password" };
  }

  return errors;
};
