import styled from "styled-components";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/projects/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* <main>
        <Hero />

        <Projects />

        <PlaceholderSection id="about">
          <SectionLabel>02 / ABOUT ME</SectionLabel>
          <h2>Developer. Problem solver. Builder.</h2>
          <p>A closer look at my background and technical approach.</p>
        </PlaceholderSection>

        <PlaceholderSection id="contact">
          <SectionLabel>03 / GET IN TOUCH</SectionLabel>
          <h2>Let's build something meaningful.</h2>
          <p>Contact information will be added here.</p>
        </PlaceholderSection>
      </main> */}
      {/* <main>
        <Hero />
        <Projects />
        <About />
        <Skills />

        <PlaceholderSection id="contact">
          <SectionLabel>04 / GET IN TOUCH</SectionLabel>
          <h2>Let's build something meaningful.</h2>
          <p>Contact information will be added here.</p>
        </PlaceholderSection>
      </main> */}
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;

const PlaceholderSection = styled.section`
  min-height: 300px;
  padding: 100px max(32px, calc((100% - 1200px) / 2));
  border-top: 1px solid var(--border-color);

  h2 {
    margin-top: 18px;
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(28px, 4vw, 42px);
    letter-spacing: -1.5px;
  }

  p {
    margin-top: 12px;
    color: var(--text-secondary);
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 75px 20px;
  }
`;

const SectionLabel = styled.p`
  color: var(--accent) !important;
  font-size: 10px !important;
  font-weight: 700;
  letter-spacing: 2px;
`;
