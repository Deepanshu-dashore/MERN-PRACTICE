import React from 'react';
import StatCard from '../components/StatCard';
import CurrentDownloadChart from '../components/CurrentDownloadChart';
import AreaInstalledChart from '../components/AreaInstalledChart';
import Chart from '../components/Chart';

export default function Dashboard() {
    const stats = [
        { 
            label: "Total active users", 
            val: "18,765", 
            change: "+2.6%", 
            subtext: "last 7 days",
            isPositive: true,
            chartColor: "#00a76f",
            chartData: [12, 14, 18, 16, 42, 20, 32]
        },
        { 
            label: "Total installed", 
            val: "4,876", 
            change: "+0.2%", 
            subtext: "last 7 days",
            isPositive: true,
            chartColor: "#00b8d9",
            chartData: [14, 20, 38, 28, 22, 34, 30]
        },
        { 
            label: "Total downloads", 
            val: "678", 
            change: "-0.1%", 
            subtext: "last 7 days",
            isPositive: false,
            chartColor: "#ff5630",
            chartData: [22, 26, 36, 18, 24, 46, 38]
        }
    ];

    return (
        <div className="space-y-6">
            {/* Top Stat Cards matching Reference Image 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((s, i) => (
                    <StatCard key={i} {...s} />
                ))}
            </div>

            {/* Middle Charts matching Reference Image 3: Donut + Stacked Area Installed */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                    <CurrentDownloadChart />
                </div>
                <div className="lg:col-span-2">
                    <AreaInstalledChart />
                </div>
            </div>

            {/* Overall Growth Chart */}
            <Chart />
        </div>
    );
}
