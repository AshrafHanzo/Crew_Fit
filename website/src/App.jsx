import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import PrintGuide from './components/PrintGuide';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <PrintGuide />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
