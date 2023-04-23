import { createSlice,PayloadAction } from "@reduxjs/toolkit";


export interface InitialUserState {
    user:{
        id: string,
        name: string,
    }[]
}

const initialState:InitialUserState = {
    user:[]
}

export const UserSlice = createSlice({
    name: 'UserReducter',
    initialState,
    reducers: {
        addUser:(state,action:PayloadAction<[]>)=>{
            state.user = action.payload;
        },
    }
});


export const { addUser } = UserSlice.actions;

export default UserSlice.reducer;