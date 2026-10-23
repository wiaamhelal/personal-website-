import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiTool,
  FiCode,
  FiLayers,
} from "react-icons/fi";

const skillGroups = [
  {
    title: "Frontend Development",
    subtitle: "Interfaces & user experience",
    icon: FiMonitor,
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Styled Components",
      "React Router",
      "Redux Toolkit",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Server logic & APIs",
    icon: FiServer,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Authorization",
      "Middleware",
    ],
  },
  {
    title: "Database & Data",
    subtitle: "Data modeling & integration",
    icon: FiDatabase,
    skills: [
      "MongoDB",
      "Mongoose",
      "CRUD Operations",
      "Data Modeling",
      "API Integration",
    ],
  },
  {
    title: "Tools & Services",
    subtitle: "Development & deployment",
    icon: FiTool,
    skills: ["Git", "GitHub", "Postman", "Firebase", "Render", "Cloudinary"],
  },
];

const additionalSkills = [
  {
    icon: FiCode,
    title: "Application Development",
    text: "Reusable components, routing, state management, and form handling.",
  },
  {
    icon: FiLayers,
    title: "Full Stack Integration",
    text: "Connecting frontend applications with backend endpoints and persistent data.",
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <Header>
          <div>
            <Eyebrow>03 / TECHNICAL EXPERTISE</Eyebrow>
            <Heading>
              Tools I use to
              <br />
              <AccentText>build and deliver.</AccentText>
            </Heading>
          </div>

          <Intro>
            A practical overview of the technologies and development concepts I
            use across full-stack web applications.
          </Intro>
        </Header>

        <SkillGrid>
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <SkillCard
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
              >
                <CardHeader>
                  <IconWrapper>
                    <Icon size={21} />
                  </IconWrapper>

                  <CardIndex>{String(index + 1).padStart(2, "0")}</CardIndex>
                </CardHeader>

                <CardTitle>{group.title}</CardTitle>
                <CardSubtitle>{group.subtitle}</CardSubtitle>

                <SkillList>
                  {group.skills.map((skill) => (
                    <SkillTag key={skill}>{skill}</SkillTag>
                  ))}
                </SkillList>
              </SkillCard>
            );
          })}
        </SkillGrid>

        <AdditionalGrid>
          {additionalSkills.map((item) => {
            const Icon = item.icon;

            return (
              <AdditionalCard key={item.title}>
                <Icon size={20} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </AdditionalCard>
            );
          })}
        </AdditionalGrid>

        <Note>
          Technical skills reflect the technologies used in my projects.
          Specific tools and experience can be discussed in more detail during
          an interview.
        </Note>
      </Container>
    </Section>
  );
};

export default Skills;

const Section = styled.section`
  padding: 115px 0 120px;
  border-top: 1px solid var(--border-color);
  background: #101010;

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

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 35px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    margin-bottom: 32px;
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
  line-height: 1.15;
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

const Intro = styled.p`
  max-width: 350px;
  color: var(--text-secondary);
  font-size: 13px;
  line-height: 1.9;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.article)`
  min-width: 0;
  padding: 28px;
  border: 1px solid var(--border-color);
  border-radius: 9px;
  background: var(--bg-secondary);
  transition: border-color 0.25s ease;

  &:hover {
    border-color: rgba(184, 149, 100, 0.4);
  }

  @media (max-width: 480px) {
    padding: 22px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const IconWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border: 1px solid rgba(184, 149, 100, 0.22);
  border-radius: 8px;
  background: rgba(184, 149, 100, 0.07);
  color: var(--accent);
`;

const CardIndex = styled.span`
  color: #55555e;
  font-family: "Space Grotesk", sans-serif;
  font-size: 24px;
  font-weight: 600;
`;

const CardTitle = styled.h3`
  color: var(--text-primary);
  font-size: 18px;
  font-weight: 600;
`;

const CardSubtitle = styled.p`
  margin-top: 5px;
  color: var(--text-secondary);
  font-size: 12px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 24px;
`;

const SkillTag = styled.span`
  padding: 8px 11px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.02);
  color: #d4d4d8;
  font-size: 11px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: rgba(184, 149, 100, 0.45);
    color: var(--accent);
  }
`;

const AdditionalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const AdditionalCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 22px;
  border: 1px solid var(--border-color);
  border-radius: 8px;

  > svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: var(--accent);
  }

  h3 {
    font-size: 13px;
    font-weight: 600;
  }

  p {
    margin-top: 7px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.8;
  }
`;

const Note = styled.p`
  margin-top: 28px;
  color: #777780;
  font-size: 11px;
  line-height: 1.8;
`;
