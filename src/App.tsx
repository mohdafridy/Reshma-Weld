import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import SalesRental from "./pages/SalesRental";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales-rental" element={<SalesRental />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
