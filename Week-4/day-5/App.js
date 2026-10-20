const { useState, useEffect, useMemo, useCallback, memo } = React;

// 1. Memoized Child Component with React.memo
const ExpensiveChild = memo(function ExpensiveChild({ title }) {
    console.log("ExpensiveChild rendered! (Only renders when props change)");
    return (
        <div className="memo-box">
            <p><strong>React.memo Protected Child:</strong> "{title}"</p>
            <p style={{ color: "#64748b", fontSize: "12.5px" }}>
                Does NOT re-render when the parent timer ticks every second!
            </p>
        </div>
    );
});

// 2. Timer Component
function TimerSection() {
    const [seconds, setSeconds] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // 3. useCallback hook
    const handleIncrement = useCallback(() => {
        setCounter((c) => c + 1);
    }, []);

    // 4. useMemo hook for expensive computation
    const expensiveCalculation = useMemo(() => {
        console.log("Computing expensive calculation...");
        let sum = 0;
        for (let i = 0; i < 10000; i++) sum += i;
        return sum;
    }, []);

    return (
        <div className="card">
            <h3>1. Active Timer & Component State</h3>
            <p>Timer updates parent state every second:</p>
            <div className="timer-box">{seconds}s</div>

            <div style={{ margin: "15px 0" }}>
                <button onClick={handleIncrement}>Manual Counter: {counter}</button>
                <span style={{ fontSize: "13px", color: "#64748b" }}>Computed Sum: {expensiveCalculation}</span>
            </div>

            {/* Passes stable prop to memoized child */}
            <ExpensiveChild title="Static Heading Content" />
        </div>
    );
}

// 5. Simulated On-Demand Lazy Loaded Component
function LazyContentSection() {
    const [showLazy, setShowLazy] = useState(false);

    return (
        <div className="card">
            <h3>2. Lazy Loading Simulation</h3>
            <p>Load and render heavy components on demand:</p>
            <button onClick={() => setShowLazy(!showLazy)}>
                {showLazy ? "Hide Component" : "Load Heavy About Section"}
            </button>

            {showLazy && (
                <div className="lazy-box">
                    <h4>Lazy Component Loaded!</h4>
                    <p>This component bundle is only evaluated when requested, saving initial bandwidth and rendering time.</p>
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h2>React Performance & Optimization</h2>
            <p className="subtitle">Open the Browser DevTools Console to observe memoized render logs.</p>
            <TimerSection />
            <LazyContentSection />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
