import "./overview2.css";
import iconList from "./iconList";

const Overview = () => {
  const languages = iconList.languages;
  const tools = iconList.tools;
  return (
    <div className="overview">
      <div className="summary">
        <div className="title">
          <h2>About me</h2>
        </div>
        <p>
          My name is Husain Rangwala, a full-stack developer with a strong focus
          on backend development. I have extensive experience with AWS services
          and primarily code in Node.js and TypeScript. I also work with
          frontend technologies like React.js and Angular, as well as backend
          frameworks like Express.js, bringing a comprehensive approach to
          building robust applications.
        </p>
      </div>
      <div className="technologies">
        <div className="title">
          <h2>Technologies</h2>
        </div>
        <h3>Languages and Libraries</h3>
        <div className="icon-grid">
          {Object.keys(languages).map((language) => (
            <div key={language} className="iconcontainer">
              {languages[language]}
              <p>{language}</p>
            </div>
          ))}
        </div>
        <h3>Applications</h3>
        <div className="icon-grid">
          {Object.keys(tools).map((tool) => (
            <div key={tool} className="iconcontainer">
              {tools[tool]}
              <p>{tool}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="education">
        <div className="title">
          <h2>Education</h2>
        </div>
        <div className="bachelors">
          <h3>Bachelor of Technology in Computer Science </h3>
          <h4>Acropolis Institute of Technology and Research</h4>
          <h4>(2019 - 2023)</h4>
        </div>
        <div className="high-school">
          <h3>High School (Class 12th)</h3>
          <h4>SICA Senior Secondary School</h4>
          <h4>2019</h4>
        </div>
      </div>
    </div>
  );
};

export default Overview;