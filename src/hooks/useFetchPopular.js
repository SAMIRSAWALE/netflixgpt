import { useEffect } from "react";
import { auth_token } from "../utils/const";
import { useDispatch } from "react-redux";
import { setPopular } from "../utils/redux-store/slice-store/nowPlayingSlice";

const useFetchPopular = () => {
    useEffect(() => {
        fetchPopular();
    },[])
    const dispatch = useDispatch();
    async function fetchPopular()
    {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=4",
            auth_token);
        const data = await response.json();
        // console.log("this is the data in popular", data);
        dispatch(setPopular(data))
    }
} 
export default useFetchPopular;