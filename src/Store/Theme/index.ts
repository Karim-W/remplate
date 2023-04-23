import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const APP_THEME_KEY = "app-theme";

export const useTheme = create<ThemeState>()(
    persist(
        devtools((set) => ({
            theme: (() => {
                if (typeof window !== "undefined") {
                    return localStorage.getItem(APP_THEME_KEY) === "dark"
                        ? "dark"
                        : "light";
                }
                return "dark";
            })(),
            toggleTheme: () =>
                set((state) => {
                    if (typeof window === "undefined") {
                        return { theme: "dark" };
                    }
                    const theme = state.theme === "dark" ? "light" : "dark";
                    localStorage.setItem(APP_THEME_KEY, theme.toString());
                    return { theme };
                }),
        })),
        { name: "theme" }
    )
);
