import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiDatabase,
  FiTrendingUp,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";

const principles = [
  {
    icon: FiCode,
    title: "Clean, Maintainable Code",
    description:
      "Building reusable components and structured codebases that are easier to understand, test, and extend.",
  },
  {
    icon: FiLayers,
    title: "End-to-End Development",
    description:
      "Connecting responsive React interfaces with backend services, REST APIs, and database operations.",
  },
  {
    icon: FiDatabase,
    title: "Practical Problem Solving",
    description:
      "Designing data flows and application logic around real requirements rather than adding complexity without purpose.",
  },
  {
    icon: FiTrendingUp,
    title: "Continuous Improvement",
    description:
      "Refining usability, performance, maintainability, and the overall quality of each project.",
  },
];

const focusAreas = [
  "Frontend Development",
  "Backend Development",
  "Database Design",
  "API Integration",
];

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionHeading>
          <Eyebrow>02 / ABOUT ME</Eyebrow>

          <Heading>
            More than code.
            <br />
            <AccentText>A focus on solutions.</AccentText>
          </Heading>
        </SectionHeading>

        <MainGrid>
          <AboutContent>
            <Intro>
              I'm a Full Stack Developer focused on building modern web
              applications with the MERN stack. I enjoy turning ideas and
              requirements into practical, reliable, and user-friendly products.
            </Intro>

            <BodyText>
              My work spans frontend development, backend APIs, database
              integration, and application workflows. I approach projects with
              an emphasis on clear architecture, reusable components, and a
              consistent user experience.
            </BodyText>

            <BodyText>
              Through projects such as e-commerce platforms, movie discovery
              applications, and a real estate portal, I continue to develop my
              ability to build and connect complete web applications.
            </BodyText>

            <FocusList>
              {focusAreas.map((area) => (
                <FocusItem key={area}>
                  <FiCheck size={16} />
                  {area}
                </FocusItem>
              ))}
            </FocusList>

            <AboutLink href="#projects">
              Explore my projects
              <FiArrowUpRight size={17} />
            </AboutLink>
          </AboutContent>

          <PrinciplesList>
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <PrincipleCard
                  key={principle.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                >
                  <PrincipleIcon>
                    <Icon size={21} />
                  </PrincipleIcon>

                  <PrincipleText>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </PrincipleText>
                </PrincipleCard>
              );
            })}
          </PrinciplesList>
        </MainGrid>
      </Container>
    </Section>
  );
};

export default About;

const Section = styled.section`
  padding: 115px 0 125px;
  border-top: 1px solid var(--border-color);
  background: var(--bg-primary);

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  width: min(1200px, calc(100% - 64px));
  margin: 0 auto;

  @media (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;

const SectionHeading = styled.div`
  margin-bottom: 55px;

  @media (max-width: 768px) {
    margin-bottom: 35px;
  }
`;

const Eyebrow = styled.p`
  margin-bottom: 20px;
  color: var(--accent);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Heading = styled.h2`
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(36px, 4.5vw, 57px);
  line-height: 1.16;
  font-weight: 600;
  letter-spacing: -2px;

  @media (max-width: 480px) {
    font-size: 35px;
    letter-spacing: -1.3px;
  }
`;

const AccentText = styled.span`
  color: var(--accent);
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: start;
  gap: 75px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 45px;
  }
`;

const AboutContent = styled.div`
  padding-top: 5px;
`;

const Intro = styled.p`
  color: var(--text-primary);
  font-size: 18px;
  line-height: 1.9;
  font-weight: 500;
`;

const BodyText = styled.p`
  margin-top: 20px;
  color: var(--text-secondary);
  font-size: 13px;
  line-height: 2;
`;

const FocusList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px 12px;
  margin-top: 28px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const FocusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  color: #d4d4d8;
  font-size: 12px;

  svg {
    flex-shrink: 0;
    color: var(--accent);
  }
`;

const AboutLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 32px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 600;

  &:hover {
    color: var(--accent-hover);
  }
`;

const PrinciplesList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border-color);
`;

const PrincipleCard = styled(motion.article)`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 480px) {
    gap: 14px;
    padding: 20px 0;
  }
`;

const PrincipleIcon = styled.div`
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border: 1px solid rgba(184, 149, 100, 0.22);
  border-radius: 8px;
  background: rgba(184, 149, 100, 0.07);
  color: var(--accent);
`;

const PrincipleText = styled.div`
  flex: 1;

  h3 {
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
  }

  p {
    margin-top: 7px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.9;
  }
`;
