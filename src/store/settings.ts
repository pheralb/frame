import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface iBackgroundState {
  padding: number;
  rounded: number;
  shadow: number;
  shadowColor: string;
  updatePadding: (padding: number) => void;
  updateRounded: (rounded: number) => void;
  updateShadow: (shadow: number) => void;
  updateShadowColor: (shadowColor: string) => void;
}

export const useBackgroundSettings = create<iBackgroundState>()(
  devtools(
    persist(
      (set) => ({
        padding: 0,
        rounded: 0,
        shadow: 0,
        shadowColor: "#000000",
        updatePadding: (padding: number) => set({ padding }),
        updateRounded: (rounded: number) => set({ rounded }),
        updateShadow: (shadow: number) => set({ shadow }),
        updateShadowColor: (shadowColor: string) => set({ shadowColor }),
      }),
      {
        name: "background-settings-storage",
      }
    )
  )
);

interface iImageState {
  width: number;
  height: number;
  updateWidth: (width: number) => void;
  updateHeight: (height: number) => void;
}

export const useImageSettings = create<iImageState>()(
  devtools(
    persist(
      (set) => ({
        width: 0,
        height: 0,
        updateWidth: (width: number) => set({ width }),
        updateHeight: (height: number) => set({ height }),
      }),
      {
        name: "image-settings-storage",
      }
    )
  )
);
