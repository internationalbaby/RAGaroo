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
            return "실험 이름은 숫자로 시작할 수 없습니다.";
        }
        if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value)) {
            return "실험 이름에는 한글을 사용할 수 없습니다.";
        }
        if (/[^a-zA-Z0-9\-]/.test(value)) {
            return "실험 이름에는 영문자, 숫자, - 만 사용할 수 있습니다.";
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
            alert('실험 이름과 설명을 모두 입력해주세요.');
            return;
        }
    
        if (error || descriptionError) {
            alert('입력값을 확인해주세요.');
            return;
        }
    
        setIsLoading(true);
        try {
            // 성공 시뮬레이션
            setTimeout(() => {
                navigate('/imops-platform/lab/api-key');
            }, 1000);
        } catch (error) {
            console.error('실험 저장 실패:', error);
            alert('실험 저장에 실패했습니다. 다시 시도해주세요.');
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
                            {/* <label className="input-label">실험 이름</label> */}
                            <input 
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="실험 이름을 입력해주세요"
                                className={`input-name ${error || duplicateError ? 'input-error' : ''}`}
                            />
                            <p className={`error-message ${error || duplicateError ? 'visible' : ''}`}>
                                {duplicateError || error || ' '}
                            </p>
                            
                            {/* <label className="input-label">실험 설명</label> */}
                            <input 
                                type="text"
                                value={description}
                                onChange={handleDescriptionChange}
                                placeholder="실험 설명을 입력해주세요"
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