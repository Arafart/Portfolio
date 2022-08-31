import "./App.css";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/About/About";
import Experience from "./component/Experience/Experience";
import Services from "./component/Services/Services";
import Portfolio from "./component/Portfolio/Portfolio";
import Testimonial from "./component/Testimonials/Testimonial";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
