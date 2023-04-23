import { WelcomeBlock } from "@/Components";
import React from "react";

export const HomePage = () => {
    return (
        <div
            className={`w-screen min-h-screen grid place-items-center 
      bg-gradient-to-br from-emerald-400 to-emerald-800
    dark:bg-gradient-to-br dark:from-[#0d0d32] dark:to-[#1a1a1a] text-white 
    font-extralight text-5xl `}
        >
            <WelcomeBlock />
        </div>
    );
};
