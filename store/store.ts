import create from "zustand";
import { persist } from "zustand/middleware";
type Store = {
	bears: number;
};

type Actions = {
	increasePopulation: () => void;
	decreasePopulation: () => void;
	removeAllBears: () => void;
};

export const useStore = create<Store & Actions>()(
	persist(
		(set) => ({
			bears: 0,
			increasePopulation: () =>
				set((state: any) => ({ bears: state.bears + 1 })),
			decreasePopulation: () =>
				set((state: any) => ({ bears: state.bears - 1 })),
			removeAllBears: () => set({ bears: 0 }),
		}),
		{ name: "global", getStorage: () => localStorage }
	)
);
