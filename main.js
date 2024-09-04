import React, { useState } from 'react';
import ScrollReveal from 'scrollreveal';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    // Add other ScrollReveal settings here...
  }, []);

  return (
    <div>
      <button onClick={toggleMenu} id="menu-btn">
        <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </button>
      <nav id="nav-links" className={isOpen ? "open" : ""} onClick={handleNavLinkClick}>
        {/* Navigation links here */}
      </nav>
    </div>
  );
};

export default Menu;
