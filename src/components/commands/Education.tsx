import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "National Diploma in Computer Science, specializing in Cloud Computing",
    desc: "Private Higher School of Engineering and Technology (ESPRIT) | 2021 - 2024",
  },
  {
    title: "Applied Bachelor’s Degree in Electrical Engineering, specializing in Security Systems",
    desc: "Higher Institute of Technological Studies of Rades | 2019 - 2021",
  },
];

export default Education;
