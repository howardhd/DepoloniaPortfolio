import Header from './components/header';
import Hero from './components/hero';
import Work from './components/Work';
import About from './components/about';
import Footer from './components/Footer';
import './styles.css'; // Make sure this file exists

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <Work />
        <About />
      </main>
      <Footer />
    </div>
  );
}