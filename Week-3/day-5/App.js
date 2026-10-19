const { useState } = React;

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() === "") {
            setError("Please enter a username");
            return;
        }
        setError("");
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername("");
        setPassword("");
    };

    return (
        <div className="auth-card">
            {isLoggedIn ? (
                // Task 2: Conditional Rendering (Logged In)
                <div className="welcome-box">
                    <h3>Welcome back, {username}! 🎉</h3>
                    <p>You have successfully logged in to the platform.</p>
                    <button className="btn-logout" onClick={handleLogout}>Log Out</button>
                </div>
            ) : (
                // Task 1: Simple Login Form UI
                <div>
                    <h2>Login to Account</h2>
                    {error && <p style={{ color: "#ef4444", fontSize: "13px", marginBottom: "10px" }}>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Enter username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        <input 
                            type="password" 
                            placeholder="Enter password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LoginForm />);
