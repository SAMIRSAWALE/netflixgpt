import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTopRated } from "../utils/redux-store/slice-store/nowPlayingSlice";
import { auth_token } from "../utils/const";

 
 const useFetchTopRated = () => {
 const dispatch = useDispatch();
    useEffect(() => {
        fetchTopRatedMovies();
    },[])
    async function fetchTopRatedMovies()
    {
        const reponse = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2',
            auth_token
        );
        const data = await reponse.json();
        dispatch(setTopRated(data));

        // console.log("this is the data in browser", data);
    }
}
export default useFetchTopRated;