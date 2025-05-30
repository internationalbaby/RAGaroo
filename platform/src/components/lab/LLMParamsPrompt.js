import React, { useState } from 'react';
import Layout from '../common/Layout';
import QnALayout from '../common/QnALayout';
import evaluationResults from '../../dummyLab/id_2-id_22-eval.json';
import './LLMParamsPrompt.css';

function LLMParamsPrompt() {
    const [temperature, setTemperature] = useState(0.3);
    const [maxTokens, setMaxTokens] = useState(2048);
    const [selectedMethod, setSelectedMethod] = useState('');
    const [prompt, setPrompt] = useState('');
    const [savedQuestion, setSavedQuestion] = useState('');
    const [responses, setResponses] = useState([]);

    const handleInputChange = (setter, max) => (e) => {
        const value = Math.min(Math.max(0, parseInt(e.target.value) || 0), max);
        setter(value);
    };

    const handleRun = async (inputText) => {
        try {
            // 설정값 콘솔에 출력
            console.log('Embedding Configuration:', {
                method: selectedMethod,
                question: inputText
            });
            
            setSavedQuestion(inputText);
            
            // JSON 데이터로부터 응답 생성
            const mockResponses = evaluationResults.map(result => 
                `답변: ${result.answer}

이해도: ${result.evaluation.accuracy}
간결성: ${result.evaluation.conciseness}

피드백: ${result.evaluation.feedback}`
            );

            setResponses(mockResponses);
        } catch (error) {
            console.error('Error in handleRun:', error);
            setResponses(['Error occurred during processing.']);
        }
    };

    return (
        <Layout>
            <div className="llm-page">
                <h1 className="lab-page-title text-2xl font-bold text-center" style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
                    LLM Model
                </h1>
                <main className="llm-container">
                    <div className="llm-left-content">
                        <div className="llm-settings">
                            <select 
                                className="llm-dropdown"
                                value={selectedMethod}
                                onChange={(e) => setSelectedMethod(e.target.value)}
                                defaultValue=""
                            >
                                <option value="" disabled hidden>Choose a LLM model</option>
                                <option value="NCSOFT/Llama-VARCO-8B-Instruct">NCSOFT/Llama-VARCO-8B-Instruct</option>
                                <option value="rtzr/ko-gemma-2-9b-it">rtzr/ko-gemma-2-9b-it</option>
                                <option value="mistralai/Mistral-Small-Instruct-2409">mistralai/Mistral-Small-Instruct-2409</option>
                                <option value="gpt-4o">gpt-4o</option>
                            </select>

                            <div className="llm-parameters">
                                <div className="llm-slider">
                                    <div className="slider-header">
                                        <label>Temperature:</label>
                                        <input 
                                            type="number"
                                            className="number-input"
                                            value={temperature}
                                            onChange={(e) => setTemperature(parseFloat(e.target.value))}
                                            min="0"
                                            max="2"
                                            step="0.01"
                                        />
                                    </div>
                                    <div className="slider-with-labels">
                                        <span className="slider-value">0.00</span>
                                        <input 
                                            type="range"
                                            min="0"
                                            max="2"
                                            step="0.01"
                                            value={temperature}
                                            onChange={(e) => setTemperature(parseFloat(e.target.value))}
                                        />
                                        <span className="slider-value">2.00</span>
                                    </div>
                                </div>

                                <div className="llm-slider">
                                    <div className="slider-header">
                                        <label>Max Tokens:</label>
                                        <input 
                                            type="number"
                                            className="number-input"
                                            value={maxTokens}
                                            onChange={(e) => handleInputChange(setMaxTokens, 4096)(e)}
                                            min="0"
                                            max="4096"
                                        />
                                    </div>
                                    <div className="slider-with-labels">
                                        <span className="slider-value">0</span>
                                        <input 
                                            type="range"
                                            min="0"
                                            max="4096"
                                            value={maxTokens}
                                            onChange={(e) => handleInputChange(setMaxTokens, 4096)(e)}
                                        />
                                        <span className="slider-value">4096</span>
                                    </div>
                                </div>

                                <div className="prompt-input">
                                    <label className="prompt-label">Prompt</label>
                                    <textarea 
                                        className="prompt-textarea"
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        rows="4"
                                        placeholder="Input your prompt."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <QnALayout 
                        onRun={handleRun} 
                        responses={responses}
                        initialQuestion={savedQuestion}
                    />

                </main>
            </div>
        </Layout>
    )
};

export default LLMParamsPrompt;