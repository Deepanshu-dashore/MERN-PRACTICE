import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className={`p-6 rounded-2xl border shadow-sm ${
            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
        }`}>
            <h3 className="font-bold text-lg mb-2">System & Profile Settings</h3>
            <p className="text-slate-500 text-sm mb-6">Manage application security, RBAC policies, and connected services.</p>

            <div className="space-y-4 max-w-lg">
                <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Display Name</label>
                    <input 
                        type="text" 
                        defaultValue="Dipanshu Dashore" 
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm outline-none focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Email Address</label>
                    <input 
                        type="email" 
                        defaultValue="dipanshu@example.com" 
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="pt-2">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition">
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    );
}
