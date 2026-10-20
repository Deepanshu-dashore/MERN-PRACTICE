const { useState } = React;

function App() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
        }
    };

    return (
        <div className="bg-[#F4F6F7] min-h-screen py-12 px-4 flex flex-col items-center justify-center font-sans">
            <div className="max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-[#4B7BEC]">Advanced Tailwind UI</h1>
                    <p className="text-gray-600 mt-2 text-sm">Interactive States, Gradients & Custom Theme Palette</p>
                </div>

                {/* Task 1: Interactive Card + Input + Button */}
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider bg-purple-50 text-[#A55EEA] px-3 py-1 rounded-full">
                            Featured Track
                        </span>
                        <span className="text-xs text-gray-400">Week 4 Day 4</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800">Full Stack MERN Mastery</h3>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                        Master modern React hooks, state management, REST microservices, and high-performance Tailwind UI styling.
                    </p>

                    <form onSubmit={handleSubscribe} className="mt-5 space-y-3">
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#4B7BEC] focus:border-transparent transition"
                            required
                        />

                        <button 
                            type="submit"
                            className="w-full bg-[#4B7BEC] hover:bg-blue-600 active:scale-95 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition duration-200"
                        >
                            Get Course Syllabus
                        </button>
                    </form>

                    {subscribed && (
                        <div className="mt-4 p-3 bg-emerald-50 text-[#20BF6B] border border-emerald-200 rounded-lg text-sm text-center font-medium animate-fade-in">
                            ✓ Thank you! Details sent to {email}.
                        </div>
                    )}
                </div>

                {/* Task 2: Custom Color Palette Demonstration */}
                <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">Task 2: Custom Color Palette</h4>
                    <div className="grid grid-cols-4 gap-3 text-center">
                        <div className="p-3 bg-[#4B7BEC] text-white rounded-lg text-xs font-semibold">Primary<br/>#4B7BEC</div>
                        <div className="p-3 bg-[#A55EEA] text-white rounded-lg text-xs font-semibold">Secondary<br/>#A55EEA</div>
                        <div className="p-3 bg-[#20BF6B] text-white rounded-lg text-xs font-semibold">Accent<br/>#20BF6B</div>
                        <div className="p-3 bg-[#F4F6F7] text-gray-700 border border-gray-200 rounded-lg text-xs font-semibold">Surface<br/>#F4F6F7</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
