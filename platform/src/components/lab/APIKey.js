import React, { useState, useEffect } from 'react';
import Layout from '../common/Layout';
import './APIKey.css';

function APIKey() {
    const [apiKeys, setApiKeys] = useState({
        OpenAI: '',
        Cohere: '',
        Upstage: ''
    });
    const [status, setStatus] = useState('');

    const handleInputChange = (keyName, value) => {
        setApiKeys(prev => ({
            ...prev,
            [keyName]: value
        }));
    };

    const handleSubmit = () => {
        if (Object.values(apiKeys).some(value => value.trim() === '')) {
            setStatus('모든 API 키를 입력해주세요.');
            setTimeout(() => setStatus(''), 2000);
            return;
        }

        setStatus('API 키가 성공적으로 저장되었습니다.');
        setTimeout(() => setStatus(''), 2000);
    };

    return (
        <Layout>
            <div className="api-key-page">
                <div className="api-key-container">
                    <div className="api-key-form">
                        <h1 className="lab-page-title text-2xl font-bold text-center" style={{ marginBottom: '1.5rem' }}>
                            API Key
                        </h1>
                        {["OpenAI", "Cohere", "Upstage"].map((keyName) => (
                            <div className="api-key-item" key={keyName}>
                                <label className="api-key-label">{keyName}</label>
                                <input 
                                    type="text" 
                                    placeholder={`${keyName} API Key`}
                                    className="api-key-input-name"
                                    value={apiKeys[keyName]}
                                    onChange={(e) => handleInputChange(keyName, e.target.value)}
                                />
                            </div>
                        ))}

                        <button 
                            type="button"
                            className="api-key-submit-button"
                            onClick={handleSubmit}
                        >
                            Save
                        </button>

                        {status && (
                            <div className={`status-message ${status.includes('오류') ? 'error' : 'success'}`}>
                                {status}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default APIKey;