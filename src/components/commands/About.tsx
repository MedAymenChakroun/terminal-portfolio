import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Med Aymen Chakroun</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a DevOps & Cloud Engineer</HighlightAlt> based in Tunisia.
      </p>
      <p>
      Skilled IT Infrastructure & Cloud Computing engineer with <HighlightAlt>1+ years of experience</HighlightAlt><br />
      delivering secure and scalable deployment workflows. Experienced in designing and <br />
      automating <HighlightAlt>CI/CD pipelines</HighlightAlt>, managing <HighlightAlt>containerized applications</HighlightAlt> with <HighlightAlt>Kubernetes</HighlightAlt>, <br />
      and optimizing <HighlightAlt>multi-environment deployments</HighlightAlt>. <br /> <br />

      I have a strong background in cloud platform management <HighlightAlt> (AWS, Azure) </HighlightAlt>and am adept <br />
      at integrating security best practices into <HighlightAlt>DevSecOps</HighlightAlt>. Additionally, <br />
      I specialize in implementing <HighlightAlt>GitOps principles</HighlightAlt> to streamline deployment management, <br />
      ensuring consistency and efficiency across development cycles.
      </p>
    </AboutWrapper>
  );
};

export default About;
