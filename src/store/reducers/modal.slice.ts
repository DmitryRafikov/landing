import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface IModalState {
    isOpen: boolean
}

const modalInitState: IModalState = {
    isOpen: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState: modalInitState,
    reducers: {
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        toggle: (state) => {
            state.isOpen = !state.isOpen
        },
    },
})

export const { open, close, toggle } = modalSlice.actions

export default modalSlice.reducer
