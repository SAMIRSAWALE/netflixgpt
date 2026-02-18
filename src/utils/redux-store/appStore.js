import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice-store/userSlice";
import nowPlayingReducer from "./slice-store/nowPlayingSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        nowPlaying : nowPlayingReducer,
    },
});

export default appStore;