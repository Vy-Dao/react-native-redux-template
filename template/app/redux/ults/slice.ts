import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Slice is where all the logic is designed

//Set the interface state
export interface State {
  count: number;
};

//Set the initial value
export const initialState: State = {
    count: 0,
};

//Create action
export const slice = createSlice({
    name:"Counting",
    initialState: initialState,
    reducers:{
        add(state, action: PayloadAction<{addNum : number}>): void{
            const { addNum } = action.payload;
            state.count += addNum;
        },
        minus(state, action: PayloadAction<{minusNum : number}>):void{
            const {minusNum} = action.payload;
            state.count -= minusNum;
        },
        clear(state):void{
            state.count = 0;
        },
    }
})

//Export action out
export const {add, minus, clear} = slice.actions;

//Export to index
export default slice.reducer;