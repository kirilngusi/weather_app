import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import getApiReducer  from '../features/getApi/index';

export const store = configureStore({
    reducer: {
        weather:getApiReducer
    }
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch