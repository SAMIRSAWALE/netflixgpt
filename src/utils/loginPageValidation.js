import toast from "react-hot-toast";

const ValidationFunction = (email, password) => {

  email = email.trim();
  password = password.trim();

  if (email === "" || password === "") {
    // alert("Please fill all the fields");
    toast.success("Please fill all the fields ❤️");
    return false;
  }

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    return "Must be a valid email address";
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.{8,}).*$/;

  if (!passwordRegex.test(password)) {
    return "Password must be at least 8 characters long and contain uppercase, lowercase, number & special character";
  }

  return true;
};

export default ValidationFunction;
