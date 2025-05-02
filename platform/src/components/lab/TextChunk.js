import React, { useState } from 'react';  // useEffect 제거
import Layout from '../common/Layout';
import QnALayout from '../common/QnALayout';
import evaluationResults from '../../dummyLab/id_1-id_11-eval.json';
import './TextChunk.css';

function TextChunk() {
    const [chunkSize, setChunkSize] = useState(256);
    const [chunkOverlap, setChunkOverlap] = useState(32);
    const [selectedMethod, setSelectedMethod] = useState('');
    const [responses, setResponses] = useState([]);
    const [savedQuestion, setSavedQuestion] = useState('');

    const handleInputChange = (setter, max) => (e) => {
        const value = Math.min(Math.max(0, parseInt(e.target.value) || 0), max);
        setter(value);
    };

    const handleRun = async (inputText) => {
        try {
            console.log('Chunk Configuration:', {
                method: selectedMethod,
                chunksize: chunkSize,
                chunkoverlap: chunkOverlap,
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
            console.error('Failed to process:', error);
            setResponses(['처리 중 오류가 발생했습니다.']);
        }
    };

    return (
        <Layout>
            <div className="chunk-page">
                <h1 className="lab-page-title text-2xl font-bold text-center" style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
                    Text Chunking
                </h1>
                <main className="chunk-container">
                    <div className="chunk-left-content">
                        <div className="chunk-settings">
                            <select 
                                className="chunk-dropdown"
                                value={selectedMethod}
                                onChange={(e) => setSelectedMethod(e.target.value)}
                                defaultValue=""
                            >
                                <option value="" disabled hidden>Choose a chunking method</option>
                                <option value="character">CharacterTextSplitter</option>
                                <option value="recursive">RecursiveCharacterTextSplitter</option>
                                <option value="markdown">MarkdownHeaderTextSplitter</option>
                                <option value="html">HTMLHeaderTextSplitter</option>
                            </select>

                            {/* Chunk Size 슬라이더 */}
                            <div className="chunk-slider">
                                <div className="slider-header">
                                    <label>Chunk Size :</label>
                                    <input
                                        type="number"
                                        className="number-input"
                                        value={chunkSize}
                                        onChange={handleInputChange(setChunkSize, 512)}
                                        min="0"
                                        max="512"
                                    />
                                </div>
                                <div className="slider-with-labels">
                                    <span className="slider-value">0</span>
                                    <input 
                                        type="range"
                                        min="0"
                                        max="512"
                                        value={chunkSize}
                                        onChange={(e) => setChunkSize(parseInt(e.target.value))}
                                    />
                                    <span className="slider-value">512</span>
                                </div>
                            </div>

                            {/* Chunk Overlap 슬라이더 */}
                            <div className="chunk-slider">
                                <div className="slider-header">
                                    <label>Chunk Overlap :</label>
                                    <input
                                        type="number"
                                        className="number-input"
                                        value={chunkOverlap}
                                        onChange={handleInputChange(setChunkOverlap, 256)}
                                        min="0"
                                        max="256"
                                    />
                                </div>
                                <div className="slider-with-labels">
                                    <span className="slider-value">0</span>
                                    <input 
                                        type="range"
                                        min="0"
                                        max="256"
                                        value={chunkOverlap}
                                        onChange={(e) => setChunkOverlap(parseInt(e.target.value))}
                                    />
                                    <span className="slider-value">256</span>
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
    );
}

export default TextChunk;