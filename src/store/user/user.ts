"use client";
import { IInitialState } from "@/type/redux/TypeUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IInitialState = { id: 0, name: "", last_name: "" };

const userSlice = createSlice({
  name: "user/user",
  initialState,
  reducers: {
		getValue( state, action: PayloadAction<IInitialState>){
			return action.payload
		}
	},
});

export const user = userSlice.reducer;
export const {getValue} = userSlice.actions
