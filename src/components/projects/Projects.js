import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <SectionHeader>
          <div>
            <Eyebrow>01 / SELECTED WORK</Eyebrow>

            <Heading>
              Projects that
              <br />
              <AccentText>make a difference.</AccentText>
            </Heading>
          </div>

          <Intro>
            A selection of applications I've built, combining thoughtful
            interfaces with practical engineering and full-stack functionality.
          </Intro>
        </SectionHeader>

        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </ProjectGrid>

        <BottomNote>
          <span>More projects and technical case studies coming soon.</span>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore GitHub <FiArrowUpRight size={17} />
          </a>
        </BottomNote>
      </Container>
    </Section>
  );
};

export default Projects;

const Section = styled.section`
  position: relative;
  padding: 115px 0 125px;
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

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
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
  max-width: 365px;
  padding-bottom: 5px;
  color: var(--text-secondary);
  font-size: 13px;
  line-height: 1.9;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 22px;
  }
`;

const BottomNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 36px;
  padding-top: 25px;
  border-top: 1px solid var(--border-color);

  span {
    color: var(--text-secondary);
    font-size: 12px;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--accent);
    font-size: 12px;
    font-weight: 600;
  }

  a:hover {
    color: var(--accent-hover);
  }
`;
