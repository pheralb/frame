import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface iImageState {
  rounded: number;
  updateRounded: (rounded: number) => void;
}

export const useImageSettings = create<iImageState>()(
  devtools(
    persist(
      (set) => ({
        rounded: 0,
        updateRounded: (rounded: number) => set({ rounded }),
      }),
      {
        name: "image-settings-storage",
      }
    )
  )
);
