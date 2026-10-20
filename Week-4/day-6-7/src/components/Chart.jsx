import React from 'react';
import Chart from 'react-apexcharts';
import { Icon } from '@iconify/react';
import { useTheme } from '../context/ThemeContext';

export default function AnalyticsChart() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const chartOptions = {
        chart: {
            type: 'area',
            height: 320,
            toolbar: { show: false },
            fontFamily: 'Public Sans, sans-serif',
            background: 'transparent'
        },
        theme: {
            mode: isDark ? 'dark' : 'light'
        },
        colors: ['#4f46e5', '#06b6d4'],
        dataLabels: { enabled: false },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [0, 90, 100]
            }
        },
        grid: {
            borderColor: isDark ? '#1e293b' : '#f1f5f9',
            strokeDashArray: 4,
            padding: { top: 0, right: 0, bottom: 0, left: 10 }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                style: {
                    colors: isDark ? '#94a3b8' : '#64748b',
                    fontSize: '12px'
                }
            },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            labels: {
                style: {
                    colors: isDark ? '#94a3b8' : '#64748b',
                    fontSize: '12px'
                },
                formatter: (val) => `$${val}`
            }
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
            y: {
                formatter: (val) => `$${val.toLocaleString()}`
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            labels: {
                colors: isDark ? '#cbd5e1' : '#334155'
            }
        }
    };

    const chartSeries = [
        {
            name: 'Revenue ($)',
            data: [3100, 4200, 3800, 5600, 6200, 5800, 7100, 8400, 7900, 9200, 10500, 11800]
        },
        {
            name: 'Target ($)',
            data: [2500, 3500, 4500, 5000, 5500, 6000, 6500, 7500, 8000, 8500, 9500, 10000]
        }
    ];

    return (
        <div className={`p-6 rounded-2xl border transition-all duration-200 shadow-sm ${
            isDark 
                ? "bg-[#131b2e] border-slate-800/80 text-white" 
                : "bg-white border-slate-200/70 text-slate-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
        }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                    <div className="flex items-center gap-2">
                        <Icon icon="solar:chart-2-bold-duotone" className="text-indigo-600 text-xl" />
                        <h3 className="font-bold text-base text-slate-900 dark:text-white">Revenue & Growth Analytics</h3>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Real-time performance metrics across all fiscal quarters</p>
                </div>

            </div>

            <div className="w-full">
                <Chart options={chartOptions} series={chartSeries} type="area" height={310} />
            </div>
        </div>
    );
}
