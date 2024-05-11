import { create } from "zustand";

type state = {
	time: number;
	setTime: (time: number) => void;
};

export const useStore = create<state>((set) => ({
	time: 0,
	setTime: (time) => set({ time }),
}));
