import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiDownload,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import siteConfig from "../data/siteConfig";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionLabel>
          <span>04</span> / GET IN TOUCH
        </SectionLabel>

        <ContactContent>
          <ContactText
            as={motion.div}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              Have a project in mind?
              <br />
              <span>Let's talk.</span>
            </h2>

            <p>
              I'm interested in full stack development opportunities and
              building useful digital products. If you're looking for a
              developer to join your team or work on a project, feel free to get
              in touch.
            </p>

            <EmailLink href={`mailto:${siteConfig.email}`}>
              <EmailIcon>
                <FiMail />
              </EmailIcon>

              <EmailDetails>
                <span>EMAIL ME AT</span>
                <strong>{siteConfig.email}</strong>
              </EmailDetails>

              <FiArrowUpRight className="arrow" />
            </EmailLink>
          </ContactText>

          <ContactCard
            as={motion.div}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <CardTop>
              <div className="status-dot" />
              <span>LET'S CONNECT</span>
            </CardTop>

            <h3>Let's build something meaningful.</h3>

            <p>
              Open to discussing development roles, collaborations, and
              interesting ideas.
            </p>

            <Location>
              <FiMapPin />
              <span>{siteConfig.location}</span>
            </Location>

            <SocialLinks>
              <SocialLink
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <FiGithub />
                <span>GitHub</span>
                <FiArrowUpRight className="arrow" />
              </SocialLink>

              <SocialLink
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
                <FiArrowUpRight className="arrow" />
              </SocialLink>
            </SocialLinks>

            <ResumeButton
              href={siteConfig.resumePath}
              download="Full-Stack-Developer-CV.pdf"
            >
              <FiDownload />
              Download My CV
            </ResumeButton>
          </ContactCard>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;

// ==================== STYLES ====================

const ContactSection = styled.section`
  padding: 120px 24px;
  background: var(--bg-primary);
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    padding: 85px 20px;
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 55px;
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;

  span {
    color: var(--accent);
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 45px;
  }
`;

const ContactText = styled.div`
  h2 {
    margin: 0 0 25px;
    color: var(--text-primary);
    font-size: clamp(38px, 5vw, 64px);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -2.5px;

    span {
      color: var(--accent);
    }
  }

  > p {
    max-width: 530px;
    margin: 0 0 35px;
    color: var(--text-secondary);
    font-size: 15px;
    line-height: 1.9;
  }

  @media (max-width: 600px) {
    h2 {
      letter-spacing: -1.5px;
    }
  }
`;

const EmailLink = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 440px;
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  text-decoration: none;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-3px);
  }

  .arrow {
    margin-left: auto;
    color: var(--accent);
    font-size: 20px;
    flex-shrink: 0;
  }
`;

const EmailIcon = styled.div`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: rgba(184, 149, 100, 0.12);
  color: var(--accent);
  font-size: 21px;
  flex-shrink: 0;
`;

const EmailDetails = styled.div`
  min-width: 0;

  span {
    display: block;
    margin-bottom: 6px;
    color: var(--text-secondary);
    font-size: 10px;
    letter-spacing: 1.5px;
  }

  strong {
    display: block;
    overflow-wrap: anywhere;
    font-size: 14px;
    font-weight: 500;
  }
`;

const ContactCard = styled.div`
  padding: 32px;
  border: 1px solid var(--border-color);
  border-radius: 18px;
  background: radial-gradient(
      circle at top right,
      rgba(184, 149, 100, 0.09),
      transparent 45%
    ),
    var(--bg-secondary);

  h3 {
    margin: 28px 0 14px;
    color: var(--text-primary);
    font-size: 26px;
    line-height: 1.4;
  }

  > p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.8;
  }

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.8px;

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #75c99a;
    box-shadow: 0 0 10px rgba(117, 201, 154, 0.35);
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 24px 0;
  color: var(--text-secondary);
  font-size: 13px;

  svg {
    color: var(--accent);
    font-size: 17px;
  }
`;

const SocialLinks = styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 22px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 15px;
  border: 1px solid var(--border-color);
  border-radius: 9px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 13px;
  transition: border-color 0.2s ease, background 0.2s ease;

  > svg:first-child {
    color: var(--accent);
    font-size: 18px;
  }

  .arrow {
    margin-left: auto;
    color: var(--text-secondary);
  }

  &:hover {
    border-color: var(--accent);
    background: rgba(184, 149, 100, 0.05);
  }
`;

const ResumeButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 15px 20px;
  border: 1px solid var(--accent);
  border-radius: 9px;
  background: var(--accent);
  color: #111;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
  }
`;
