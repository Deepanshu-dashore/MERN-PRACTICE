const { useState } = React;

// Task 2: Responsive Navigation Bar with Mobile Hamburger Menu
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
                <h1 className="text-xl font-bold tracking-wide text-indigo-400">TailwindSite</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-200">
                    <li className="hover:text-indigo-400 cursor-pointer transition">Home</li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">Features</li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">Pricing</li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">Contact</li>
                </ul>

                {/* Mobile Menu Toggle Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="md:hidden text-2xl focus:outline-none p-1"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2 border-t border-slate-700">
                    <div className="block py-2 text-slate-200 hover:text-indigo-400">Home</div>
                    <div className="block py-2 text-slate-200 hover:text-indigo-400">Features</div>
                    <div className="block py-2 text-slate-200 hover:text-indigo-400">Pricing</div>
                    <div className="block py-2 text-slate-200 hover:text-indigo-400">Contact</div>
                </div>
            )}
        </nav>
    );
}

// Task 1: Component Conversion to Tailwind
function ComponentShowcase() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Task 1: Utility Component Conversions</h2>
            <div className="flex flex-wrap gap-4 items-center">
                <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition shadow-sm">
                    Primary Button
                </button>
                <button className="bg-slate-200 text-slate-700 px-5 py-2.5 rounded-lg font-medium hover:bg-slate-300 transition">
                    Secondary Button
                </button>
                <button className="border border-indigo-600 text-indigo-600 px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-50 transition">
                    Outline Button
                </button>
            </div>
        </section>
    );
}

// Task 3: Card Layout using Tailwind Grid
function CardGrid() {
    const cards = [
        { title: "React 19 Components", desc: "Build modular, declarative UI blocks using functional components and hooks." },
        { title: "Tailwind Utility CSS", desc: "Design modern interfaces directly in your markup with zero stylesheet bloat." },
        { title: "Client Routing", desc: "Effortlessly manage complex multi-view SPAs with instant client navigation." }
    ];

    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Task 3: Responsive Card Layout</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cards.map((c, i) => (
                    <div 
                        key={i} 
                        className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">{c.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
                        </div>
                        <span className="mt-4 text-xs font-semibold text-indigo-600 inline-block">Learn more &rarr;</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

function App() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 py-10 w-full flex-1">
                <ComponentShowcase />
                <CardGrid />
            </main>
            <footer className="bg-white border-t border-slate-200 py-6 text-center text-sm text-slate-500">
                &copy; 2026 Dipanshu Dashore. Week 4 Day 3 Tailwind CSS Practice.
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
