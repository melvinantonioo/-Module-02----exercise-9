import { createSlice } from '@reduxjs/toolkit'

export interface IStatus {
    value: number;
}

interface IPayload {
    payload: number;
}

const initialState = {
    value: 0,
}

export const UserSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        counter: (state: IStatus, action: IPayload) => {
            state.value = action.payload
        }
    }
})

export const {counter} = UserSlice.actions

export default UserSlice.reducer