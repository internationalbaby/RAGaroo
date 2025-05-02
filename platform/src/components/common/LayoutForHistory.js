import React from 'react';
import Sidebar from './SidebarForHistory';
import './LayoutForHistory.css';

function Layout({ children }) {
    return (
        <div className="layout">
            <Sidebar />
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default Layout;