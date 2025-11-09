// import Loader from "./loader";
"use client";

import Showcase from "@/component/Showcase";
import LogisticsService from '@/component/LogisticsService'
import About from "@/component/About";
import InvestmentService from "@/component/InvestmentService";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Testimonials from "@/component/Testimonials";
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Showcase />
      <About />
      <LogisticsService />
      <InvestmentService />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
