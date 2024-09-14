import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NextPage from "./pages/nextPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/NextPage",
    element: <NextPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
