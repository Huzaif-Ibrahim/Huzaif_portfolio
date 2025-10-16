"use client"
import { Analytics } from "@vercel/analytics/next"
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestWork from "./components/LatestWork";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const [light, setLight] = useState(false)

  return (
    <>
    <Analytics />
    <ToastContainer />
      <div className={`transition-all duration-700 ${light ? 'bg-white text-gray-700' : "bg-[#11001f] text-white"}`}>
      <Navbar light={light} setLight={setLight} />
      <Header light={light}/>
      <About light={light}/>
      <Services light={light} />
      <LatestWork light={light} />
      <Contact light={light} />
      <Footer light={light} />
      </div>
    </>
  );
}
