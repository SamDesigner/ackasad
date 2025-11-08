// import Loader from "./loader";
"use client";
import Navbar from "@/component/Navbar";
import Showcase from "@/component/Showcase";
import LogisticsService from '@/component/LogisticsService'
import About from "@/component/About";
import InvestmentService from "@/component/InvestmentService";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Showcase />
      <About />
      <LogisticsService />
      <InvestmentService />
      <Contact />
      <Footer />
    </div>
  );
}
