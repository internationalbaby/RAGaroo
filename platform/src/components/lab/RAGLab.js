import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../common/Layout';
import './RAGLab.css';

function RAGLab() {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [duplicateError, setDuplicateError] = useState('');
    const navigate = useNavigate();

    const validateInput = (value) => {
        if (/^\d+$/.test(value)) {
            return "Title cannot be numbers only.";
        }
        if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value)) {
            return "Korean characters are not allowed in the title.";
        }
        if (/[^a-zA-Z0-9\-]/.test(value)) {
            return "Title may only contain letters, numbers, and hyphens (-).";
        }
        return '';
    };

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInput(newValue);
        const validationError = validateInput(newValue);
        setError(validationError);
        
        // 중복 체크 시뮬레이션
        if (!validationError && newValue) {
            setDuplicateError('');
        }
    };

    const handleDescriptionChange = (e) => {
        const newDescription = e.target.value;
        setDescription(newDescription);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!input || !description) {
            alert('Enter both the experiment title and description.');
            return;
        }
    
        if (error || descriptionError) {
            alert('Please check your input.');
            return;
        }
    
        setIsLoading(true);
        try {
            // 성공 시뮬레이션
            setTimeout(() => {
                navigate('/imops-platform/lab/api-key');
            }, 1000);
        } catch (error) {
            console.error('Failed saving:', error);
            alert('Failed to save the experiment. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Layout>
            <div className="rag-lab-page">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <h1 style={{ color: 'black' }}>Experiment Setup</h1>
                        <div className="input-wrapper">
                            {/* <label className="input-label">Experiment Title</label> */}
                            <input 
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Enter experiment title."
                                className={`input-name ${error || duplicateError ? 'input-error' : ''}`}
                            />
                            <p className={`error-message ${error || duplicateError ? 'visible' : ''}`}>
                                {duplicateError || error || ' '}
                            </p>
                            
                            {/* <label className="input-label">Experiment Description</label> */}
                            <input 
                                type="text"
                                value={description}
                                onChange={handleDescriptionChange}
                                placeholder="Enter experiment description."
                                className="input-description"
                            />
                            <p className={`description-message ${descriptionError ? 'visible' : ''}`}>{descriptionError || ' '}</p>
                        </div>
                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={!!error || !!duplicateError || !input}
                        >Next
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default RAGLab;