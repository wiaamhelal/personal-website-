import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiLayers,
  FiTerminal,
} from "react-icons/fi";

const technologies = [
  { name: "React.js", icon: FiLayers },
  { name: "Node.js", icon: FiTerminal },
  { name: "MongoDB", icon: FiDatabase },
  { name: "REST APIs", icon: FiCode },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <HeroSection id="home">
      <BackgroundGlow />

      <HeroContainer>
        <HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Availability variants={itemVariants}>
            <StatusDot />
            <span>FULL STACK DEVELOPER</span>
            <AvailabilityDivider />
            <span className="location">DUBAI, UAE</span>
          </Availability>

          <Heading variants={itemVariants}>
            Building digital
            <br />
            experiences that
            <br />
            <AccentText>make an impact.</AccentText>
          </Heading>

          <Description variants={itemVariants}>
            I build modern, scalable web applications from frontend interfaces
            to backend APIs. Focused on clean code, thoughtful user experiences,
            and real-world solutions.
          </Description>

          <Actions variants={itemVariants}>
            <PrimaryButton
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore My Work
              <FiArrowUpRight size={18} />
            </PrimaryButton>

            <SecondaryButton
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
              <FiArrowRight size={17} />
            </SecondaryButton>
          </Actions>

          <TechArea variants={itemVariants}>
            <TechLabel>MY CORE STACK</TechLabel>

            <TechList>
              {technologies.map(({ name, icon: Icon }) => (
                <TechItem key={name}>
                  <Icon size={16} />
                  <span>{name}</span>
                </TechItem>
              ))}
            </TechList>
          </TechArea>
        </HeroContent>

        <VisualWrapper
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <VisualGrid />

          <Orbit orbit="outer" />
          <Orbit orbit="inner" />

          <CodeCard
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <CodeHeader>
              <WindowDots>
                <span />
                <span />
                <span />
              </WindowDots>
              <CodeFilename>developer.js</CodeFilename>
              <FiCode size={15} />
            </CodeHeader>

            <CodeBody>
              <CodeLine>
                <LineNumber>01</LineNumber>
                <span>
                  <Purple>const</Purple> developer = {"{"}
                </span>
              </CodeLine>

              <CodeLine>
                <LineNumber>02</LineNumber>
                <span>
                  &nbsp;&nbsp;role: <Green>"Full Stack Developer"</Green>,
                </span>
              </CodeLine>

              <CodeLine>
                <LineNumber>03</LineNumber>
                <span>
                  &nbsp;&nbsp;stack: [<Green>"React"</Green>,{" "}
                  <Green>"Node.js"</Green>],
                </span>
              </CodeLine>

              <CodeLine>
                <LineNumber>04</LineNumber>
                <span>
                  &nbsp;&nbsp;focus: <Green>"Building products"</Green>,
                </span>
              </CodeLine>

              <CodeLine>
                <LineNumber>05</LineNumber>
                <span>
                  &nbsp;&nbsp;quality: <Green>"Clean code"</Green>,
                </span>
              </CodeLine>

              <CodeLine>
                <LineNumber>06</LineNumber>
                <span>{"};"}</span>
              </CodeLine>

              <CodeLine>
                <LineNumber>07</LineNumber>
                <span>
                  <Purple>export default</Purple> developer;
                </span>
              </CodeLine>
            </CodeBody>

            <CodeFooter>
              <span>
                <StatusDot />
                Available for opportunities
              </span>
              <span>JavaScript</span>
            </CodeFooter>
          </CodeCard>

          <FloatingBadge
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <BadgeIcon>
              <FiLayers size={19} />
            </BadgeIcon>
            <div>
              <BadgeTitle>Full Stack</BadgeTitle>
              <BadgeDescription>Frontend + Backend</BadgeDescription>
            </div>
          </FloatingBadge>

          <FloatingSymbol>&lt;/&gt;</FloatingSymbol>
        </VisualWrapper>

        <ScrollIndicator href="#projects">
          <FiArrowDown size={15} />
          <span>SCROLL TO EXPLORE</span>
        </ScrollIndicator>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100svh;
  overflow: hidden;
  padding: 140px 0 100px;
  background: var(--bg-primary);

  @media (max-width: 768px) {
    min-height: auto;
    padding: 125px 0 90px;
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 8%;
  right: -12%;
  width: 650px;
  height: 650px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(184, 149, 100, 0.09) 0%,
    rgba(184, 149, 100, 0.025) 42%,
    transparent 70%
  );
  pointer-events: none;
`;

const HeroContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 45px;
  width: min(1200px, calc(100% - 64px));
  margin: 0 auto;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 55px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    gap: 45px;
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
`;

const Availability = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  color: var(--accent);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.4px;

  .location {
    color: var(--text-secondary);
  }

  @media (max-width: 420px) {
    flex-wrap: wrap;
    font-size: 9px;
    gap: 8px;
    letter-spacing: 1px;
  }
`;

const StatusDot = styled.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #82c99a;
  box-shadow: 0 0 10px rgba(130, 201, 154, 0.45);
`;

const AvailabilityDivider = styled.span`
  width: 1px;
  height: 13px;
  background: var(--border-color);
`;

const Heading = styled(motion.h1)`
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(42px, 5.1vw, 70px);
  line-height: 1.12;
  font-weight: 600;
  letter-spacing: -3.4px;

  @media (max-width: 768px) {
    font-size: clamp(40px, 8vw, 60px);
    letter-spacing: -2px;
  }

  @media (max-width: 380px) {
    font-size: 37px;
  }
`;

const AccentText = styled.span`
  color: var(--accent);
`;

const Description = styled(motion.p)`
  max-width: 510px;
  margin-top: 25px;
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.9;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-top: 32px;
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 50px;
  padding: 0 22px;
  border: 1px solid var(--accent);
  border-radius: 6px;
  background: var(--accent);
  color: #111;
  font-size: 13px;
  font-weight: 700;
  transition: background 0.2s ease;

  &:hover {
    background: var(--accent-hover);
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 50px;
  padding: 0 22px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 600;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

const TechArea = styled(motion.div)`
  margin-top: 46px;
`;

const TechLabel = styled.p`
  margin-bottom: 15px;
  color: #71717a;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.02);
  color: #c4c4cc;
  font-size: 11px;

  svg {
    color: var(--accent);
  }
`;

const VisualWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 440px;

  @media (max-width: 960px) {
    min-height: 400px;
  }

  @media (max-width: 480px) {
    min-height: 320px;
  }
`;

const VisualGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(184, 149, 100, 0.055) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(184, 149, 100, 0.055) 1px, transparent 1px);
  background-size: 38px 38px;
  mask-image: radial-gradient(ellipse at center, black 10%, transparent 72%);
