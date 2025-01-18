import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "DevOps Project",
    desc: "Designed and implemented a comprehensive CI/CD pipeline for a Spring-Boot/Angular application.",
    // url: "https://satnaing.dev/blog/",
  },
  {
    id: 2,
    title: "MediMind: ESPRIT Cloud Integrated Project",
    desc: "Developed and deployed a healthcare web application that uses AI and advanced algorithms to improve patients experience by providing them professional medical assistance.",
    url: "https://haru-fashion.vercel.app/",
  },
  {
    id: 3,
    title: "Cross-Platform E-Delivery Application- Wakalni",
    desc: "Developed a cross-platform e-delivery website (Desktop, Web, Mobile) using JavaFX, Symfony and Codename One.",
    // url: "https://satnaing.github.io/haru-api/",
  }
];

export default Projects;
