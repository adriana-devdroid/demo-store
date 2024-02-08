import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Search{

    search: string;
    setSearch: (textSearch:string) => void;
}



export const useSearchStore = create(
    persist(
      (set, get) => ({ 
        search: "",
        setSearch: (textSearch: string) => set(() => ({search: textSearch} )),
      }), {
        name: "search-store",
      }))

      
export default useSearchStore;
