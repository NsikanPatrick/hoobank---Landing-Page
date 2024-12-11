import { useState, useEffect } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../Constants";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  let closeTimeout;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    closeTimeout = setTimeout(() => {
      setToggle(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      clearTimeout(closeTimeout); // Clear timeout on unmount
    };
  }, []);

  // Review this function again. It is to control slide-in and slide-out effects of the mobile menu
  // I've suspended it temp and just use state to fire the event as only the slide-in part works, the slide out doesnt.
  const handleToggle = () => {
    if (toggle) {
      setIsClosing(true); // Set closing state when toggling off
      setTimeout(() => {
        setToggle(false); // Actually close after animation duration
        setIsClosing(false); // Reset closing state
      }, 500); // Match this duration with the CSS animation duration
    } else {
      setToggle(true); // Open menu
      setIsClosing(false); // Reset closing state when opening
    }
  };

  // An effect to remove the vertical scroll bar when the mobile drop down menu is active
  useEffect(() => {
    if (toggle) {
      document.body.classList.add("no-scroll"); 
    } else {
      document.body.classList.remove("no-scroll"); 
    }

    return () => {
      document.body.classList.remove("no-scroll"); // Clean up on unmount
    };
  }, [toggle]);

  const NavLink = ({ title, onClick }) => (
    <LinkScroll
      to={title.toLowerCase()}
      offset={-100}
      spy
      smooth
      duration={300}
      onClick={onClick}
      className="hover:text-secondary duration-500"
    >
      {title}
    </LinkScroll>
  );

  return (
    <nav
      className={`w-full flex py-6 justify-between items-center navbar ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <img src={logo} alt="Hoobank" className="w-[154px] h-[52px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <NavLink title={nav.title} />
          </li>
        ))}
      </ul>

      {/* Mobile navigational Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          // onClick={handleToggle}
        />

        {/* Mobile Menu Items (with Tailwind CSS animation) */}
        <div
          className={`${toggle ? "fixed left-[-15px] top-[84px] w-full h-screen z-50 overflow-hidden bg-black-gradient ease-in-out duration-300"
              : "hidden"} ${isClosing ? "animate-slide-out-left" : ""} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer py-5 text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                {/* I've replaced this section with react-scroll as shown below it
                <a
                  href={`#${nav.id}`} 
                  className="hover:text-secondary duration-500" onClick={() => {
                    setToggle((prev) => !prev);
                  }}
                >
                  {nav.title}
                </a> */}

                <NavLink title={nav.title} onClick={handleLinkClick} />
              </li>
            ))}
          </ul>
        </div>
        {/* End of Mobile Menu Items */}
      </div>
      {/* End of Mobile Navigational Menu */}
    </nav>
  );
};

export default Navbar;
