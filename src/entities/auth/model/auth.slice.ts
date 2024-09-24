import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthSliceState {
  token: string
}

const initialState: AuthSliceState = { token: '' }

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateToken: (
      state: AuthSliceState,
      { payload }: PayloadAction<string>,
    ) => {
      state.token = payload
    },
  },
})

export const { updateToken } = AuthSlice.actions
export default AuthSlice.reducer
