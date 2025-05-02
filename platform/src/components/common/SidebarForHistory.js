import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaFileAlt, FaFileWord, FaDatabase, FaRobot, FaHome, FaHistory, FaKey, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        navigate('/imops-platform/user/login');
    };

    const isActive = (path) => location.pathname === path;
    
    return (
        <ProSidebar className="side-bar">
            <Menu>
                {/* Home 섹션 */}
                <MenuItem className="section-header">Home</MenuItem>
                <MenuItem 
                    icon={<FaHome />}
                    className="menu-item"
                    active={isActive('/imops-platform/lab/rag-lab')}
                    onClick={() => navigate('/imops-platform/lab/rag-lab')}
                >
                    RAG Lab.
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
                    마이페이지
                </MenuItem>
                <MenuItem 
                    icon={<FaSignOutAlt />}
                    className="menu-item"
                    onClick={handleLogout}
                >
                    로그아웃
                </MenuItem>
            </Menu>
        </ProSidebar>
    );
}

export default Sidebar;