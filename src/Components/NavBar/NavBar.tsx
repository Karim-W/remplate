import React from "react";
import { useTheme } from "@/Store";

export const NavBar = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div
            className="sticky top-0 z-50 flex h-16 w-[100vw] flex-row 
      items-center justify-between p-4 px-4 py-2 text-white shadow-lg
      drop-shadow-lg backdrop-blur-lg
      dark:bg-stone-900 dark:text-black dark:backdrop-blur-none
      "
            style={{ backgroundColor: "rgba(0, 0, 0, .12)" }}
        >
            <h1 className="text-2xl font-bold">Remplate</h1>
            <div
                className="h-10 w-10 cursor-pointer rounded-lg p-1 text-center 
      text-white hover:bg-stone-900 dark:hover:bg-stone-200 dark:hover:text-black"
                onClick={toggleTheme}
            >
                {theme === "light" && <p>🌙</p>}
                {theme === "dark" && <p>☀️</p>}
            </div>
        </div>
    );
};
