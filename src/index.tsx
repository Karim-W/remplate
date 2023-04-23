import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NavBar } from "@/Components";
import "./index.css";
const doc = document.getElementById("root") ?? document.body;
const queryClient = new QueryClient();
ReactDOM.createRoot(doc).render(
    <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
        <NavBar />
        <App />
    </QueryClientProvider>
);
