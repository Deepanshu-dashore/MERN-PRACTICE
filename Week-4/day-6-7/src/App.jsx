import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function DashboardLayout() {
    const { theme } = useTheme();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={`h-screen flex overflow-hidden ${theme === "dark" ? "dark bg-slate-950 text-slate-100" : "bg-[#f8f9fb] text-slate-900"}`}>
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                <Navbar setSidebarOpen={setSidebarOpen} />
                <main className="p-6 md:p-8 flex-1 overflow-y-auto scroll-smooth">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <DashboardLayout />
        </ThemeProvider>
    );
}
