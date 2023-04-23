import React from "react";
import { getCurrentDate } from "@/Querries";
import { useQuery } from "@tanstack/react-query";
import { WelcomePlaceholder } from "./placeholder";

export const WelcomeBlock = (): JSX.Element => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["welcome"],
        queryFn: getCurrentDate,
        refetchInterval: 1000,
    });
    if (isLoading) return <WelcomePlaceholder />;
    if (error) return <div>Something went wrong</div>;
    return (
        <div
            className="bg-white bg-opacity-10 p-10 rounded-xl flex flex-col
      items-center gap-4"
        >
            <h1>Remplate</h1>
            <p>React + Tailwind + Typescript</p>
            <code className=" w-full text-center bg-black bg-opacity-50 p-2 rounded-xl">
                {data}
            </code>
        </div>
    );
};
