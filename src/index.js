import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Article from './pages/Article';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Temp from './pages/Temp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/Home" element={<><Navbar /><Home /><Footer/></>}></Route>
          <Route path="/AboutUs" element={<><Navbar /><AboutUs /><Footer/></>}></Route>
          <Route path="/ContactUs" element={<><ContactUs /><Footer/></>}></Route>
          <Route path="/PrivacyPolicy" element={<><Navbar /><PrivacyPolicy /><Footer/></>}></Route>
          <Route path="/Disclaimer" element={<><Navbar /><Disclaimer /><Footer/></>}></Route>
          <Route path="/Article/:ArticleId" element={<><Navbar /><Article /><Footer/></>}></Route>
          <Route path="/Temp" element={<><Navbar /><Temp /><Footer/></>}></Route>
          <Route path="/*" element={<Navigate to='Home' />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);