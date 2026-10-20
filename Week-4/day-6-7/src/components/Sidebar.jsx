import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Sidebar({ isOpen, setIsOpen }) {
    const navItems = [
        { path: "/", label: "Dashboard", icon: "solar:widget-2-bold-duotone" },
        { path: "/users", label: "Users", icon: "solar:users-group-two-rounded-bold-duotone" },
        { path: "/reports", label: "Reports", icon: "solar:document-text-bold-duotone" },
        { path: "/settings", label: "Settings", icon: "solar:settings-bold-duotone" }
    ];

    return (
        <>
            {/* Mobile Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            {/* Dark Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-40 w-64 bg-[#0b0f19] border-r border-slate-800/80 text-slate-200 
                transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                flex flex-col justify-between h-screen md:h-full flex-shrink-0 shadow-2xl overflow-hidden
            `}>
                <div className="flex flex-col flex-1 min-h-0">
                    {/* Brand Header with proper Logo Icon background */}
                    <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800/80 flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-emerald-500 via-[#00a76f] to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 flex-shrink-0">
                                <Icon icon="solar:shield-star-bold-duotone" className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-extrabold text-[15px] text-white tracking-tight leading-snug">
                                    DD <span className="text-emerald-400">AdminHub</span>
                                </span>
                                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                                    Enterprise UI
                                </span>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="md:hidden text-slate-400 hover:text-white p-1"
                        >
                            <Icon icon="solar:close-circle-bold" className="text-xl" />
                        </button>
                    </div>

                    {/* Navigation Links with smooth scroll */}
                    <nav className="p-4 space-y-1.5 flex-1 overflow-y-auto">
                        <p className="px-3 pb-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            Main Menu
                        </p>
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === "/"}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) => `
                                    flex items-center gap-3 px-3.5 py-2.5 rounded-md font-medium text-sm transition-all duration-200
                                    ${isActive 
                                        ? "bg-[#00a76f] text-white shadow-md shadow-[#00a76f]/25 font-semibold" 
                                        : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"}
                                `}
                            >
                                <Icon icon={item.icon} className="text-xl" />
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* Profile Footer */}
                <div className="p-4 border-t border-slate-800/80 bg-[#080b12]">
                    <div className="flex items-center gap-3 px-2 py-1">
                        <div className="w-10 h-10 rounded-full bg-[#00a76f] flex items-center justify-center text-white font-bold text-sm shadow-md border border-emerald-400/30">
                            DD
                        </div>
                        <div className="text-xs">
                            <p className="font-semibold text-white">Dipanshu Dashore</p>
                            <p className="text-slate-400 text-[11px]">Full Stack Developer</p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
