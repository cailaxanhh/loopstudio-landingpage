import Header from './components/Header/Header';
import LandingSection from './components/LandingSection/LandingSection';
import './App.css';
import React from 'react';
import Intro from "./components/Intro/Intro";
import OurCreations from './components/OurCreations/OurCreations';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingSection />
      <Intro />
      <OurCreations />
      <Footer />
    </div>
  );
}

export default App;
