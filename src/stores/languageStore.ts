import {create} from "zustand";
import type {Language} from "../types/types";

type LanguageStore = {
    language: Language,
    toggleLanguage: () => void,
}

export const useLanguageStore = create<LanguageStore>((set) => ({
    language: "de",
    toggleLanguage: () => set((state) => ({
        language: state.language === "de" ? "en" : "de"
    })),
}));