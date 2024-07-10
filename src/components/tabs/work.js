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
            <li>
              <span className="accomplishment">Led in-house product development </span>
              <span className="method">by architecting and implementing AI/ML applications, utilizing AWS serverless technologies </span>
              <span className="tool">including API Gateway, Lambda, S3, DynamoDB, Bedrock, Stepfunction, SNS, Amplify</span>
            </li>
            <li>
              <span className="accomplishment">Streamlined development processes enhancing team efficiency and product reliability </span>
              <span className="method">through implementation of CI/CD pipelines </span>
              <span className="tool">using AWS codecatalyst workflow, AWS Clouformation, and shell script</span>
            </li>
            <li>
              <span className="accomplishment">Improved business decision-making </span>
              <span className="method">by developing business intelligence solutions and real-time operational metrics dashboards</span>
              <span className="tool">using AWS Cloudwatch dashboard and Query Cloudwatch log insight</span>
            </li>
            <li>
              <span className="accomplishment">Create AI-Log-Generator, a service that generate realistic server logs for load testing, </span>
              <span className="tool">using OpenAI's API</span>
            </li>
            <li>
              <span className="accomplishment">
                Create <a href="https://www.panya.fyi/" className="marutech-link">panya.fyi</a>, an advanced business intelligence tool that automates company research and reporting through web scraping and AI analysis, 
              </span>
              <span className="tool">using AWS Bedrock</span>
            </li>
            <li>
              <span className="accomplishment">
                Create <a href="https://preview.intev.io/" className="marutech-link">intev.io</a>, an AI-driven HR tool that generates tailored interview questions and rejection letters based on job descriptions and candidate CVs, 
              </span>
              <span className="tool">using AWS Bedrock</span>
            </li>
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
            <li>
              <span className="accomplishment">Developed an AI-based footstep analysis system </span>
              <span className="method">through processing time and frequency data from vibration sensors with custom detection, denoising, and classification algorithm </span>
              <span className="tool">using Python and geophone connected to Raspberry Pi</span>
            </li>
            <li>
              <span className="accomplishment">Developed an automated footstep event anotation tools from video </span>
              <span className="method">by placing markers and capturing walking motion </span>
              <span className="tool">using OpenCV, Python, geophone connected to Raspberry Pi, Streaming camera with RTSP protocal</span>
            </li>
            <li>
              <span className="accomplishment">Created an advanced fall detection and alarming system which collect telemtry data and notify when fall event detected </span>
              <span className="method">through processing time and frequency data from vibration sensors with custom detection, denoising, and classification algorithm </span>
              <span className="tool">using C++ on geophone connected to ESP32 hardware and ThingsBoard/AWS IoT Core to devices </span>
            </li>
            <li>
              <span className="accomplishment">Enhanced IoT device monitoring and data management </span>
              <span className="method">through enabling real-time device state tracking, log storage, data streaming, and third-party service integration </span>
              <span className="tool">using AWS IoT Core and Thingsboard</span>
            </li>
            <li>
              <span className="accomplishment">Facilitated the distribution of a Kinect-based gait analysis system </span>
              <span className="method">by assisting with device and software setup, and providing technical expertise at promotional events to explain the system's capability to measure gait and assess fall risk based on gait anomalies</span>
            </li>
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
            <li>
              <span className="accomplishment">Facilitated customer migration from on-premises to cloud-based directory services </span>
              <span className="method">by implementing a hybrid identity model and deployment stratigies suitable for each identity group </span>
              <span className="tool">using Azure AD Connect and staged rollout strategy</span>
            </li>
            <li>
              <span className="accomplishment">Enhanced customer endpoint device security for BYOD PC, Corporate PC, and mobile devices</span>
              <span className="method">by configuring and deploying comprehensive device management and threat protection solutions </span>
              <span className="tool">utilizing Microsoft Intune and Microsoft Defender for Endpoint</span>
            </li>
            <li>
              <span className="accomplishment">Strengthened organizational password security </span>
              <span className="method">by implementing self-service password reset capabilities and custom password blocklists, </span>
              <span className="accomplishment">while enforcing advanced authentication policies and risk-based conditional access </span>
              <span className="tool">using Azure AD Premium P2 features including Azure AD Password Protection and Identity Protection</span>
            </li>
            <li>
              <span className="accomplishment">Improved threat detection and response capabilities </span>
              <span className="method">by centralizing log collection and implementing automated security orchestration </span>
              <span className="tool">through the setup and configuration of Azure Sentinel</span>
            </li>
            <li>
              <span className="accomplishment">Strengthened multi-cloud security compliance </span>
              <span className="method">by developing custom posture rules aligned with CIS benchmarks and conducting environment-wide scans </span>
              <span className="tool">using GSL queries in Dome9, covering GCP, AWS, and Azure platforms</span>
            </li>
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
            <li>
              (2018) 
              <span className="accomplishment">Developed an automated fish sorting and cutting system </span>
              <span className="method">by implementing computer vision algorithms, </span>
              <span className="tool">utilizing OpenCV, C++ and camera technology.</span>
            </li>
            <li>
              (2019) 
              <span className="accomplishment">Created an aircraft tracking solution from camera and laser </span>
              <span className="method">through real-time data processing and object detection, </span>
              <span className="tool">using C++ and C# programming languages</span>
            </li>
            <li>
              (2019) 
              <span className="accomplishment">Developed a precise ballistic trajectory model </span>
              <span className="method">by implementing advanced non-linear equations to simulate projectile paths, </span>
              <span className="tool">using MATLAB</span>
            </li>
            <li>
              (2020) 
              <span className="accomplishment">Creating Windows Application form to report type and level of railways defect </span>
              <span className="method">by processing signle data from multiple sensors and classify them into catagories </span>
              <span className="tool">using MATLAB's Classification Tree and LSTM algorithm for classification and C# for Windows Application form</span>
            </li>
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
            <li>
              <span className="accomplishment">Research the possibility of fall detection from vibration data </span>
              <span className="method">by developing a classification system and visualizing different events </span>
              <span className="tool">using Python, Scikit-learn, Matplotlib, Seaborn and K-Nearest Neighbors algorithm</span>
            </li>
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
            <li>
              <span className="accomplishment">Research the possibility of a camera-based smart pen system </span>
              <span className="method">by researching the minimum FOV required and number of cameras required, then compare with current product in the market</span>
            </li>
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
            <li>
              <span className="accomplishment">Participated in the NAIST's Robotics laboratory in the field of human measurement and modeling and co-develop a system to estimate human operation force while doing various tasks </span>
              <span className="method">by performing kinematics analysis and force estimation from custom force distribution equation, </span>
              <span className="tool">using OpenSim (3d modeling software) and Matlab.</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Work;
