import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovieDetails, setMovieDetailsTrailer} from "../utils/redux-store/slice-store/nowPlayingSlice";
import { auth_token } from "../utils/const";

 
 const useFetchMovieDetails = ({id}) => {
 const dispatch = useDispatch();

    useEffect(() => {
        fetchUpComingMovies();
    },[id])
    async function fetchUpComingMovies()
    {
        const reponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            auth_token
        );
        const responseTrailer = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            auth_token
        );
        const data = await reponse.json();
        dispatch(setMovieDetails(data))
        const trailerData = await responseTrailer.json();
        dispatch(setMovieDetailsTrailer(trailerData.results[0].key))    

        console.log("MD data and trailer data", data, trailerData);
    }
}
export default useFetchMovieDetails;