import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AiEdge from './components/AiEdge';
import Omnichannel from './components/Omnichannel';
import Features from './components/Features';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <AiEdge />
        <Omnichannel />
        <Features />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}

export default App;
