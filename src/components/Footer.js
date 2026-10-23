import styled from "styled-components";
import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";

import siteConfig from "../data/siteConfig";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTop>
          <FooterBrand href="#home">
            <span className="logo">DEV.</span>
            <span className="label">PORTFOLIO</span>
          </FooterBrand>

          <FooterDescription>
            Building thoughtful digital experiences
            <br />
            with modern web technologies.
          </FooterDescription>

          <BackToTop href="#home">
            Back to top
            <FiArrowUp />
          </BackToTop>
        </FooterTop>

        <FooterDivider />

        <FooterBottom>
          <Copyright>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </Copyright>

          <FooterLinks>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              GitHub <FiArrowUpRight />
            </a>

            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <FiArrowUpRight />
            </a>
          </FooterLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

// ==================== STYLES ====================

const FooterWrapper = styled.footer`
  padding: 35px 24px 25px;
  border-top: 1px solid var(--border-color);
  background: var(--bg-secondary);

  @media (max-width: 600px) {
    padding: 30px 20px 24px;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  padding-bottom: 30px;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
  }
`;

const FooterBrand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  .logo {
    color: var(--accent);
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -1.5px;
  }

  .label {
    padding-left: 10px;
    border-left: 1px solid var(--border-color);
    color: var(--text-secondary);
    font-size: 10px;
    letter-spacing: 1.8px;
  }
`;

const FooterDescription = styled.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 12px;
  line-height: 1.8;

  @media (max-width: 700px) {
    font-size: 13px;
  }
`;

const BackToTop = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 12px;
  transition: color 0.2s ease;

  svg {
    color: var(--accent);
    font-size: 17px;
  }

  &:hover {
    color: var(--accent);
  }
`;

const FooterDivider = styled.div`
  height: 1px;
  background: var(--border-color);
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-top: 22px;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
  }
`;

const Copyright = styled.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 11px;
  line-height: 1.7;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 11px;
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--accent);
  }
`;
