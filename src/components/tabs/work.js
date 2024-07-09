// ./components/tabs/work.js
import React, { useState } from 'react';

const Work = () => {
  const [isSoftware_FX_Open, setSoftware_FX_Open] = useState(false);
  const [isSoftware_BO_Open, setSoftware_BO_Open] = useState(false);
  const [isSystem_MFEC_Open, setSystem_MFEC_Open] = useState(false);
  const [isResearch_KU_Open, setResearch_KU_Open] = useState(false);
  const [isResearch_BO_Open, setResearch_BO_Open] = useState(false);
  const [isResearch_PEN_Open, setResearch_PEN_Open] = useState(false);
  const [isResearch_NARA_Open, setResearch_NARA_Open] = useState(false);

  const toggleSoftware_FX = () => setSoftware_FX_Open(!isSoftware_FX_Open);
  const toggleSoftware_BO = () => setSoftware_BO_Open(!isSoftware_BO_Open);
  const toggleSystem_MFEC = () => setSystem_MFEC_Open(!isSystem_MFEC_Open);
  const toggleResearch_KU = () => setResearch_KU_Open(!isResearch_KU_Open);
  const toggleResearch_BO = () => setResearch_BO_Open(!isResearch_BO_Open);
  const toggleResearch_PEN = () => setResearch_PEN_Open(!isResearch_PEN_Open);
  const toggleResearch_NARA = () => setResearch_NARA_Open(!isResearch_NARA_Open);

  const getToggleButtonLabel = (isOpen) => isOpen ? "▲" : "▼";

  return (
    <div className="work-container">
      <h2>Work Experience</h2>

      <div className="dropdown">
        <button onClick={toggleSoftware_FX}>
          <span className="button-content">
            <span className="toggle-icon">{getToggleButtonLabel(isSoftware_FX_Open)}</span>
            <span className="position">Software Engineer</span>
            <span className="company">Fluxus</span>
            <span className="date">07/2023 – Current</span>
          </span>
        </button>
        {isSoftware_FX_Open && (
          <ul>
            <li>Placeholder a</li>
          </ul>
        )}
      </div>


      <div className="dropdown">
        <button onClick={toggleSoftware_BO}>
          <span className="button-content">
            <span className="toggle-icon">{getToggleButtonLabel(isSoftware_BO_Open)}</span>
            <span className="position">Software Engineer</span>
            <span className="company">BLUE OAK CO., LTD.</span>
            <span className="date">05/2022 – 07/2023</span>
          </span>
        </button>
        {isSoftware_BO_Open && (
          <ul>
            <li><span className="accomplishment">Developed an AI-based footstep analysis system </span><span className="method">through processing data from vibration sensors </span><span className="tool">using Python and Raspberry Pi</span>.</li>
            <li><span className="accomplishment">Created an advanced fall detection algorithm </span><span className="method">through analysis of vibration sensor data </span><span className="tool">using C++ on ESP32 hardware</span>.</li>
            <li><span className="accomplishment">Enhanced IoT device monitoring and data management </span><span className="method">through enabling real-time device state tracking, log storage, data streaming, and third-party service integration </span><span className="tool">using AWS IoT Core and Thingsboard</span></li>
        </ul>
        )}
      </div>

      <div className="dropdown">
        <button onClick={toggleSystem_MFEC}>
          <span className="button-content">
            <span className="toggle-icon">{getToggleButtonLabel(isSystem_MFEC_Open)}</span>
            <span className="position">System Engineer</span>
            <span className="company">MFEC Public Company Limited</span>
            <span className="date">12/2020 – 05/2022</span>
          </span>
        </button>
        {isSystem_MFEC_Open && (
          <ul>
            <li>Placeholder a</li>
          </ul>
        )}
      </div>

      <div className="dropdown">
        <button onClick={toggleResearch_KU}>
          <span className="button-content">
            <span className="toggle-icon">{getToggleButtonLabel(isResearch_KU_Open)}</span>
            <span className="position">Researcher (Contract)</span>
            <span className="company">Kasetsart University</span>
            <span className="date">06/2018 – 12/2020</span>
          </span>
        </button>
        {isResearch_KU_Open && (
          <ul>
            <li>Placeholder a</li>
          </ul>
        )}
      </div>

      <div className="dropdown">
        <button onClick={toggleResearch_BO}>
          <span className="button-content">
            <span className="toggle-icon">{getToggleButtonLabel(isResearch_BO_Open)}</span>
            <span className="position">Researcher (Contract)</span>
            <span className="company">BLUE OAK CO., LTD.</span>
            <span className="date">08/2020 – 12/2020</span>
          </span>
        </button>
        {isResearch_BO_Open && (
          <ul>
            <li>Placeholder a</li>
          </ul>
        )}
      </div>

      <div className="dropdown">
        <button onClick={toggleResearch_PEN}>
          <span className="button-content">
            <span className="toggle-icon">{getToggleButtonLabel(isResearch_PEN_Open)}</span>
            <span className="position">Researcher (Contract)</span>
            <span className="company">Panorama Co., LTD.</span>
            <span className="date">11/2018 - 02/2019</span>
          </span>
        </button>
        {isResearch_PEN_Open && (
          <ul>
            <li>Placeholder a</li>
          </ul>
        )}
      </div>

      <div className="dropdown">
        <button onClick={toggleResearch_NARA}>
          <span className="button-content">
            <span className="toggle-icon">{getToggleButtonLabel(isResearch_NARA_Open)}</span>
            <span className="position">Researcher (Internship)</span>
            <span className="company">NAIST</span>
            <span className="date">06/2017 - 08/2017</span>
          </span>
        </button>
        {isResearch_NARA_Open && (
          <ul>
            <li>Placeholder a</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Work;
