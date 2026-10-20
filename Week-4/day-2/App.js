const { createContext, useContext, useState, useEffect } = React;

// 1. Create ThemeContext
const ThemeContext = createContext();

// 2. Navbar with Theme Toggle Button
function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header>
            <nav>
                <div className="logo">ContextAPI Showcase</div>
                <button className="theme-btn" onClick={toggleTheme}>
                    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </button>
            </nav>
        </header>
    );
}

// 3. Deeply nested child demonstrating absence of Prop Drilling
function DeepChild() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="child-box">
            <h4>Deep Nested Child Component</h4>
            <p>Directly consuming global theme via <code>useContext(ThemeContext)</code> without any intermediate props drilling!</p>
            <p>Current active theme: <strong>{theme.toUpperCase()}</strong></p>
        </div>
    );
}

// 4. Main Content Component
function Content() {
    return (
        <main>
            <div className="card">
                <h2>Eliminating Prop Drilling with React Context</h2>
                <p>
                    When data needs to be accessed by many components at different nesting levels, passing props manually down through intermediate components becomes tedious and hard to maintain.
                </p>
                <p>
                    The Context API provides a way to share values like themes, current authenticated users, or preferred language between components without explicitly passing a prop through every level of the tree.
                </p>
                <DeepChild />
            </div>
        </main>
    );
}

// 5. Main App wrapped with ThemeContext.Provider
function App() {
    // Read initial theme from localStorage if available
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("app_theme") || "light";
    });

    useEffect(() => {
        localStorage.setItem("app_theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`app-container ${theme}`}>
                <Navbar />
                <Content />
            </div>
        </ThemeContext.Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
