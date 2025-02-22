import { createBrowserRouter } from "react-router"
import { Layout } from "./components/Layout";

import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Product } from "./pages/procuct";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: 'product/:id',
        element: <Product/>
      },
      {
        path: '*',
        element: <Home/>
      }
    ]
  }
]);

export { router };
