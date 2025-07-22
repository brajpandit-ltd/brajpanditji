import { createSlice } from "@reduxjs/toolkit";

// Define the initial state and types for the puja services slice
interface PujaService {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface PujaServicesState {
  pujaServices: PujaService[];
  loading: boolean;
  error: string | null;
}

// Define the initial state for the puja services slice
const initialState: PujaServicesState = {
  pujaServices: [],
  loading: false,
  error: null,
};

// Create the puja services slice
export const pujaServicesSlice = createSlice({
  name: "pujaServices",
  initialState,
  reducers: {
    fetchPujaServicesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPujaServicesSuccess: (state, action) => {
      state.pujaServices = action.payload;
      state.loading = false;
    },
    fetchPujaServicesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addPujaService: (state, action) => {
      state.pujaServices.push(action.payload);
    },
    removePujaService: (state, action) => {
      state.pujaServices = state.pujaServices.filter(
        (service) => service.id !== action.payload
      );
    },
  },
});
