import { create } from "zustand";

interface pageCountStore {
  pageCount: number;
  setPageCount: (pageCount: number) => void;
}

export const usePageCountStore = create<pageCountStore>((set) => ({
  pageCount: 0,
  setPageCount: (pageCount: number) => set({ pageCount: pageCount }),
}));
