import { create } from 'zustand';

export const useBookStore = create((set, get) => ({
    amount: 40,
    title: "hi there",
    updateamount: (newAmount) => {
        const amountState = get().amount
        set({ amount: newAmount + amountState })
    }
}));
