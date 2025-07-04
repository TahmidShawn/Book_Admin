import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BookProvider } from "./context/BookContext";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <BookProvider>
                <App />
            </BookProvider>
        </BrowserRouter>
    </QueryClientProvider>
);
