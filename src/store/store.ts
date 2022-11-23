import create from "zustand";
import { persist } from "zustand/middleware";
type Store = {
	token: string;
};

type Actions = {
	setToken: (token: string) => void;
};

export const useAuthStore = create<Store & Actions>()(
	persist(
		(set) => ({
			// bears: 0,
			// increasePopulation: () =>
			// 	set((state: any) => ({ bears: state.bears + 1 })),
			// decreasePopulation: () =>
			// 	set((state: any) => ({ bears: state.bears - 1 })),
			// removeAllBears: () => set({ bears: 0 }),
			token: "",
			setToken: (token) => set((state) => ({ token: token })),
		}),
		{ name: "global", getStorage: () => localStorage }
	)
);
