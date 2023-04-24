import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ImageState {
  padding: number;
  rounded: number;
  updatePadding: (padding: number) => void;
  updateRounded: (rounded: number) => void;
}

export const useImageSettings = create<ImageState>()(
  devtools(
    persist(
      (set) => ({
        padding: 0,
        rounded: 0,
        updatePadding: (padding: number) => set({ padding }),
        updateRounded: (rounded: number) => set({ rounded }),
      }),
      {
        name: "image-settings-storage",
      }
    )
  )
);
