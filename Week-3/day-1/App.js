function App() {
    return (
        <div className="card">
            <span className="badge">React 19 Setup</span>
            <h1>Welcome to My First React App!</h1>
            <p>This app is built using React 19 & components.</p>
            <Hello />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
