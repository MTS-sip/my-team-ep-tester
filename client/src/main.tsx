import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Create from './pages/Create';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      {
        index: true,
        element: <Home />, // Default route should be Home
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/create-event',
        element: <Create />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}



