import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface iBackgroundState {
  padding: number;
  rounded: number;
  updatePadding: (padding: number) => void;
  updateRounded: (rounded: number) => void;
}

export const useBackgroundSettings = create<iBackgroundState>()(
  devtools(
    persist(
      (set) => ({
        padding: 0,
        rounded: 0,
        updatePadding: (padding: number) => set({ padding }),
        updateRounded: (rounded: number) => set({ rounded }),
      }),
      {
        name: "background-settings-storage",
      }
    )
  )
);

interface iImageState {
  size: number;
  updateSize: (size: number) => void;
}

export const useImageSettings = create<iImageState>()(
  devtools(
    persist(
      (set) => ({
        size: 0,
        updateSize: (size: number) => set({ size }),
      }),
      {
        name: "image-settings-storage",
      }
    )
  )
);
