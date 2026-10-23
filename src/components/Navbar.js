import { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

// const navLinks = [
//   { label: "Home", href: "#home" },
//   { label: "Projects", href: "#projects" },
//   { label: "About", href: "#about" },
//   { label: "Contact", href: "#contact" },
// ];
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Header>
      <NavContainer>
        <Logo href="#home" onClick={closeMenu}>
          <LogoMark>DEV.</LogoMark>
          <LogoText>PORTFOLIO</LogoText>
        </Logo>

        <DesktopLinks aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </DesktopLinks>

        <DesktopContact
          href="#contact"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Let's Talk
          <FiArrowUpRight size={17} />
        </DesktopContact>

        <MenuButton
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
        </MenuButton>
      </NavContainer>

      <AnimatePresence>
        {menuOpen && (
          <>
            <MobileBackdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            <MobileMenu
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link, index) => (
                <MobileLink
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  {link.label}
                  <FiArrowUpRight size={18} />
                </MobileLink>
              ))}

              <MobileContact href="#contact" onClick={closeMenu}>
                Let's Talk <FiArrowUpRight size={18} />
              </MobileContact>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  background: rgba(13, 13, 13, 0.86);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
`;

const NavContainer = styled.nav`
  width: min(1200px, calc(100% - 64px));
  height: 82px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    height: 72px;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const LogoMark = styled.span`
  font-family: "Space Grotesk", sans-serif;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -1.5px;
  color: var(--accent);
`;

const LogoText = styled.span`
  color: var(--text-secondary);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;

  @media (max-width: 380px) {
    display: none;
  }
`;

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: 900px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  padding: 8px 0;
  color: var(--text-secondary);
  font-size: 13px;
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent);
    transition: width 0.2s ease;
  }

  &:hover {
    color: var(--text-primary);
  }

  &:hover::after {
    width: 100%;
  }
`;

const DesktopContact = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 11px 17px;
  border: 1px solid rgba(184, 149, 100, 0.5);
  border-radius: 6px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 600;

  &:hover {
    background: rgba(184, 149, 100, 0.1);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-secondary);
  color: var(--accent);
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileBackdrop = styled(motion.div)`
  position: fixed;
  inset: 72px 0 0;
  z-index: -1;
  background: rgba(0, 0, 0, 0.55);
`;

const MobileMenu = styled(motion.nav)`
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  width: 100%;
  padding: 18px 20px 24px;
  border-bottom: 1px solid var(--border-color);
  background: #111;
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.25);
`;

const MobileLink = styled(motion.a)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 2px;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 15px;

  &:hover {
    color: var(--accent);
  }
`;

const MobileContact = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  padding: 13px;
  border-radius: 6px;
  background: var(--accent);
  color: #111;
  font-weight: 700;
`;
