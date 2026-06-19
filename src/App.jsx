import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <BrowserRouter>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="min-h-screen">
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>
      </main>

      {/* Common Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;