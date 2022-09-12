import {configureStore} from "@reduxjs/toolkit";
import { userSlice } from "../userSlice/userSlice";
import { cartSlice } from "../userSlice/cartSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice.reducer, cartSlice.reducer);

export const store = configureStore({
  reducer: {
    persist: persistedReducer,
  }
});

export const persistor = persistStore(store)
