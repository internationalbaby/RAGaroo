import React, { useState } from 'react';
import Layout from '../common/Layout';
import './PDFParse.css';

function PDFParse() {
    // 1. PDF 관련 상태
    const [uploadedFiles, setUploadedFiles] = useState([]); 
    const [pdfList, setPdfList] = useState([
        "iM뱅크 셀프창구 서비스 설명서.pdf",
        "iM뱅크 퀵 서비스 설명서.pdf",
        "계좌이동서비스 설명서.pdf",
        "상품설명서_iM국민연금안심통장.pdf",
        "상품설명서_매일플러스기업통장.pdf",
        "상품설명서_양도성예금증서.pdf",
        "상품설명서_파랑새적금.pdf",
        "전자금융 서비스 설명서.pdf",
        "중진공 정책자금 전용통장_상품설명서.pdf",
        "퇴직연금용정기예금(만기지급형)_상품설명서.pdf",
        "상품설명서_평생저축(일반형).pdf",
        "iM뱅크 바이오인증 서비스 설명서.pdf",
        "iM모임통장_상품설명서.pdf"
    ]); 
    const [parsingStatus, setParsingStatus] = useState(''); 
    const [isDragging, setIsDragging] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('');
    const [isUploadComplete, setIsUploadComplete] = useState(false);
    
    // 2. 페이지네이션 관련 상태
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.max(1, Math.ceil(pdfList.length / itemsPerPage));

    const currentPDFs = pdfList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    ).concat(Array(itemsPerPage).fill(null)).slice(0, itemsPerPage);

    const handleFileUpload = (files) => {
        const newFiles = Array.from(files);
        setIsUploadComplete(false);
        
        try {
            setParsingStatus('uploading');
            setUploadStatus('파일 업로드 중입니다...');
            setTimeout(() => {
                setUploadStatus('');
                setIsUploadComplete(true);
                setUploadedFiles(newFiles);
                setParsingStatus('');
            }, 5000); // 5초로 변경
        } catch (error) {
            console.error('파일 업로드 실패:', error);
            setParsingStatus('error');
            setUploadStatus('파일 업로드에 실패했습니다.');
            setTimeout(() => {
                setUploadStatus('');
                setIsUploadComplete(false);
                setParsingStatus('');
            }, 2000);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFileUpload(e.dataTransfer.files);
    };

    // PDF 파싱 핸들러 수정
    const handleParsePDF = async () => {
        if (uploadedFiles.length === 0) return;

        setParsingStatus('processing');
        try {
            // 파싱 프로세스 시뮬레이션 (3초)
            setTimeout(() => {
                setParsingStatus('completed');
                // 파싱 완료 후 PDF 리스트에 파일 이름 추가
                setPdfList(prev => [...prev, ...uploadedFiles.map(file => file.name)]);
                
                setTimeout(() => {
                    setParsingStatus('');
                    setUploadedFiles([]);
                }, 2000); // 완료 메시지 2초 표시
            }, 3000); // 처리 중 메시지 3초 표시
        } catch (error) {
            console.error('PDF 파싱 실패:', error);
            setParsingStatus('error');
        }
    };

    // 페이지네이션 핸들러
    const handlePageChange = {
        next: () => setCurrentPage(prev => Math.min(prev + 1, totalPages)),
        prev: () => setCurrentPage(prev => Math.max(prev - 1, 1))
    };

    return (
        <Layout>
            <div className="pdf-page">
                <main className="pdf-container">
                    <div className="pdf-left-content">
                        <h1 className="lab-page-title text-2xl font-bold text-center" style={{ marginBottom: '1.5rem', marginTop : '-0.1rem' }}>
                            PDF Parsing
                        </h1>
                        <div className="pdf-upload"
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                id="fileInput"
                                multiple
                                accept=".pdf"
                                onChange={(e) => handleFileUpload(e.target.files)}
                                style={{ display: 'none' }}
                            />
                            <label htmlFor="fileInput" 
                                className={`upload-label ${isDragging ? 'dragging' : ''}`}
                            >
                                PDF 파일을 드래그하거나 클릭하여 업로드하세요.
                            </label>
                        </div>

                        <button 
                            className="parse-button" 
                            onClick={handleParsePDF}
                            disabled={!isUploadComplete || uploadedFiles.length === 0 || parsingStatus === 'processing' || parsingStatus === 'completed'}
                        >
                            PDF Parsing
                        </button>

                        <div className="parsing-status">
                            {parsingStatus === 'processing' && (
                                <p className="status processing">PDF를 Parsing 중입니다...</p>
                            )}
                            {parsingStatus === 'completed' && (
                                <p className="status completed">PDF Parsing이 완료되었습니다!</p>
                            )}
                            {uploadStatus && (
                                <p className={`status ${uploadStatus.includes('이미 존재') ? 'warning' : 'info'}`}>
                                    {uploadStatus}
                                </p>
                            )}
                        </div>

                        <div className="pdf-list-section">
                            <div className="pdf-list-label">PDF 확인</div>
                            <div className="pdf-list">
                                {currentPDFs.map((pdf, index) => (
                                    <div key={index} className="pdf-item">
                                        {pdf || '\u00A0'}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pagination">
                            <button 
                                onClick={handlePageChange.prev} 
                                disabled={currentPage === 1}
                            >
                                ←
                            </button>
                            <span>{currentPage} / {totalPages}</span>
                            <button 
                                onClick={handlePageChange.next} 
                                disabled={currentPage === totalPages}
                            >
                                →
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
}

export default PDFParse;