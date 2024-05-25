import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface IService {
  serviceNumber: number,
  currentAddress: number
}

interface IServiceStore {
  currentService: number
  serviceList: IService[]
}

const serviceInitState: IServiceStore = {
  currentService: 0,
  serviceList: [
    {
      serviceNumber: 0,
      currentAddress: 0
    },
    {
      serviceNumber: 1,
      currentAddress: 0
    },
    {
      serviceNumber: 2,
      currentAddress: 0
    }
  ]
}

const MAX_SERVICES = 2
const MIN_SERVICES = 0

export const serviceSlice = createSlice({
  name: 'service',
  initialState: serviceInitState,
  reducers: {
    next: (state) => {
      if(state.currentService <= MAX_SERVICES) {
        state.currentService += 1
      }
    },
    previous: (state) => {
      if(state.currentService >= MIN_SERVICES) {
        state.currentService -= 1
      }
    },
    selection: (state, action: PayloadAction<number>) => {
      if(state.currentService >= MIN_SERVICES && state.currentService <= MAX_SERVICES) {
        state.currentService = action.payload
      }
    },
    selectionAddress: (state, action: PayloadAction<number>) => {
      const addressNumber = action.payload
      const service = state.serviceList.find(s => s.serviceNumber === state.currentService)
      if (service) {
        service.currentAddress = addressNumber
      }
    }
  },
})

export const { next, previous, selection, selectionAddress } = serviceSlice.actions

export default serviceSlice.reducer
