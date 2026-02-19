import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGptMovieCards } from "../utils/redux-store/slice-store/nowPlayingSlice";
import { auth_token } from "../utils/const";

const useFetchSearchMovie = ({ query }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!query || query.length === 0) return;
        fetchMovies();
    }, [query]); // add query as dependency!

    async function fetchMovies() {
        // Promise.all waits for ALL fetches to complete
        const results = await Promise.all(
            query.map(async (movie) => {
                const response = await fetch(
                    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
                    auth_token
                );
                return await response.json();
            })
        );

        dispatch(setGptMovieCards(results));
    }
};

export default useFetchSearchMovie;