import React from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ setSidebarOpen }) {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    const titles = {
        "/": "Dashboard Overview",
        "/users": "User Directory",
        "/reports": "Analytics & Reports",
        "/settings": "System Settings"
    };

    const isDark = theme === "dark";

    return (
        <header className={`h-16 border-b px-6 flex items-center justify-between sticky top-0 z-20 backdrop-blur-md transition-colors ${
            isDark ? "bg-slate-900/90 border-slate-800 text-white" : "bg-white/90 border-slate-200/80 text-slate-800"
        }`}>
            <div className="flex items-center gap-3">
                <button 
                    onClick={() => setSidebarOpen(true)}
                    className="md:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                    <Icon icon="solar:hamburger-menu-linear" className="text-2xl" />
                </button>
                <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                    {titles[location.pathname] || "Dashboard"}
                </h2>
            </div>

            <div className="flex items-center gap-3">
                {/* Notification Bell */}
                <button className="p-2 text-slate-500 hover:text-indigo-600 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition relative">
                    <Icon icon="solar:bell-bing-linear" className="text-xl" />
                    <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-2 right-2 ring-2 ring-white dark:ring-slate-900"></span>
                </button>

                {/* Theme Switcher Button */}
                <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTheme} 
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-1.5 transition-all shadow-sm ${
                        isDark 
                            ? "bg-slate-800 border-slate-700 text-amber-300 hover:bg-slate-700" 
                            : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                    }`}
                >
                    <Icon icon={isDark ? "solar:sun-2-bold" : "solar:moon-bold"} className="text-base" />
                    <span>{isDark ? "Light" : "Dark"}</span>
                </motion.button>
            </div>
        </header>
    );
}
