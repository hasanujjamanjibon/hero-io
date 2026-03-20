import { Outlet } from 'react-router';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className='min-h-[calc(100vh-85px)] max-w-6xl mx-auto px-4 md:px-8 py-8'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
