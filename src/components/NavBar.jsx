import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { removeUser, setUser } from "../utils/redux-store/slice-store/userSlice";
import GptSearch from "./GptSearch";

const NavBar = () => {

    const [logout, setLogout] = useState(false);
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    // console.log("this is the user in nav bar", user);
    // if (!user.email) return null;
    function showLogout() {
        if (!logout) {
            setLogout(true);
        }
        else {
            setLogout(false);
        }
    }
    function handleSignOut()
    {
        signOut(auth)
        .then(() =>{
            alert("User Signed Out Successfully 💚");
            navigate("/");
        })
    }
        
    const dispatch =  useDispatch();
    useEffect(() =>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                // console.log("this is the user in body", user);
                const { email ,displayName} = user;
                dispatch(setUser({email , displayName}));   
                navigate("/browser");
            }
            else
            {
                dispatch(removeUser());
                navigate("/");
            }
        })
    },[]); 

    return (
        <div className="fixed top-0 w-full z-50 flex justify-between 
                bg-gradient-to-b from-black/80 to-transparent p-4">
            <img src="/netflix-navbar.png" alt="logo on netflix" className="w-32" style={{ height: 100 }} />
            <GptSearch />
            
            {user.email && ( <div className="flex">
                <div className="flex items-center gap-3">
                     <h3 className="text-2xl text-white border-2 border-white p-3 rounded-lg">{user.displayName}</h3>
                    <button onClick={showLogout}>
                        <img
                            src="/userIcon.png"
                            alt="user"
                            className="w-14 h-16 py-1 rounded-sm"
                        />
                    </button>

                    {logout && (
                        <button onClick={handleSignOut} className="rounded-2xl px-4 py-1 text-white bg-red-600 hover:bg-red-700 transition">
                            Logout
                        </button>
                    )}
                </div>
            </div>)}
        </div>
    );
}
export default NavBar;