import React, { useState, useEffect } from 'react';
import './QnALayout.css';

function QnALayout({ onRun, placeholder, responses = [], initialQuestion = '' }) {
    const [inputText, setInputText] = useState(initialQuestion);
    const [outputTexts, setOutputTexts] = useState(responses);
    const [currentOutputIndex, setCurrentOutputIndex] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [buttonText, setButtonText] = useState('RUN');

    // initialQuestion이 변경될 때 inputText 업데이트
    useEffect(() => {
        setInputText(initialQuestion);
    }, [initialQuestion]);

    // responses가 변경될 때 outputTexts 업데이트
    useEffect(() => {
        setOutputTexts(responses);
    }, [responses]);

    const handleRun = async () => {
        if (onRun && !isRunning) {
            setIsRunning(true);
            setButtonText('RUN...');
            setOutputTexts([]); // 실행 시 결과 초기화

            // onRun 함수 실행을 10초 후로 지연
            setTimeout(async () => {
                await onRun(inputText);
                setButtonText('Complete!');
                setIsRunning(false);

                setTimeout(() => {
                    setButtonText('RUN');
                }, 2000);
            }, 10000);
        }
    };

    const goToNextOutput = () => {
        setCurrentOutputIndex(prev => Math.min(prev + 1, outputTexts.length - 1));
    };

    const goToPrevOutput = () => {
        setCurrentOutputIndex(prev => Math.max(prev - 1, 0));
    };

    return (
        <div className="query-section">
            <div className="text-input-area">
                <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={placeholder || "질문을 입력하세요."}
                    className="text-input"
                />
            </div>
                <button 
                    className={`run-button ${buttonText === 'RUN...' ? 'running' : ''}`}
                    onClick={handleRun}
                    disabled={buttonText === 'RUN...'}
                >
                    {buttonText}
                </button>
            <div className="run-divider"></div>
            <div className="output-area">
                <textarea
                    value={outputTexts[currentOutputIndex] || ''}
                    readOnly
                    className="text-input"
                    placeholder="결과가 여기에 표시됩니다."
                />
            </div>
            <div className="pagination">
                <button 
                    onClick={goToPrevOutput} 
                    disabled={currentOutputIndex === 0 || outputTexts.length <= 1}
                >
                    ←
                </button>
                <span>{currentOutputIndex + 1} / {Math.max(outputTexts.length, 1)}</span>
                <button 
                    onClick={goToNextOutput} 
                    disabled={currentOutputIndex === outputTexts.length - 1 || outputTexts.length <= 1}
                >
                    →
                </button>
            </div>
        </div>
    );
}

export default QnALayout;