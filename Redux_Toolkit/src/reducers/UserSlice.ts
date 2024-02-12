
import { IUser } from "../models/IUser";
import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreators";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
};

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action) =>{
            state.isLoading = false
            state.error= ""
            state.users = action.payload
        },
        [fetchUsers.pending.type]: (state) =>{
            state.isLoading = true
        },
        [fetchUsers.rejected.type]: (state, action) =>{
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default userSlice.reducer