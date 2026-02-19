import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovieTrailer } from "../utils/redux-store/slice-store/nowPlayingSlice";
import { auth_token } from "../utils/const";

 
 const useFetchTrailer = () => {
 const dispatch = useDispatch();

    useEffect(() => {
        // if(id === null)return;
        // console.log("MY NOW PLAYING COME HERE");
        fetchUpComingMovies();
    },[])
    async function fetchUpComingMovies()
    {
        const reponse = await fetch("https://api.themoviedb.org/3/movie/840464/videos?language=en-US",
            auth_token
        );
        const data = await reponse.json();
        dispatch(setMovieTrailer(data))
        // console.log("MOVIE TRAILER DATA", data);
    }
}
export default useFetchTrailer;
