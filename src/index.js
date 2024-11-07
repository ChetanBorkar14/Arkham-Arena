import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NextPage from "./pages/gamepage/nextPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/nextPage", // Changed to lowercase "n"
    element: <NextPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
