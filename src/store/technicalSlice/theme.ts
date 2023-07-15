import { ITheme } from "@/type/redux/TypeTechnical"
import  {createSlice} from '@reduxjs/toolkit'

const initialState: ITheme = { loading: "loading"}

const theme = createSlice({
	name: "technical/theme",
	initialState,
	reducers:{
		finishLoadingApplication(state){
			state.loading = "finish"
			console.log(state.loading)
		}
	}
})

export default theme.reducer;
export const {finishLoadingApplication} = theme.actions