import React, { useState } from 'react';  // useEffect 제거
import Layout from '../common/Layout';
import QnALayout from '../common/QnALayout';
import evaluationResults from '../../dummyLab/id_1-id_12-eval.json';
import './Embedding.css';

function Embedding() {
    const [selectedMethod, setSelectedMethod] = useState('');
    const [savedQuestion, setSavedQuestion] = useState('');
    const [responses, setResponses] = useState([]);

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
            setResponses(['처리 중 오류가 발생했습니다.']);
        }
    };

    return (
        <Layout>
            <div className="embed-page">
                <h1 className="lab-page-title text-2xl font-bold text-center" style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
                    Embedding Model
                </h1>
                <div className="embed-container">
                    <div className="embed-left-content">
                        <div className="embed-settings">
                            <select 
                                className="embed-dropdown"
                                value={selectedMethod}
                                onChange={(e) => setSelectedMethod(e.target.value)}
                                defaultValue=""
                            >
                                <option value="" disabled hidden>Choose a embedding model</option>
                                <option value="BAAI/bge-multilingual-gemma2">BAAI/bge-multilingual-gemma2</option>
                                <option value="jinaai/jina-embeddings-v3">jinaai/jina-embeddings-v3</option>
                                <option value="intfloat/multilingual-e5-large-instruct">intfloat/multilingual-e5-large-instruct</option>
                                <option value="Upstage/solar-embedding-1-large">Upstage/solar-embedding-1-large</option>
                            </select>
                        </div>
                    </div>

                    <QnALayout 
                        onRun={handleRun} 
                        responses={responses}
                        initialQuestion={savedQuestion}
                    />
                </div>
            </div>
        </Layout>
    );
}

export default Embedding;