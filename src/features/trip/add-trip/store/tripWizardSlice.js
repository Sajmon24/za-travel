import { PURGE } from 'redux-persist';
import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
const getInitialState = () => ({
    currentStep: 0,
    trip: {
        id: uuidv4(),
        name: '',
        previewImage: null,
        description: '',
        startDate: null,
        endDate: null,
        locationFrom: '',
        destinations: [{ id: uuidv4(), name: '' }],
        places: [{ id: uuidv4(), name: '', isChecked: false }],
        expenses: [],
        documents: [],
        packingLists: [],
        photos: [],
    },
});
const initialState = getInitialState();
export const tripWizardSlice = createSlice({
    name: 'tripWizard',
    initialState,
    reducers: {
        nextStep: (state) => {
            state.currentStep += 1;
        },
        previousStep: (state) => {
            if (state.currentStep === 0) {
                throw new Error("You are already on the first step. You can't go back.");
            }
            state.currentStep -= 1;
        },
        setTravelInformation: (state, action) => {
            state.trip.startDate = action.payload.startDate;
            state.trip.endDate = action.payload.endDate;
            state.trip.name = action.payload.name;
            state.trip.previewImage = action.payload.previewImage;
            state.trip.description = action.payload.description;
        },
        setLocationFrom: (state, action) => {
            state.trip.locationFrom = action.payload;
        },
        setDestinations: (state, action) => {
            state.trip.destinations = action.payload;
        },
        setPlaces: (state, action) => {
            state.trip.places = action.payload;
        },
        setExpenses: (state, action) => {
            state.trip.expenses = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, () => {
            return getInitialState();
        });
    },
});
export const { nextStep, previousStep, setTravelInformation, setLocationFrom, setDestinations, setPlaces, setExpenses, } = tripWizardSlice.actions;
export const selectCurrentStep = (state) => state.tripWizard.currentStep;
export const selectWizardTrip = (state) => state.tripWizard.trip;
export default tripWizardSlice.reducer;
