import { configureStore } from '@reduxjs/toolkit'
import { serviceSlice } from './reducers/service.slice'
import { modalSlice } from "./reducers/modal.slice";

const store = configureStore({
  reducer: {
    service: serviceSlice.reducer,
    modal: modalSlice.reducer
  },
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch