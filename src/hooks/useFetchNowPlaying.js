import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNowPlaying } from "../utils/redux-store/slice-store/nowPlayingSlice";
import { auth_token } from "../utils/const";

 
 const useFetchUpComing = () => {
 const dispatch = useDispatch();

    useEffect(() => {
        fetchUpComingMovies();
    },[])
    async function fetchUpComingMovies()
    {
        const reponse = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
            auth_token
        );
        const data = await reponse.json();
        dispatch(setNowPlaying(data))

        // console.log("this is the data in browser", data);
    }
}
export default useFetchUpComing;