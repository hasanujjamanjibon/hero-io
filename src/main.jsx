import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './routes/router.jsx';
import ContextProvider from './provider/ContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <div className='bg-slate-50'>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </div>
);
