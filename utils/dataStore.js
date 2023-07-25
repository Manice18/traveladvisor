import { create } from 'zustand';

export const useLocationStore = create((set, get) => ({
    attractions: [],
    attractionCoordinates: [],
    location: "",
    updateLocation: (newLocation) => {
        const amountState = get().location
        set({ location: newLocation + amountState })
    },
    updateAttractions: (newAttraction) => {
        set((state) => ({
            attractions: [
                ...state.attractions,
                {
                    value: newAttraction,
                    label: newAttraction
                }
            ]
        }))
    },
    updateAttractionCoordinates: (newCoordinatesLati, newCoordinatesLongi) => {
        set((state) => ({
            attractionCoordinates: [
                ...state.attractionCoordinates,
                {
                    latitude: newCoordinatesLati,
                    longitude: newCoordinatesLongi
                }
            ]
        }))
    }
}));
