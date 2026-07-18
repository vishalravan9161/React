// import React from 'react'

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Product from "./Pages/Product";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Navbar2 from "./components/Navbar2";
const App = () => {
  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Mens />} />
          <Route path="women" element={<Womens />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
