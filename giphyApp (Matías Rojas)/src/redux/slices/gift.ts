import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IGift } from '../../types/gift'

interface IInitialState {
    gift: IGift[]
}
// Define the initial state using that type
const initialState: IInitialState = {
    gift:[]
}

const giftSlice = createSlice({
    name: 'gift',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setGifts: (state, action: PayloadAction<IGift[]>) => {
            state.gift = action.payload;
        },
        resetGifts :(state)=>{
            state.gift = [];
        }
    },
})

export const { setGifts, resetGifts } = giftSlice.actions

export default giftSlice.reducer