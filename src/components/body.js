import React, { useState } from 'react';
import AboutMe from './tabs/aboutme';
import Work from './tabs/work'

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('about-me');

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button className={activeTab === 'about-me' ? 'active' : ''} onClick={() => setActiveTab('about-me')}>about me</button>
        <button className={activeTab === 'work' ? 'active' : ''} onClick={() => setActiveTab('work')}>work</button>
        <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>projects</button>
        <button className={activeTab === 'article' ? 'active' : ''} onClick={() => setActiveTab('article')}>article</button>
        <button className={activeTab === 'achievements' ? 'active' : ''} onClick={() => setActiveTab('achievements')}>achievements</button>
        <button className={activeTab === 'contacts' ? 'active' : ''} onClick={() => setActiveTab('contacts')}>contacts</button>
      </div>
      <div className="tab-content">
        {activeTab === 'about-me' && <AboutMe />}
        {activeTab === 'work' && <Work />}
        {activeTab === 'projects' && <div>Projects content</div>}
        {activeTab === 'article' && <div>Article content</div>}
        {activeTab === 'achievements' && <div>Achievements content</div>}
        {activeTab === 'contacts' && <div>Contacts content</div>}
      </div>
    </div>
  );
};

export const Activities = () => {
  return (
    <div className="activities-container">
      <h2> my activity </h2>
    </div>
  );
};
