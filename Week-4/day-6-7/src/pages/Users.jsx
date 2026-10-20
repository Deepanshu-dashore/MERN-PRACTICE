import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Users() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const users = [
        { name: "Rahul Verma", email: "rahul@example.com", role: "Developer", status: "Active" },
        { name: "Sneha Reddy", email: "sneha@example.com", role: "Designer", status: "Active" },
        { name: "Aman Gupta", email: "aman@example.com", role: "Manager", status: "Pending" },
        { name: "Pooja Sharma", email: "pooja@example.com", role: "QA Engineer", status: "Active" }
    ];

    return (
        <div className={`p-6 rounded-2xl border shadow-sm ${
            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
        }`}>
            <h3 className="font-bold text-lg mb-4">User Directory</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800 text-xs text-slate-400 uppercase">
                            <th className="pb-3">Name</th>
                            <th className="pb-3">Email</th>
                            <th className="pb-3">Role</th>
                            <th className="pb-3">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {users.map((u, i) => (
                            <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="py-3.5 font-medium">{u.name}</td>
                                <td className="py-3.5 text-slate-500">{u.email}</td>
                                <td className="py-3.5">{u.role}</td>
                                <td className="py-3.5">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                                        u.status === "Active" 
                                            ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400" 
                                            : "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400"
                                    }`}>
                                        {u.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
