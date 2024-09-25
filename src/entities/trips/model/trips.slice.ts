import { ITrip } from '@/shared/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TripsSliceState {
  trips: undefined | ITrip[]
}

const initialState: TripsSliceState = { trips: undefined }
// undefined сделано для того, что бы отслеживать, пришли поездки или нет

const TripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    setTrips: (
      state: TripsSliceState,
      { payload }: PayloadAction<ITrip[] | undefined>,
    ) => {
      state.trips = payload
    },
  },
})

export const { setTrips } = TripsSlice.actions
export default TripsSlice.reducer
