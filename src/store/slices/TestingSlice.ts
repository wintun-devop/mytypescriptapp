import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface InitialDataState{
    shops:{
    id:string,
    shopName:string,
    shopUrl:number
    }[],
    products:{
        id:string,
        name:string,
        type:string,
        price:number
    }[]

}

// 1>define initial states
const initialState:InitialDataState = {
    shops:[],
    products:[]
}

// 2>crate slice
export const TestSlice = createSlice({
    name:'testslice',
    initialState,
    reducers:{
        addShop:(state,action:PayloadAction<[]>)=>{
            state.shops=[...state.shops,action.payload];;
        },
        deleteShop:(state,action:PayloadAction<String>)=>{
            state.shops = state.shops.filter((item)=>item.id!==action.payload);
        },
        addProduct:(state,action:PayloadAction<[]>)=>{
            state.products=action.payload;
        }
    }
});

export const {
    addShop,
    updateShop,
    addProduct,
    deleteShop
} = TestSlice.actions;


export default TestSlice.reducer;