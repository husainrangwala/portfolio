import "./experience.css";
import experienceList from "./experienceList";

const Experience = () => {
  return (
    <div className="experience">
      {experienceList.map((experience, index) => (
        <div className="experience-details" key={index}>
          <h1>{experience.title}</h1>
          <h2>{experience.company}</h2>
          <h4>{experience.duration}</h4>
          <ul>
            {experience.description.map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
