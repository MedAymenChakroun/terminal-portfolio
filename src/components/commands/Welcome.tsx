import {
  Cmd,
  HeroContainer,
  PreImg,
  PreName,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
        {`        
    ___
   /   | __  ______ ___  ___  ____
  / /| |/ / / / __  __ \\/ _ \\/ __ \\
 / ___ / /_/ / / / / / /  __/ / / /
/_/  |_\\__, /_/ /_/ /_/\\___/_/ /_/
      /____/                       
          `}
        </PreName>
        <div>Welcome to my terminal portfolio.</div>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        <br />
        <p>Top commands used  <b>about, socials, ResumeFr, ResumeEn </b></p>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"DEVOPS   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
