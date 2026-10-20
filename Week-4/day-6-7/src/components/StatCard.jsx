import React from 'react';
import Chart from 'react-apexcharts';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function StatCard({ 
    label, 
    val, 
    change, 
    subtext = "last 7 days", 
    isPositive = true, 
    chartData = [12, 18, 14, 26, 42, 20, 30], 
    chartColor = "#00a76f" 
}) {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const sparkOptions = {
        chart: {
            type: 'bar',
            sparkline: { enabled: true },
            animations: { enabled: true, speed: 700 }
        },
        colors: [chartColor],
        plotOptions: {
            bar: {
                columnWidth: '55%',
                borderRadius: 2,
                borderRadiusApplication: 'end'
            }
        },
        tooltip: {
            fixed: { enabled: false },
            x: { show: false },
            y: {
                title: { formatter: () => '' }
            },
            marker: { show: false },
            theme: isDark ? 'dark' : 'light'
        }
    };

    const sparkSeries = [{
        name: label,
        data: chartData
    }];

    return (
        <motion.div 
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className={`p-6 rounded-2xl border transition-all duration-200 shadow-sm flex flex-col justify-between ${
                isDark 
                    ? "bg-[#131b2e] border-slate-800/80 text-white" 
                    : "bg-white border-slate-200/80 text-slate-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            }`}
        >
            {/* Top: Card Label */}
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {label}
            </p>

            {/* Middle: Big Metric Number + Mini Bar Chart */}
            <div className="flex items-center justify-between gap-3 my-3">
                <h3 className="text-[28px] sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                    {val}
                </h3>
                <div className="w-20 h-11 flex items-end justify-end flex-shrink-0">
                    <Chart 
                        options={sparkOptions} 
                        series={sparkSeries} 
                        type="bar" 
                        height={44} 
                        width={78} 
                    />
                </div>
            </div>

            {/* Bottom: Trend Indicator */}
            <div className="flex items-center gap-1.5 text-xs">
                <div className={`flex items-center gap-1 font-bold ${
                    isPositive 
                        ? "text-emerald-500 dark:text-emerald-400" 
                        : "text-rose-500 dark:text-rose-400"
                }`}>
                    <Icon 
                        icon={isPositive ? "solar:arrow-up-linear" : "solar:arrow-down-linear"} 
                        className="text-sm stroke-[3]" 
                    />
                    <span>{change}</span>
                </div>
                <span className="text-slate-400 font-medium">
                    {subtext}
                </span>
            </div>
        </motion.div>
    );
}
