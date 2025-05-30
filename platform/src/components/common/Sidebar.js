import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaFileAlt, FaFileWord, FaDatabase, FaRobot, FaHome, FaHistory, FaKey, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        if (window.confirm('Do you want to sign out?')) {
            navigate('/imops-platform/user/login');
        }
    };

    const isActive = (path) => location.pathname === path;
    
    return (
        <ProSidebar className="side-bar">
            <Menu>
                {/* RAG 실험 섹션 */}
                <MenuItem className="section-header">RAG Experiment</MenuItem>
                <MenuItem 
                    icon={<FaFileAlt />}
                    className="menu-item"
                    active={isActive(`/imops-platform/lab/pdf-parse`)}
                    onClick={() => navigate(`/imops-platform/lab/pdf-parse`)}
                >
                    PDF Parsing
                </MenuItem>
                <MenuItem 
                    icon={<FaFileWord />}
                    className="menu-item"
                    active={isActive(`/imops-platform/lab/text-chunk`)}
                    onClick={() => navigate(`/imops-platform/lab/text-chunk`)}
                >
                    Text Chunking
                </MenuItem>
                <MenuItem 
                    icon={<FaDatabase />}
                    className="menu-item"
                    active={isActive(`/imops-platform/lab/embedding`)}
                    onClick={() => navigate(`/imops-platform/lab/embedding`)}
                >
                    Embedding Model
                </MenuItem>
                <MenuItem 
                    icon={<FaRobot />}
                    className="menu-item"
                    active={isActive(`/imops-platform/lab/llm-params-prompt`)}
                    onClick={() => navigate(`/imops-platform/lab/llm-params-prompt`)}
                >
                    LLM Model
                </MenuItem>

                {/* Home 섹션 */}
                <MenuItem className="section-header">Home</MenuItem>
                <MenuItem 
                    icon={<FaHome />}
                    className="menu-item"
                    active={isActive('/imops-platform/lab/rag-lab')}
                    onClick={() => navigate('/imops-platform/lab/rag-lab')}
                >
                    RAG Lab
                </MenuItem>
                <MenuItem 
                    icon={<FaHistory />}
                    className="menu-item"
                    active={isActive('/imops-platform/history/rag-history')}
                    onClick={() => navigate('/imops-platform/history/rag-history')}
                >
                    RAG History
                </MenuItem>

                {/* Account 섹션 */}
                <MenuItem className="section-header">Account</MenuItem>
                <MenuItem 
                    icon={<FaKey />}
                    className="menu-item"
                    active={isActive(`/imops-platform/lab/api-key`)}
                    onClick={() => navigate(`/imops-platform/lab/api-key`)}
                >
                    API Key
                </MenuItem>
                <MenuItem 
                    icon={<FaUser />}
                    className="menu-item"
                    active={isActive('/imops-platform/user/mypage')}
                    onClick={() => navigate('/imops-platform/user/mypage')}
                >
                    My Account
                </MenuItem>
                <MenuItem 
                    icon={<FaSignOutAlt />}
                    className="menu-item"
                    onClick={handleLogout}
                >
                    Sign Out
                </MenuItem>
            </Menu>
        </ProSidebar>
    );
}

export default Sidebar;