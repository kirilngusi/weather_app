import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { RootState } from '../../store/index';
import {constructUrl} from '../../constants/ApiConstants';

// Define a type for the slice state
interface infoWeather {
    name: string,
    main: {
        temp :string,
        humidity: string
    };
    wind: {
        speed: string;
    };
    weather: [{
        main: string,
        icon: string,
        description: string
    }];
    sys: {
        country: string
    }
    message: string;
}

interface weatherState {
    value: infoWeather
}

// Define the initial state using that type
const initialState: weatherState = {
    value: {
        name: '',
        main: {
            temp : '',
            humidity: ''  
        },
        sys: {
            country: ''
        },
        wind: {
            speed: '',
        },
        weather: [{
            main: "",
            icon: "",
            description: ""
        }],
        message: "",
    }
}


export const fetchApiByName = createAsyncThunk(
    'user/fetchApiByName', async(city: string) => {
        const response = await fetch(constructUrl(city));
        return await response.json();
    }
)
  

export const getApi = createSlice({
    name: 'getApi',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiByName.pending, () => {
                console.log("first")
            })
            .addCase(fetchApiByName.fulfilled, (state,action) => {
                state.value = action.payload
            })
            .addCase(fetchApiByName.rejected, (state, action) => {
                console.log("rejected");
            })
    },
})

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;


//get action
// export const {fetchApiByName} = getApi.actions;

export default getApi.reducer;