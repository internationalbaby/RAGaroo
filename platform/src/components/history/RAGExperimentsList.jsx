import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import Layout from '../common/LayoutForHistory';
import '../common/Header.css';
import './RAGExperimentsList.css';

const ExperimentsListPage = ({ selectedList, onBack, onExperimentClick }) => {
  if (!selectedList) {
    return <div>Loading...</div>;
  }

  const handleDownload = () => {
    try {
      const jsonData = JSON.stringify(selectedList, null, 2);
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${selectedList.name}_experiments.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Error occurred during download.');
    }
  };

//ver.2
  return (
    <Layout>
      <div className="header-container">
        <div className="header-left">
          <button onClick={onBack} className="header-button">
            <ArrowLeft className="h-6 w-6" />
          </button>
        </div>
        
        <div className="header-center">
          <h1 className="header-title">{selectedList.name}</h1>
        </div>
        
        <div className="header-right">
          <button 
            onClick={handleDownload}
            className="header-button"
          >
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-6 list-page-container">    
        <div className="list-list">
          {selectedList.experiments.map((exp, index) => (
            <div 
              key={exp.id}
              onClick={() => onExperimentClick(exp.id)}
              className="list-list-item"
            >
              <h2 className="list-item-title">{exp.question}</h2>
              <p className="list-item-description">
                {exp.answer}
              </p>
              <span className="list-item-meta">
                {exp.startTime}
              </span>
            </div>
          ))}
        </div>
      </div>      
    </Layout>
  );
};

export default ExperimentsListPage;