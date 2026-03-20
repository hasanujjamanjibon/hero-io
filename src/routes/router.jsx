import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../Page/Home';
import Details from '../Page/Details';
import Apps from '../Page/Apps';
import Installation from '../Page/Installation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/details', element: <Details /> },
      { path: '/apps', element: <Apps /> },
      { path: '/installation', element: <Installation /> },
    ],
  },
]);

export default router;
