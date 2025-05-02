import React from 'react';
import Layout from '../common/LayoutForHistory';
import './RAGHistory.css';

const RAGHistory = ({ experimentLists, onListClick }) => {
  return (
    <Layout>
      <div className="header-container">
        <div className="header-left" />
        
        <div className="header-center">
          <h1 className="header-title">RAG History</h1>
        </div>
        
        <div className="header-right" />
      </div>
      

      <div className="rag-page-container">
        <div className="rag-list">
          {experimentLists.map(list => (
            <div 
              key={list.id}
              onClick={() => onListClick(list)}
              className="rag-list-item"
            >
              <h2 className="rag-item-title">{list.name}</h2>
              <p className="rag-item-description">
                {list.desc || "No description available"}
              </p>
              <span className="rag-item-meta">
                {list.experiments.length} experiments
              </span>
            </div>
          ))}
        </div>
      </div>      
    </Layout>

  );
};

export default RAGHistory;