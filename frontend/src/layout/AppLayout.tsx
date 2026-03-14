// import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow py-6">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;