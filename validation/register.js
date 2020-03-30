const validator = require("validator");
const isEmpty = require("is-empty");
var passwordValidator = require("password-validator");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name == !isEmpty(data.name) ? data.name : "";
  data.email == !isEmpty(data.email) ? data.email : "";
  data.password == !isEmpty(data.password) ? data.password : "";
  data.password2 == !isEmpty(data.password2) ? data.password : "";

  // password requirement
  var passwordSchema = new passwordValidator();
  passwordSchema
    .is()
    .min(8)
    .is()
    .max(25)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits()
    .has()
    .not()
    .spaces();

  // Name checks
  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Email checks
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // UCSD email checks
  if (!validator.contains(data.email, "ucsd.edu")) {
    errors.email = "Please enter your UCSD email.";
  }

  // Password checks
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!passwordSchema.validate(data.password)) {
    errors.password =
      "Password must contain 8 characters, including digits, lowercase and uppercase letter.";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
