import { createSlice } from "@reduxjs/toolkit";

const nowPlaying = createSlice({

    name: "nowPlaying",
    initialState: {
        data: null,
        movie_trailer: null,
        popular: null,
        topRated: null,
        upcoming: null,
        movieDetails: null,
        movieDetailsTrailer: null,
        gptMovieCards: null,
    },
    reducers: {
        setNowPlaying: (state, action) => {
            state.data = action.payload;
        },
        setMovieTrailer: (state, action) => {
            state.movie_trailer = action.payload;
        },
        setPopular: (state, action) => {
            state.popular = action.payload;
        },
        setTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        setUpcoming: (state, action) => {
            state.upcoming = action.payload;
        },
        setMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        },
        setMovieDetailsTrailer: (state, action) => {
            state.movieDetailsTrailer = action.payload;
        },
        setGptMovieCards: (state, action) => {
            state.gptMovieCards = action.payload;
        },
        clearMovieDetails: (state) => {
            state.movieDetails = null;
            state.movieDetailsTrailer = null;
        },
        clearGptMovieCards: (state) => {
            state.gptMovieCards = null;
        },
    }
})

export const { setNowPlaying, setMovieTrailer, setPopular, setTopRated, setUpcoming, setMovieDetails, setMovieDetailsTrailer, setGptMovieCards, clearMovieDetails ,clearGptMovieCards} = nowPlaying.actions;
export default nowPlaying.reducer;