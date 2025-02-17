import { Route, Routes } from "react-router-dom"; // Use `Routes` instead of `Switch`
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Teams from "./Teams";
import Blog from "./Blog";
import Contact from "./Contact";

const RoutesComponent = () => {
  return (
    <Routes>
      {/* Use the `element` prop to pass the component */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      {/* Optional 404 page */}
      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>
  );
};

export default RoutesComponent;
