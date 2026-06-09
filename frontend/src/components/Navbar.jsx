import { useState } from "react";
import { Menu, X } from "lucide-react";
import MagneticLogo from "./animations/MagneticLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  const navItems = ["Home", "Projects", "About"];

  const handleNavClick = (item) => {
    setActiveNav(item);
    setIsOpen(false);
  };

  return (
    <header className="w-full px-5 md:px-10 py-5 text-white">
      <nav className="flex items-center justify-between">

        <MagneticLogo/>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 font-medium">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => handleNavClick(item)}
                className={`
                  relative
                  cursor-pointer
                  transition-all
                  ease-in-out
                  duration-300
                  hover:text-(--primary-text-color)

                  ${
                    activeNav === item
                      ? "text-(--primary-text-color)"
                      : "text-(--primary-offwhite-color)"
                  }
                `}
              >
                {item}

                {activeNav === item && (
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-0.5
                      w-full
                      rounded-full
                      bg-(--primary-text-color)
                    "
                  />
                )}
              </li>
            ))}
          </ul>

          <button
            className="button-82-pushable"
            role="button"
          >
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">
              Connect Me
            </span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            className="button-82-pushable"
            role="button"
          >
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">
              Connect
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              h-10
              w-10
              flex
              items-center
              justify-center
              rounded-full
              border
              border-zinc-700
              transition-all
              duration-300
              hover:border-(--primary-text-color)
            "
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out

          ${
            isOpen
              ? "max-h-64 opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            rounded-2xl
            border
            border-zinc-800
            bg-black/40
            backdrop-blur-md
            p-4
          "
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => handleNavClick(item)}
                className={`
                  cursor-pointer
                  py-2
                  font-medium
                  transition-all
                  duration-300

                  ${
                    activeNav === item
                      ? "text-(--primary-text-color)"
                      : "text-(--primary-offwhite-color)"
                  }

                  hover:translate-x-2
                `}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;