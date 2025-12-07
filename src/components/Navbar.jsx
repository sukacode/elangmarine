import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
      // console.log("scroll berjalan...", window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-7 flex items-center justify-between ">
      <div className="logo">
        <h1 className="text-2xl font-bold text-white opacity-90 p-1 md:bg-transparent md:text-white">
          <img
            src="/assets/elangmarine.ico"
            alt="Hero Image"
            className="w-15 rounded-md"
            loading="lazy"
          />
          PT. Elang Marine Teknindo
        </h1>
      </div>

      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-50 ${
          active ? "top-0 opacity-100" : "-top-10 opacity-0"
        }`}
      >
        <li>
          <a href="#home" className="sm:text-lg text-base font-medium">
            Beranda
          </a>
        </li>
        <li>
          <a href="#about" className="sm:text-lg text-base font-medium">
            Tentang
          </a>
        </li>
        <li>
          <a href="#product" className="sm:text-lg text-base font-medium">
            Produk
          </a>
        </li>
        <li>
          <a href="#contact" className="sm:text-lg text-base font-medium">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
