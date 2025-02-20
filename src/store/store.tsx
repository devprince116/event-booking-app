import { configureStore } from "@reduxjs/toolkit";
// import authReducer from './slices/authSlice';
// import eventReducer from './slices/eventSlice';
// import bookingReducer from './slices/bookingSlice';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // events: eventReducer,
    // bookings: bookingReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
