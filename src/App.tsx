import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import './App.css'
import { Routes, Route } from 'react-router'
import Homepage from './pages/HomePage.tsx'
import About from './pages/AboutPage.tsx'
import NotFound from './pages/NotFoundPage.tsx'
import ProductDetail from './pages/ProductDetailPage.tsx'
import ProductListPrice from './pages/ProductListPrice.tsx'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-list" element={<ProductListPrice />} />

        {/* Dynamic Route */}
        <Route path="/product/:slug" element={<ProductDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
