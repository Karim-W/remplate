import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "@/Pages";
import { useTheme } from "@/Store";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
]);

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={`${theme}`}>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
