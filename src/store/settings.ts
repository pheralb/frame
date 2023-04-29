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
        gradient: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
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

interface iEditorSettings {
  dots: boolean;
  activateDots: (activate: boolean) => void;
}

export const useEditorSettings = create<iEditorSettings>()(
  devtools(
    persist(
      (set) => ({
        dots: true,
        activateDots: (dots: boolean) => set({ dots }),
      }),
      {
        name: "editor-settings-storage",
      }
    )
  )
);
