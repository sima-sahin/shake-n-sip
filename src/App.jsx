import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/footer/Footer';

function App() {

  return (
    <>

      <BrowserRouter>
        <ToastContainer position="top-center" autoClose={2000} />
        <ScrollToTop />
        <Navbar />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/cocktail/:slug" element={<DetailPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App;
