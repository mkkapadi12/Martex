import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import Blog from "./pages/Blog/blog";
import Project from "./pages/Project/Project";
import SingleBlog from "./pages/Blog/SingleBlog";
import ProjectDetails from "./pages/ProjectDetail/ProjectDetails";
import Download from "./pages/Download";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/singleblog" element={<SingleBlog />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/download" element={<Download />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
