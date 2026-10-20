import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Reports() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const reportCards = [
        { title: "Monthly Financial Audit & Balance Sheet", date: "Generated: Oct 2026", size: "2.4 MB", type: "Financial" },
        { title: "Quarterly Performance & Infrastructure Review", date: "Generated: Sep 2026", size: "4.1 MB", type: "Operations" },
        { title: "Server Uptime & Security Vulnerability Logs", date: "Generated: Oct 2026", size: "850 KB", type: "Security" },
        { title: "User Retention & Growth Metric Analytics", date: "Generated: Aug 2026", size: "1.8 MB", type: "Marketing" }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-6 rounded-2xl border transition-all duration-200 shadow-sm ${
                isDark ? "bg-[#131b2e] border-slate-800/80 text-white" : "bg-white border-slate-200/70 text-slate-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            }`}
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                        <Icon icon="solar:document-text-bold-duotone" className="text-2xl" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Automated Reports & Audits</h3>
                        <p className="text-slate-400 text-xs">Generated on schedule with automated receipt and data summaries</p>
                    </div>
                </div>
            </div>

            <div className="mt-6 space-y-3.5">
                {reportCards.map((r, i) => (
                    <div 
                        key={i} 
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 hover:border-indigo-400/50 transition-all duration-200"
                    >
                        <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center flex-shrink-0">
                                <Icon icon="solar:file-download-bold-duotone" className="text-2xl" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-100">{r.title}</h4>
                                <p className="text-xs text-slate-400 mt-0.5">{r.date} · <span className="font-medium text-slate-500">{r.size}</span></p>
                            </div>
                        </div>

                        {/* Solid Download PDF Button */}
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => alert(`Downloading: ${r.title}`)}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs font-semibold rounded-lg shadow-sm shadow-indigo-600/20 flex items-center gap-2 self-start sm:self-center transition-all duration-150"
                        >
                            <span>Download PDF</span>
                            <Icon icon="solar:download-minimalistic-bold" className="text-sm" />
                        </motion.button>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
