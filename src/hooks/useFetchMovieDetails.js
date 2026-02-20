import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    clearMovieDetails,
    setMovieDetails,
    setMovieDetailsTrailer
} from "../utils/redux-store/slice-store/nowPlayingSlice";
import { auth_token } from "../utils/const";

const useFetchMovieDetails = ({ id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!id) return;
        dispatch(clearMovieDetails());
        fetchMovieDetails();
    }, [id]);

    async function fetchMovieDetails() {
        try {
            const movieResponse = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
                auth_token
            );

            const trailerResponse = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
                auth_token
            );

            const movieData = await movieResponse.json();
            dispatch(setMovieDetails(movieData));

            const trailerData = await trailerResponse.json();

            const trailer = trailerData.results.find(
                (video) => video.type === "Trailer"
            );

            dispatch(setMovieDetailsTrailer(trailer?.key || null));

            console.log("MD data and trailer data", movieData, trailerData);

        } catch (error) {
            console.log("Movie Details Fetch Error:", error);
        }
    }
};

export default useFetchMovieDetails;