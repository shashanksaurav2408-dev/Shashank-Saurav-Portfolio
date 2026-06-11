import React, { useState, useEffect } from "react";

const links = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "journey", label: "THE JOURNEY" },
  { id: "collections", label: "COLLECTIONS" },
  { id: "contact", label: "COFFEE?" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-steel/95 backdrop-blur-md border-b-2 border-ink" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => scrollTo("home")}
          className="font-mono text-xs md:text-sm tracking-[0.25em] text-white hover:text-sun transition-colors"
        >
          SHASHANK<span className="text-sun">.</span>SAURAV
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-${l.id}`}
              onClick={() => scrollTo(l.id)}
              className="font-mono text-xs tracking-[0.2em] text-white hover:text-sun transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sun group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white border-2 border-white px-3 py-1 font-mono text-xs"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {open && (
        <div data-testid="nav-mobile-panel" className="md:hidden bg-ink border-t-2 border-sun">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-mobile-${l.id}`}
                onClick={() => {
                  scrollTo(l.id);
                  setOpen(false);
                }}
                className="font-mono text-xs tracking-[0.2em] text-white hover:text-sun text-left"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
