import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        email : "",
        displayName : "",
    },
    reducers: {
        setUser: (state, action) => {
            // console.log("this is the payload in set user", action.payload);
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
        },

        removeUser: (state) => {
            state.email = "";             // reset user
            state.displayName = "";
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
