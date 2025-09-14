import { useState } from "react";
import { useMediaQuery } from "../Hook/mediaQuery";
import logoSpider from "../images/logo/image 1 (Traced).svg";

type HeaderProp = {
  navRef: React.Ref<HTMLElement>;
};

export function Header({ navRef }: HeaderProp) {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktopandTablet = useMediaQuery('(min-width: 769px)')
  return (
    <header className={`w-full mx-auto flex justify-center px-4 py-4 backdrop-blur-[15px] absolute  z-50 ${isMobile ? 'shadow-[0_0_31px_rgba(244,89,89,0.4)] bg-black/70' : 'bg-transparent'}`} >
      {/* Menu Desktop */}
      {isDesktopandTablet && (
        <nav
          ref={navRef}
          className="gsapAnimation flex text-[#eee] max-w-7xl justify-center items-center absolute gap-16 z-40"
        >
          <a href="#">COLLECTIONS</a>
          <a href="#">ADD-ONS</a>
          <a href="#">
            <img
              src={logoSpider}
              className="w-[112px] h-[133px] mt-4"
              alt="Logo Spider"
            />
          </a>
          <a href="#">WALLPAPERS</a>
          <a href="#">ABOUT</a>
        </nav>
      )}

      {/* Menu Mobile */}
      {isMobile && (
        <div className="w-full flex justify-between items-center">
          <img
            src={logoSpider}
            className="w-[64px] h-[64px]"
            alt="Logo Spider"
          />

          <button onClick={() => setOpen((prev) => !prev)} className="flex flex-col gap-1 z-50">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>

          <nav
            className={`${
              open ? "flex" : "hidden"
            }  top-24 left-0 w-full fixed h-dvh  bg-[rgba(35,44,62,0.4)] backdrop-blur-[15px] z-50 flex-col items-center gap-6 py-6 text-white transition-all ` }
          >
            <a href="#" className="hover:text-blue-400">
              Início
            </a>
            <a href="#" className="hover:text-blue-400">
              Add-ons
            </a>
            <a href="#" className="hover:text-blue-400">
              Wallpapers
            </a>
            <a href="#" className="hover:text-blue-400">
              Sobre
            </a>
            <a href="#" className="hover:text-blue-400">
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
