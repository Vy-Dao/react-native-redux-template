import {AppThunk} from "../app-thunks";
import { add, minus, clear } from "./slice";

//Thunk is where you break down action and call slice
//This also separate them from UI

export const AddNumber = (num: number) : AppThunk => (dispatch) : void =>{
    dispatch(add({addNum: num}));
}

export const MinusNumber = (num: number) : AppThunk => (dispatch) : void =>{
    dispatch(minus({minusNum: num}));
}

export const ClearNumber = () : AppThunk => (dispatch) : void =>{
    dispatch(clear());
}