`;

const Orbit = styled.div`
  position: absolute;
  width: ${({ orbit }) => (orbit === "outer" ? "380px" : "290px")};
  height: ${({ orbit }) => (orbit === "outer" ? "380px" : "290px")};
  border: 1px solid rgba(184, 149, 100, 0.13);
  border-radius: 50%;

  @media (max-width: 480px) {
    width: ${({ orbit }) => (orbit === "outer" ? "290px" : "220px")};
    height: ${({ orbit }) => (orbit === "outer" ? "290px" : "220px")};
  }
`;

const CodeCard = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: min(100%, 440px);
  overflow: hidden;
  border: 1px solid rgba(184, 149, 100, 0.24);
  border-radius: 12px;
  background: rgba(20, 20, 20, 0.96);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.45);

  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

const CodeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 52px;
  padding: 0 18px;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);

  > svg {
    margin-left: auto;
    color: var(--accent);
  }
`;

const WindowDots = styled.div`
  display: flex;
  gap: 6px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4a4a4a;
  }

  span:first-child {
    background: #bd806f;
  }

  span:nth-child(2) {
    background: #c4a36a;
  }

  span:nth-child(3) {
    background: #79a68a;
  }
`;

const CodeFilename = styled.span`
  font-size: 11px;
`;

const CodeBody = styled.div`
  padding: 25px 12px;
  overflow-x: auto;
`;

const CodeLine = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  min-width: max-content;
  margin: 9px 0;
  color: #dedee4;
  font-family: "Space Grotesk", monospace;
  font-size: 11px;
  line-height: 1.8;

  @media (max-width: 480px) {
    font-size: 9px;
    gap: 10px;
  }
`;

const LineNumber = styled.span`
  width: 18px;
  flex-shrink: 0;
  color: #62626d;
  text-align: right;
  user-select: none;
`;

const Purple = styled.span`
  color: #c6a0f6;
`;

const Green = styled.span`
  color: #a5c99b;
`;

const CodeFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 14px 18px;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 10px;

  > span:first-child {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (max-width: 380px) {
    font-size: 9px;
    padding: 12px;
  }
`;

const FloatingBadge = styled(motion.div)`
  position: absolute;
  z-index: 3;
  right: -8px;
  bottom: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border: 1px solid var(--border-color);
  border-radius: 9px;
  background: #191919;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);

  @media (max-width: 480px) {
    right: -5px;
    bottom: 0;
    padding: 10px 12px;
  }
`;

const BadgeIcon = styled.div`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 7px;
  background: rgba(184, 149, 100, 0.12);
  color: var(--accent);
`;

const BadgeTitle = styled.p`
  color: var(--text-primary);
  font-size: 12px;
  font-weight: 700;
`;

const BadgeDescription = styled.p`
  margin-top: 2px;
  color: var(--text-secondary);
  font-size: 10px;
`;

const FloatingSymbol = styled.div`
  position: absolute;
  top: 12px;
  right: 14px;
  color: rgba(184, 149, 100, 0.35);
  font-family: "Space Grotesk", sans-serif;
  font-size: 29px;
  font-weight: 700;
`;

const ScrollIndicator = styled.a`
  position: absolute;
  bottom: -55px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #777780;
  font-size: 9px;
  letter-spacing: 1.8px;

  svg {
    color: var(--accent);
  }

  &:hover {
    color: var(--text-primary);
  }

  @media (max-width: 960px) {
    bottom: -45px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
