export default function Validations(values) {
  const errors = {};

  const email_pattern =
    /^[a-zA-Z0-9_.+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;

  const password_pattern =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  if (values.firstName === "") {
    errors.firstName = "What's your first name";
  }

  if (values.lastName === "") {
    errors.lastName = "What's your last name";
  }

  if (values.email === "") {
    errors.email =
      "You'll use your email when you log in and if you ever need to reset your password";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email format incorrect";
  }

  if (values.password === "") {
    errors.password = "Password is required";
  } else if (!password_pattern.test(values.password)) {
    errors.password =
      "Enter a combination of at least six number, letters and symbols (such as @,#,!,*,&)";
  }

  if (values.verifyPassword === "") {
    errors.verifyPassword = "Please verify your password";
  } else if (values.password !== values.verifyPassword) {
    errors.verifyPassword = "Passwords do not match";
  }

  if (!values.termsAccepted) {
    errors.termsAccepted = "Confirm that you accept the terms and conditions.";
  }

  return errors;
}
