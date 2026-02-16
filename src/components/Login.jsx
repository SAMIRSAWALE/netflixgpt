import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [signup, setSignUp] = useState(false);
    function handleSignUp() {
        if(!signup)
        {
           setSignUp(true);
        }
        else
        {
            setSignUp(false);
        }
        
    }
    return (
        <div className="text-white ">
            <Header />
            <div className="inset-0 flex items-center justify-center m-5">
                <img
                    className="w-2/6 h-auto"
                    src="/Netflix-Logo-Streaming-Platform-765.png"
                    alt="netflix-logo"
                />
            </div>
            <form className="bg-black/70 p-10 rounded w-1/5 flex flex-col gap-4 relative h-2/6 py-24" style={{ marginLeft: "40%" }}>
                {signup ? <h1 className="text-3xl font-bold text-center text-red-600 font-mono mb-6">Signup</h1> :
                    <h1 className="text-3xl font-bold text-center text-red-600 font-mono mb-6">Signin</h1>}
                <input
                    className="p-3 rounded bg-gray-800"
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    className="p-3 rounded bg-gray-800"
                    type="text"
                    placeholder="Password"
                />
                <button className="bg-red-600 rounded-2xl py-2 mt-4">
                    submit
                </button>

                {signup ? <p className="text-center">Already a user ?  <button type="button" onClick={handleSignUp} className="text-red-600">Signin Now ! </button></p> :
                <p className="text-center">New to NetFlix ?  <button type="button" onClick={handleSignUp} className="text-red-600">Signup Now ! </button></p>}
            </form>
        </div>
    );
}
export default Login;