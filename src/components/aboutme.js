import React, { useState } from 'react';

const AboutMe = () => {
  const [isProgrammingOpen, setProgrammingOpen] = useState(false);
  const [isSkillsOpen, setSkillsOpen] = useState(false);
  const [isLanguagesOpen, setLanguagesOpen] = useState(false);

  const toggleProgramming = () => setProgrammingOpen(!isProgrammingOpen);
  const toggleSkills = () => setSkillsOpen(!isSkillsOpen);
  const toggleLanguages = () => setLanguagesOpen(!isLanguagesOpen);

  const renderExperienceBar = (years) => (
    <div className="experience-bar">
      <div className="experience-bar-fill" style={{ width: `${years * 10}%` }}></div>
    </div>
  );

  const getToggleButtonLabel = (isOpen) => isOpen ? "▲" : "▼";

  return (
    <div className="aboutme-container">
      <h2>About Me</h2>
      
      <div className="dropdown">
        <button onClick={toggleProgramming}>{getToggleButtonLabel(isProgrammingOpen)} Programming</button>
        {isProgrammingOpen && (
          <ul>
            <li><span className="topic">Python</span><span className="years">5 year(s)</span>{renderExperienceBar(5)}</li>
            <li><span className="topic">C++</span><span className="years">3 year(s)</span>{renderExperienceBar(3)}</li>
            <li><span className="topic">Javascript</span><span className="years">1 year(s)</span>{renderExperienceBar(1)}</li>
            <li><span className="topic">C#</span><span className="years">1 year(s)</span>{renderExperienceBar(1)}</li>
            <li><span className="topic">Query</span><span className="years">2 year(s)</span>{renderExperienceBar(2)}</li>
            <li><span className="topic">Matlab</span><span className="years">2 year(s)</span>{renderExperienceBar(2)}</li>
          </ul>
        )}
      </div>

      <div className="dropdown">
        <button onClick={toggleSkills}>{getToggleButtonLabel(isSkillsOpen)} Skills</button>
        {isSkillsOpen && (
          <ul>
            <li><span className="topic">IoT</span><span className="years">3 year(s)</span>{renderExperienceBar(3)}</li>
            <li><span className="topic">Coding</span><span className="years">8 year(s)</span>{renderExperienceBar(8)}</li>
            <li><span className="topic">AI/ML</span><span className="years">4 year(s)</span>{renderExperienceBar(4)}</li>
            <li><span className="topic">CICD</span><span className="years">2 year(s)</span>{renderExperienceBar(2)}</li>
            <li><span className="topic">Cloud Service</span><span className="years">4 year(s)</span>{renderExperienceBar(4)}</li>
          </ul>
        )}
      </div>

      <div className="dropdown">
        <button onClick={toggleLanguages}>{getToggleButtonLabel(isLanguagesOpen)} Languages</button>
        {isLanguagesOpen && (
          <ul>
            <li><span className="topic">Thai</span><span className="years">28 year(s)</span>{renderExperienceBar(28)}</li>
            <li><span className="topic">English</span><span className="years">27 year(s)</span>{renderExperienceBar(27)}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
