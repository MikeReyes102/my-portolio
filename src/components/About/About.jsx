import "./About.css";

function About() {
  return (
    <div>
      <div className="about">
        <h1>About Me</h1>
        <p>
          As a web developer, I’m passionate about creating dynamic,
          user-friendly web applications. With a solid foundation in HTML, CSS,
          and JavaScript, I enjoy tackling challenges and constantly evolving by
          learning new technologies. I thrive in collaborative team settings
          where solving problems is both rewarding and fun.
        </p>
      </div>
      <div className="skills">
        <h1>My Skills</h1>
        <div className="container">
          <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML5" />
          <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" />
          <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" />
          <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" />
          <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" />
          <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" />
          <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git" />
          <img src="https://img.icons8.com/color/48/000000/python.png" alt="python" />
          <img src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" alt="C#" />
          <img src="https://img.icons8.com/color/48/000000/sql.png" alt="SQL" />
        </div>
      </div>
      <div className="tools">
        <h1>My Tools</h1>
        <div className="container">
          <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" alt="VS Code" />
          <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="GitHub" />
          <img src="https://img.icons8.com/color/48/000000/heroku.png" alt="Heroku" />
          <img src="https://img.icons8.com/color/48/000000/npm.png" alt="npm" />
          <img src="src\assets\postman-icon.png" alt="Postman" />
          <img src="https://img.icons8.com/color/48/000000/slack.png" alt="Slack" />
          <img src="https://img.icons8.com/color/48/000000/linux.png" alt="Linux" />
        </div>
      </div>
    </div>
  );
}

export default About;
