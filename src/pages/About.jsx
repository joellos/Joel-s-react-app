import React from "react";

function About() {
    return (
      <section id="about">
        
        <h1  onClick={(e) => document.body.style.backgroundColor = "red"}>About</h1>
        <div className="about-container">
          <div className="about-card">
            <span>
              <h2>Hi, I'm a web developer</h2>
              <p>
                Hello! My name is Joel Lövkvist and I have a strong foundation in both frontend and backend technologies.
                I have skills in C#, JavaScript, HTML, CSS, and SQL with tools like SSMS. My focus is on creating efficient and user-friendly web applications.
                I have experience with agile work methods, version control with Git, and developing innovative solutions.
                In addition to my technical skills, I am physically active and train at the gym. This has helped me develop a strong work ethic and discipline.
                My ambition is to grow as a developer and create technical solutions that make a difference.
              </p>
            </span>
          </div>
  
          {/* Skills Section */}
          <div className="skill-container">
            <SkillBar title="HTML" className="html" />
            <SkillBar title="CSS" className="css" />
            <SkillBar title="JavaScript" className="javascript" />
            <SkillBar title="SQL" className="sql" />
            <SkillBar title="C#" className="c" />
            <SkillBar title="React" className="react" />
          </div>
        </div>
      </section>
    );
}
      
      // En separat komponent för att minska kodupprepning
      const SkillBar = ({ title, className }) => {
        return (
          <div className="skill-box">
            <span className="title">{title}</span>
            <div className="skill-bar">
              <span className={`skill-per ${className}`}></span>
            </div>
          </div>
        );
      };
      
      export default About;