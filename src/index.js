import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NextPage from "./pages/gamepage/nextPage";
import TTT from "./pages/game/tictactoe/ttt";
import RPS from "./pages/game/rockpapersissors/rps";
import A from "./pages/game/a2048/a";
import Sudoko from "./pages/game/sudoko/sudoko";
import Chess from "./pages/game/chess/chess";
import SnL from "./pages/game/snakeandladder/snl";
import Ludo from "./pages/game/ludo/ludo";
import BS from "./pages/game/bubbleshooter/bs";
import MG from "./pages/game/memorygame/mg";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/nextPage",
    element: <NextPage />,
  },
  {
    path: "/ttt",
    element: <TTT />,
  },
  {
    path: "/rps",
    element: <RPS />,
  },
  {
    path: "/a",
    element: <A />,
  },
  {
    path: "/sudoko",
    element: <Sudoko />,
  },
  {
    path: "/chess",
    element: <Chess />,
  },
  {
    path: "/snl",
    element: <SnL />,
  },
  {
    path: "/ludo",
    element: <Ludo />,
  },
  {
    path: "/bs",
    element: <BS />,
  },
  {
    path: "/mg",
    element: <MG />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
