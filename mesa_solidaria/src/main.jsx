import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/home.jsx";
import Cadastro from "./routes/Cadastro/Cadastro.jsx";
import Carrinho from "./routes/Carrinho/carrinho.jsx";
import Produtos from "./routes/Produtos/produtos.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path:"/", element: <Home />,
  },
  {
    path:"cadastro", element: <Cadastro />,
  },
  {
    path:"carrinho", element: <Carrinho />,
  },
  {
    path:"produtos", element: <Produtos />,
  }

]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
