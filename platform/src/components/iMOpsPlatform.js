import React from "react";
import { useNavigate } from "react-router-dom";
import "./iMOpsPlatform.css";

function IMOpsPlatform({ setCurrentView }) {
    const navigate = useNavigate();
    
    const handleItemClick = (path, view) => {
        setCurrentView(view); // 상태 업데이트
        navigate(path);
    };    

    return (
        <div className="platform-page">
            <h1><span>RAGaroo</span></h1>
            <div className="platform-container">
                <div
                    className="platform-item"
                    onClick={() => handleItemClick("/imops-platform/history/rag-history", "lists")}
                >
                    <h2>RAG History</h2>
                    <span className="platform-link">Go To ➔</span>
                </div>
                <div
                    className="platform-item"
                    onClick={() => handleItemClick("/imops-platform/lab/rag-lab", "experiments")}
                >
                    <h2>RAG Lab.</h2>
                    <span className="platform-link">Go To ➔</span>
                </div>
            </div>
        </div>
    );
}

export default IMOpsPlatform;