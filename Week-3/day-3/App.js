const { useState } = React;

// Task 1: Counter App Component
function CounterApp() {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <h3>Task 1: Counter App (useState)</h3>
            <div className="counter-display">{count}</div>
            <div className="button-group">
                <button onClick={() => setCount(count + 1)}>+ Increment</button>
                <button onClick={() => setCount(count - 1)}>- Decrement</button>
                <button className="btn-reset" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

// Task 2: Live Form Preview Component
function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="card">
            <h3>Task 2: Live Form Preview</h3>
            <div className="form-group">
                <label>Enter Name:</label>
                <input 
                    type="text" 
                    placeholder="e.g. Dipanshu"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <label>Enter Email:</label>
                <input 
                    type="email" 
                    placeholder="e.g. dipanshu@example.com"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>

            <div className="preview-box">
                <h4>Live Preview:</h4>
                <p><strong>Name:</strong> {name || "None entered yet"}</p>
                <p><strong>Email:</strong> {email || "None entered yet"}</p>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h2>Week 3 Day 3: State & React Hooks</h2>
            <CounterApp />
            <UserForm />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
