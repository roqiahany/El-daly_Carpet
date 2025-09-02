import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';

import Offers from './pages/Offers';

import Slider from './components/slider';
import ProductDetails from './pages/ProductDetails';
import About from './components/Apout';
import Contact from './components/Contact';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Slider />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/product/:category/:id" element={<ProductDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
