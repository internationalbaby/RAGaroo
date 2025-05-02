import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { experimentLists } from './dummyData';
import HistoryListPage from './components/history/RAGHistory';
import ExperimentsListPage from './components/history/RAGExperimentsList';
import ExperimentDetailPage from './components/history/RAGExperimentDetail';
import IMOpsPlatform from "./components/iMOpsPlatform";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import MyPage from "./components/user/MyPage";
import RAGLab from "./components/lab/RAGLab";
import APIKey from "./components/lab/APIKey";
import PDFParsing from "./components/lab/PDFParse";
import TextChunking from "./components/lab/TextChunk";
import Embedding from "./components/lab/Embedding";
import LLMParamsPrompt from "./components/lab/LLMParamsPrompt";
import Sidebar from './components/common/Sidebar';
import './App.css';

const AppContent = () => {
    const location = useLocation();
    const [currentView, setCurrentView] = useState('lists');
    const [currentList, setCurrentList] = useState(null);
    const [currentExperiment, setCurrentExperiment] = useState(null);
  
    const handleListClick = (list) => {
        setCurrentList(list);
        setCurrentView('experiments');
    };
  
    const handleExperimentClick = (experimentId) => {
        if (!currentList) return;
        const foundExperiment = currentList.experiments.find(exp => exp.id === experimentId);
        if (foundExperiment) {
            setCurrentExperiment(foundExperiment);
            setCurrentView('detail');
        }
    };
  
    const handleBack = () => {
          if (currentView === 'experiments') {
            setCurrentView('lists');
            setCurrentList(null);
        } else if (currentView === 'detail') {
            setCurrentView('experiments');
            setCurrentExperiment(null);
        }
    };

    return (
        <div className="App min-h-screen bg-white">
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/imops-platform/user/login" replace />} />
                    <Route path="/imops-platform" element={<IMOpsPlatform setCurrentView={setCurrentView} />} />
                    <Route path="/imops-platform/user/login" element={<Login />} />
                    <Route path="/imops-platform/user/signup" element={<Signup />} />
                    <Route path="/imops-platform/user/mypage" element={<MyPage />} />
                    <Route path="/imops-platform/lab/rag-lab" element={<RAGLab />} />
                    <Route path="/imops-platform/lab/api-key" element={<APIKey />} />
                    <Route path="/imops-platform/lab/pdf-parse" element={<PDFParsing />} />
                    <Route path="/imops-platform/lab/text-chunk" element={<TextChunking />} />
                    <Route path="/imops-platform/lab/embedding" element={<Embedding />} />
                    <Route path="/imops-platform/lab/llm-params-prompt" element={<LLMParamsPrompt />} />
                    {/* RAG History와 관련된 상태 기반 경로 */}
                    <Route
                        path="/imops-platform/history/rag-history"
                        element={
                            currentView === 'lists' ? (
                                <HistoryListPage experimentLists={experimentLists} onListClick={handleListClick} />
                            ) : currentView === 'experiments' ? (
                                <ExperimentsListPage
                                    selectedList={currentList}
                                    onBack={handleBack}
                                    onExperimentClick={handleExperimentClick}
                                />
                            ) : currentView === 'detail' ? (
                                <ExperimentDetailPage
                                experiment={currentExperiment}
                                listName={currentList.name}
                                onBack={handleBack}
                            />
                            ) : (
                                <div>Loading...</div>
                            )
                        }
                    />
                </Routes>
            </div>
        </div>
    )
};

              
const App = () => (
    <Router>
        <AppContent />
    </Router>
);

export default App;