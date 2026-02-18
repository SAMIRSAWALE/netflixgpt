import { useRef, useState } from "react";
import Header from "./Header";
import ValidationFunction from "../utils/loginPageValidation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import NavBar from "./NavBar";

const Login = () => {


    const [signup, setSignUp] = useState(false);
    const password = useRef(null);
    const email = useRef(null);
    const username = useRef(null);
    const [errorMsg, setErrorMsg] = useState("");
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
        if (result!==true) {
            setErrorMsg(result);
        }
        else{
            setErrorMsg("");
            if(signup){
                //login the user on firebase
                createUserWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((authUser) => {
                    const user = authUser.user;
                    updateProfile(user , {
                        displayName : username.current.value.trim(),
                    })
                    // console.log("this is the user in login", user);
                    alert("User Created Successfully 💚");
                })
                .catch((error) => {
                    setErrorMsg(error.message);
                });
            }
            else{
                signInWithEmailAndPassword(auth , emailValue, passwordValue)
                .then((authUser) => {
                })
                .catch((error) =>{
                    setErrorMsg(error.message);
                })
            }
            //create a new user on the firebase
        }
    }
    return (
        <div className="text-white ">
            <NavBar />
            <Header />
            <div className="inset-0 flex items-center justify-center m-2">
                <img
                    className="w-2/6 h-auto shadow-2xl"
                    src="/Netflix-Logo-Streaming-Platform-765.png"
                    alt="netflix-logo"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="bg-black/80 p-10 rounded w-1/4 flex flex-col gap-4 relative h-2/6 py-24" style={{ marginLeft: "37%" }}>
                {signup ? <h1 className="text-3xl font-bold text-center  font-mono mb-6">Signup</h1> :
                    <h1 className="text-3xl font-bold text-center  font-mono mb-6">Signin</h1>}

                    {signup ?
                     <input 
                type="text"
                ref={username}
                className="p-3 rounded bg-gray-800" 
                placeholder="Your Lovely Name"
                /> : null} 
               
                <input
                    ref={email}
                    className="p-3 rounded bg-gray-800"
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    ref={password}
                    className="p-3 rounded bg-gray-800"
                    type="password"
                    placeholder="Password"

                />
                <button onClick={handleSubmit} className="bg-red-600 rounded-2xl py-2 mt-4">
                    submit
                </button>

                {signup ? <p className="text-center">Already a user ?  <button type="button" onClick={handleSignUp} className="text-red-600">Signin Now ! </button></p> :
                    <p className="text-center">New to NetFlix ?  <button type="button" onClick={handleSignUp} className="text-red-600">Signup Now ! </button></p>}

                    {errorMsg && <p className="text-red-600 text-center mt-2">{errorMsg}</p>}
            </form>
        </div>
    );
}
export default Login;