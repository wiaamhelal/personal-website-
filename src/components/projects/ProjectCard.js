import styled from "styled-components";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, index = 0 }) => {
  const {
    number,
    title,
    category,
    description,
    technologies,
    image,
    imageAlt,
    demoUrl,
    githubUrl,
    status,
  } = project;

  return (
    <Card
      as={motion.article}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
    >
      <ImageWrapper>
        <ProjectImage
          src={image}
          alt={imageAlt}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <ImageOverlay />

        <ProjectNumber>{number} / 03</ProjectNumber>

        <StatusBadge>{status}</StatusBadge>

        <ImageActions>
          {demoUrl && (
            <IconLink
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
            >
              <FiExternalLink size={19} />
            </IconLink>
          )}

          {githubUrl && (
            <IconLink
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code on GitHub`}
            >
              <FiGithub size={19} />
            </IconLink>
          )}
        </ImageActions>
      </ImageWrapper>

      <CardContent>
        <Category>{category}</Category>

        <TitleRow>
          <ProjectTitle>{title}</ProjectTitle>
          <TitleIcon>
            <FiArrowUpRight size={22} />
          </TitleIcon>
        </TitleRow>

        <Description>{description}</Description>

        <TechList>
          {technologies.map((technology) => (
            <TechTag key={technology}>{technology}</TechTag>
          ))}
        </TechList>

        {(demoUrl || githubUrl) && <CardDivider />}

        {(demoUrl || githubUrl) && (
          <CardLinks>
            {demoUrl && (
              <TextLink
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <FiArrowUpRight size={15} />
              </TextLink>
            )}

            {githubUrl && (
              <TextLink
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code <FiGithub size={15} />
              </TextLink>
            )}
          </CardLinks>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

const Card = styled(motion.article)`
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  background: var(--bg-secondary);
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: rgba(184, 149, 100, 0.45);
  }

  &:hover img {
    transform: scale(1.045);
  }

  &:hover h3 {
    color: var(--accent);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 235px;
  overflow: hidden;
  background: radial-gradient(
      circle at 80% 15%,
      rgba(184, 149, 100, 0.18),
      transparent 45%
    ),
    linear-gradient(135deg, #24211d, #101010 75%);

  @media (max-width: 480px) {
    height: 205px;
  }
`;

const ProjectImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.6s ease;
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45),
    transparent 35%,
    transparent 60%,
    rgba(0, 0, 0, 0.18)
  );
`;

const ProjectNumber = styled.span`
  position: absolute;
  top: 17px;
  left: 18px;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
`;

const StatusBadge = styled.span`
  position: absolute;
  bottom: 16px;
  left: 17px;
  padding: 6px 10px;
  border: 1px solid rgba(255, 255, 255, 0.17);
  border-radius: 4px;
  background: rgba(13, 13, 13, 0.8);
  color: #f2f2f2;
  font-size: 10px;
  backdrop-filter: blur(8px);
`;

const ImageActions = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  gap: 8px;
`;

const IconLink = styled.a`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(13, 13, 13, 0.8);
  color: white;
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;

  &:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: #111;
  }
`;

const CardContent = styled.div`
  padding: 25px 23px 23px;

  @media (max-width: 480px) {
    padding: 21px 18px;
  }
`;

const Category = styled.p`
  color: var(--accent);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.8px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 9px;
`;

const ProjectTitle = styled.h3`
  font-family: "Space Grotesk", sans-serif;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: -0.8px;
  transition: color 0.2s ease;
`;

const TitleIcon = styled.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  color: var(--accent);
`;

const Description = styled.p`
  min-height: 78px;
  margin-top: 13px;
  color: var(--text-secondary);
  font-size: 12px;
  line-height: 1.9;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 20px;
`;

const TechTag = styled.span`
  padding: 6px 9px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: #c4c4cc;
  font-size: 10px;
`;

const CardDivider = styled.div`
  height: 1px;
  margin-top: 21px;
  background: var(--border-color);
`;

const CardLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 16px;
`;

const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--text-primary);
  font-size: 11px;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent);
  }
`;
