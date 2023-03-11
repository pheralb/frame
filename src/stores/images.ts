import { create } from "zustand";

export const useImagesStore = create((set) => ({
  image: "",
  setImage: (image: string) => set({ image }),
}));
