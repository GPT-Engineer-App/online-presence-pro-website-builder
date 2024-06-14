import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import GoogleMaps from "./pages/GoogleMaps.jsx";
import WebsiteCreation from "./pages/WebsiteCreation.jsx";
import LogoCustomization from "./pages/LogoCustomization.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Blog from "./pages/Blog.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/google-maps" element={<GoogleMaps />} />
        <Route exact path="/website-creation" element={<WebsiteCreation />} />
        <Route exact path="/logo-customization" element={<LogoCustomization />} />
        <Route exact path="/testimonials" element={<Testimonials />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;