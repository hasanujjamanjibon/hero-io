import { Outlet } from 'react-router';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
