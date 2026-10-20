import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '../context/ThemeContext';

export default function AreaInstalledChart() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [selectedYear, setSelectedYear] = useState("2023");

    const chartOptions = {
        chart: {
            type: 'bar',
            stacked: true,
            toolbar: { show: false },
            fontFamily: 'Public Sans, sans-serif',
            background: 'transparent'
        },
        colors: ['#004b50', '#ffab00', '#00b8d9'],
        plotOptions: {
            bar: {
                columnWidth: '28%',
                borderRadius: 4,
                borderRadiusApplication: 'end'
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 0
        },
        grid: {
            borderColor: isDark ? '#1e293b' : '#f8fafc',
            strokeDashArray: 3,
            yaxis: {
                lines: { show: true }
            },
            xaxis: {
                lines: { show: false }
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
                style: {
                    colors: isDark ? '#94a3b8' : '#64748b',
                    fontSize: '12px'
                }
            }
        },
        yaxis: {
            max: 80,
            tickAmount: 4,
            labels: {
                style: {
                    colors: isDark ? '#94a3b8' : '#64748b',
                    fontSize: '12px'
                }
            }
        },
        legend: {
            show: false
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
            y: {
                formatter: (val) => `${val}k`
            }
        }
    };

    const chartSeries = [
        {
            name: 'Asia',
            data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17]
        },
        {
            name: 'Europe',
            data: [6, 17, 14, 9, 19, 6, 21, 18, 8, 21, 8, 16]
        },
        {
            name: 'Americas',
            data: [6, 18, 13, 9, 20, 6, 22, 19, 8, 22, 8, 17]
        }
    ];

    return (
        <div className={`p-6 rounded-2xl border transition-all duration-200 shadow-sm flex flex-col justify-between ${
            isDark 
                ? "bg-[#131b2e] border-slate-800/80 text-white" 
                : "bg-white border-slate-200/80 text-slate-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
        }`}>
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        Area installed
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                        (+43%) than last year
                    </p>
                </div>

                {/* Year Dropdown Pill */}
                <select 
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg border outline-none cursor-pointer transition-all ${
                        isDark 
                            ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" 
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                >
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>

            {/* Sub-stat legends */}
            <div className="flex items-center gap-8 mb-4">
                <div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#004b50]" />
                        <span>Asia</span>
                    </div>
                    <p className="text-lg font-bold text-slate-800 dark:text-white mt-1">1.23k</p>
                </div>

                <div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffab00]" />
                        <span>Europe</span>
                    </div>
                    <p className="text-lg font-bold text-slate-800 dark:text-white mt-1">6.79k</p>
                </div>

                <div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00b8d9]" />
                        <span>Americas</span>
                    </div>
                    <p className="text-lg font-bold text-slate-800 dark:text-white mt-1">1.01k</p>
                </div>
            </div>

            {/* Stacked Bar Chart */}
            <div className="w-full">
                <Chart options={chartOptions} series={chartSeries} type="bar" height={280} />
            </div>
        </div>
    );
}
