import {Action, ThunkAction} from "@reduxjs/toolkit";
import { RootState } from "./store"

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;