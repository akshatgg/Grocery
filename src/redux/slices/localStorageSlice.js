import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
};

const localStorageSlice = createSlice({
    name: 'locallyStorage',
    initialState,
    reducers: {
        setData: (state, action) => {
            const storedData = localStorage.getItem('data');
            const existingData = storedData ? JSON.parse(storedData) : [];
        
            if (!Array.isArray(existingData)) {
                console.warn("Invalid data format in localStorage, resetting...");
                localStorage.setItem('data', JSON.stringify([]));
                state.data = [];
                return;
            }
        
            const { id, title, price, quantity } = action.payload;
        
            if (id === undefined || id === null) {
                console.error("Invalid item ID:", action.payload);
                return;
            }
        
            const itemIndex = existingData.findIndex(item => item.id === id);
        
            if (itemIndex !== -1) {
                // Update quantity if item exists
                existingData[itemIndex].quantity += quantity;
            } else {
                // Add new item only if it has a valid id
                existingData.push({ id, title, price, quantity });
            }
        
            state.data = existingData;
            localStorage.setItem('data', JSON.stringify(existingData));
        },
        
        

        
        
        
        loadData: (state) => {
            const storedData = localStorage.getItem('data');
            if (storedData) {
                state.data = JSON.parse(storedData);
            }
        },
        clearData: (state, action) => {
            if (action.payload) {
                const storedData = JSON.parse(localStorage.getItem('data')) || {};
                delete storedData[action.payload]; // Remove specific property
                state.data = storedData;
                localStorage.setItem('data', JSON.stringify(storedData));
            } else {
                state.data = null;
                localStorage.removeItem('data');
            }
        }
        
    },
});

export const localStorageAction = localStorageSlice.actions;

export default localStorageSlice.reducer;