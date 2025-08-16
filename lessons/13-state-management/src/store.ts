import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

type CounterState = { value: number }
const slice = createSlice({
  name: 'counter',
  initialState: { value: 0 } as CounterState,
  reducers: {
    inc: s => { s.value++ },
    add: (s, a: PayloadAction<number>) => { s.value += a.payload }
  }
})

export const { inc, add } = slice.actions
export const store = configureStore({ reducer: { counter: slice.reducer } })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
