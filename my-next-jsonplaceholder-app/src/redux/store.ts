import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/rootReducer";
import { postsApi } from "./slices/postsApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import postsSlice from "./slices/postsSlice";


export const store = configureStore({
    reducer: {
        posts: postsSlice,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(postsApi.middleware)
    }
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>