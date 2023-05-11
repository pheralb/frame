import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface iBackgroundState {
  padding: number;
  rounded: number;
  gradient: string;
  updateGradient: (gradient: string) => void;
  updatePadding: (padding: number) => void;
  updateRounded: (rounded: number) => void;
}

export const useBackgroundSettings = create<iBackgroundState>()(
  devtools(
    persist(
      (set) => ({
        padding: 30,
        rounded: 30,
        gradient: "",
        updateGradient: (gradient: string) => set({ gradient }),
        updatePadding: (padding: number) => set({ padding }),
        updateRounded: (rounded: number) => set({ rounded }),
      }),
      {
        name: "background-settings-storage",
      }
    )
  )
);
