import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
