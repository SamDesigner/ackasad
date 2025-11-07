// import Loader from "./loader";
"use client";
import Navbar from "@/component/Navbar";
import Showcase from "@/component/Showcase";
import About from "@/component/About";
import Projects from "@/component/Projects";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
