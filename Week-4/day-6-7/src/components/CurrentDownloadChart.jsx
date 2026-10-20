import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '../context/ThemeContext';

export default function CurrentDownloadChart() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const chartOptions = {
        chart: {
            type: 'donut',
            fontFamily: 'Public Sans, sans-serif'
        },
        labels: ['Mac', 'Window', 'iOS', 'Android'],
        colors: ['#c8fad0', '#5be49b', '#00a76f', '#004b50'],
        stroke: {
            show: false,
            width: 0
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
            fillSeriesColor: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '80%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '13px',
                            fontWeight: 500,
                            color: isDark ? '#94a3b8' : '#64748b',
                            offsetY: -8
                        },
                        value: {
                            show: true,
                            fontSize: '22px',
                            fontWeight: 700,
                            color: isDark ? '#ffffff' : '#0f172a',
                            offsetY: 4,
                            formatter: () => '188,245'
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            fontSize: '12px',
                            fontWeight: 500,
                            color: isDark ? '#94a3b8' : '#64748b',
                            formatter: () => '188,245'
                        }
                    }
                }
            }
        }
    };

    const series = [18245, 45200, 52800, 72000];

    const legends = [
        { label: 'Mac', color: '#c8fad0' },
        { label: 'Window', color: '#5be49b' },
        { label: 'iOS', color: '#00a76f' },
        { label: 'Android', color: '#004b50' }
    ];

    return (
        <div className={`p-6 rounded-2xl border transition-all duration-200 shadow-sm flex flex-col justify-between ${
            isDark 
                ? "bg-[#131b2e] border-slate-800/80 text-white" 
                : "bg-white border-slate-200/80 text-slate-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
        }`}>
            {/* Header */}
            <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    Current download
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                    Downloaded by operating system
                </p>
            </div>

            {/* Donut Chart */}
            <div className="py-4 flex items-center justify-center">
                <div className="w-[240px] h-[240px]">
                    <Chart options={chartOptions} series={series} type="donut" width="100%" height="100%" />
                </div>
            </div>

            {/* Bottom Legend */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-around text-xs">
                {legends.map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5 font-medium text-slate-600 dark:text-slate-300">
                        <span 
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
                            style={{ backgroundColor: item.color }} 
                        />
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
