import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const ResumeFr: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "ResumeFr") {
    const cvLink = "https://drive.google.com/file/d/1Qg6pP10JaY3DQM6Gg-jDOkA4H41Fhu2n/view?usp=drive_link";
    window.open(cvLink, "_blank");
  }

  return <span></span>;
};

export default ResumeFr;