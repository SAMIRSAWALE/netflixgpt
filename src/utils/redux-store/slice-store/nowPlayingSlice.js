import { createSlice } from "@reduxjs/toolkit";

const nowPlaying = createSlice({

    name : "nowPlaying",
    initialState :{
        data : null,
        movie_trailer : null,
    },
    reducers : {
        setNowPlaying : (state , action) =>
        {
            state.data = action.payload;
        },
        setMovieTrailer : (state ,action) => {
            state.movie_trailer = action.payload;
        }
    }
})

export const {setNowPlaying,setMovieTrailer} = nowPlaying.actions;
export default nowPlaying.reducer;