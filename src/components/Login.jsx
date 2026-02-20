import { useRef, useState } from "react";
import Header from "./Header";
import ValidationFunction from "../utils/loginPageValidation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import NavBar from "./NavBar";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/redux-store/slice-store/userSlice";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {


  const [signup, setSignUp] = useState(false);
  const password = useRef(null);
  const email = useRef(null);
  const username = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  function handleSignUp() {
    if (!signup) {
      setSignUp(true);
    }
    else {
      setSignUp(false);
    }
  }
  function handleSubmit() {
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value.trim();
    const result = ValidationFunction(emailValue, passwordValue);
    if (result !== true) {
      setErrorMsg(result);
    }
    else {
      setErrorMsg("");
      if (signup) {
        //login the user on firebase
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
          .then(async (authUser) => {
            const user = authUser.user;
            const name = username.current.value.trim();

            await updateProfile(user, { displayName: name });
            await user.reload();

            dispatch(setUser({
              email: user.email,
              displayName: user.displayName,
            }));

            alert("User Created Successfully 💚");
            toast.success("User Created Successfully 💚");
          })
          .catch((error) => {
            const firebaseErrors = {
              "auth/email-already-in-use": "This email is already registered.",
              "auth/wrong-password": "Incorrect password. Try again.",
              "auth/user-not-found": "No account found with this email.",
              "auth/too-many-requests": "Too many attempts. Try again later.",
              "auth/invalid-email": "Invalid email address.",
              "auth/invalid-credential": "Invalid credentials. Please try again.",
            };
            const code = error.code;
            setErrorMsg(firebaseErrors[code] || "Something went wrong. Try again.");
          });

      }
      else {
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((authUser) => {
          })
          .catch((error) => {
            setErrorMsg(error.message);
          })
      }
      //create a new user on the firebase
    }
  }
  return (
    <div className="relative min-h-screen text-white">

      {/* Background Layer */}
      <Header />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">

        <NavBar />

        {/* Logo */}
        <div className="flex justify-center mt-6">
          <img
            className="w-40 sm:w-52 md:w-64 lg:w-72 h-auto shadow-2xl"
            src="/Netflix-Logo-Streaming-Platform-765.png"
            alt="netflix-logo"
          />
        </div>

        {/* Form Container */}
        <div className="flex justify-center items-center flex-1 px-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="
            bg-black/80 
            p-6 sm:p-8 md:p-10
            rounded 
            w-full 
            max-w-md
            flex flex-col gap-4
            shadow-2xl
            backdrop-blur-sm
          "
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-center font-mono mb-4">
              {signup ? "Signup" : "Signin"}
            </h1>

            {signup && (
              <input
                type="text"
                ref={username}
                className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Name"
              />
            )}

            <input
              ref={email}
              className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
              type="text"
              placeholder="Email Address"
            />

            <input
              ref={password}
              className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
              type="password"
              placeholder="Password"
            />

            <button
              onClick={handleSubmit}
              className="
              bg-red-600 
              rounded-2xl 
              py-2 
              mt-4
              hover:bg-red-700 
              transition
            "
            >
              Submit
            </button>

            <p className="text-center text-sm sm:text-base">
              {signup ? "Already a user ?" : "New to Netflix ?"}{" "}
              <button
                type="button"
                onClick={handleSignUp}
                className="text-red-600 hover:underline"
              >
                {signup ? "Signin Now !" : "Signup Now !"}
              </button>
            </p>

            {errorMsg && (
              <p className="text-red-600 text-center mt-2 text-sm">
                {errorMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;