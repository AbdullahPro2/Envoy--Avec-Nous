import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Registration from './features/User/Registration';
import About from './ui/About';
import Transaction from './features/Transaction/Transaction';
import Products from './ui/Products';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/app',
        element: <Transaction />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
