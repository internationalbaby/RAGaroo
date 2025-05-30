import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '../ui/dialog';
import Layout from '../common/LayoutForHistory';
import '../common/Header.css';
import './RAGExperimentDetail.css';

const ExperimentDetailPage = ({ experiment, listName, onBack }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const chunkImages = experiment?.chunks;

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < chunkImages.length - 1 ? prev + 1 : prev));
  };

  if (!experiment) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="header-container">
        <div className="header-left">
          <button onClick={onBack} className="header-button">
            <ArrowLeft className="h-6 w-6" />
          </button>
        </div>
        
        <div className="header-center">
          <h1 className="header-title">{listName}</h1>
        </div>
        
        <div className="header-right" />
      </div>

      <div className="p-6 detail-container">
        
        {/* Left Panel - Questions, Answers, and Chart */}
        <div className="left-panel space-y-6">
          {/* Question Section */}
          <div className="bg-emerald-200 p-4 rounded">
            <h2 className="font-bold mb-2">Query: </h2>
            <p>{experiment.question}</p>
          </div>

          {/* Answer Section */}
          <div className="bg-emerald-200 p-4 rounded">
            <h2 className="font-bold mb-2">Response :</h2>
            <p>{experiment.answer}</p>
          </div>

          {/* Chart Section */}
          <div className="bg-emerald-200 p-4 rounded">
            <h2 className="font-bold mb-4">RAG Evaluation Score</h2>
            <div className="chart-container">
              <div className="chart-wrapper">
                <img 
                  src={experiment?.chart} 
                  alt="Score Chart" 
                  className="chart-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Parameters */}
        <div className="right-panel">
          <div className="bg-emerald-200 p-4 rounded">
            <div className="parameters-section">
              {/* Text Chunking */}
              <div className="param-category">
                <div className="param-header">
                  <h3>Text Chunking</h3>
                </div>
                <div className="param-content">
                  <div className="param-group">
                    <div className="param-item">
                      <span className="param-label">Method</span>
                      <span className="param-value">{experiment.parameters?.textChunking?.method || 'N/A'}</span>
                    </div>
                    <div className="param-item">
                      <span className="param-label">Chunk Size</span>
                      <span className="param-value">{experiment.parameters?.textChunking?.chunkSize || 'N/A'}</span>
                    </div>
                  </div>
                  <div className="param-group">
                    <div className="param-item">
                      <span className="param-label">Chunk Overlap</span>
                      <span className="param-value">{experiment.parameters?.textChunking?.chunkOverlap || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedding */}
              <div className="param-category">
                <div className="param-header">
                  <h3>Embedding</h3>
                </div>
                <div className="param-content">
                  <div className="param-group">
                    <div className="param-item">
                      <span className="param-label">Model Name</span>
                      <span className="param-value">{experiment.parameters?.embedding?.modelName || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* LLM */}
              <div className="param-category">
                <div className="param-header">
                  <h3>LLM</h3>
                </div>
                <div className="param-content">
                  <div className="param-group">
                    <div className="param-item">
                      <span className="param-label">Model Name</span>
                      <span className="param-value">{experiment.parameters?.llm?.modelName || 'N/A'}</span>
                    </div>
                    <div className="param-item">
                      <span className="param-label">Temperature</span>
                      <span className="param-value">{experiment.parameters?.llm?.temp || 'N/A'}</span>
                    </div>
                  </div>
                  <div className="param-group">
                    <div className="param-item">
                        <span className="param-label">Max Tokens</span>
                        <span className="param-value">{experiment.parameters?.llm?.token || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prompt */}
              <div className="param-category">
                <div className="param-header">
                  <h3>Prompt</h3>
                </div>
                <div className="param-content">
                  <div className="param-item">
                    <span className="param-value">{experiment.parameters?.llm?.prompt || 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* 답변 평가 */}
              <div className="param-category">
                <div className="param-header">
                  <h3>답변 평가</h3>
                </div>
                <div className="param-content">
                  <div className="param-item">
                    <span className="param-value">{experiment.parameters?.feedback || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-section mt-6">
              <button 
                onClick={() => setShowImageModal(true)}
                className="check-chunk-button"
              >
                View Chunk
              </button>
              <div className="start-time">
                <div className="start-time-label">START TIME</div>
                  <div>{experiment.startTime}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Viewer Modal */}
        <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
          <DialogContent className="DialogContent">
            <div className="modal-header flex justify-between items-center p-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">
                  {currentPage + 1} / {chunkImages.length}
                </span>
                <button
                  onClick={() => setShowImageModal(false)}
                  className="close-button p-2"
                >
                  X
                </button>
              </div>
            </div>
            <div className="modal-body relative">
              <div className="image-navigation">
                <button
                  onClick={handlePrevPage}
                  className="nav-button left"
                  disabled={currentPage === 0}
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="image-content">
                  <img 
                    src={chunkImages[currentPage]} 
                    alt={`Chunk ${currentPage + 1}`}
                    className="chunk-image"
                  />
                </div>
                <button
                  onClick={handleNextPage}
                  className="nav-button right"
                  disabled={currentPage === chunkImages.length - 1}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>      
    </Layout>
  );
};


export default ExperimentDetailPage;