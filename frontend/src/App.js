import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Collections from "@/components/Collections";
import FAQ from "@/components/FAQ";
import ThankYou from "@/components/ThankYou";
import Contact from "@/components/Contact";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased" data-testid="portfolio-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Collections />
        <FAQ />
        <ThankYou />
        <Contact />
      </main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1A1A24",
            color: "#F6D34B",
            border: "2px solid #F6D34B",
            fontFamily: "Space Mono, monospace",
            fontSize: "12px",
          },
        }}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
