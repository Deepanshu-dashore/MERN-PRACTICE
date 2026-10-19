const { useState, useEffect } = React;

// Task 1: Fetch Public Users with useEffect
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch users");
                return res.json();
            })
            .then((data) => setUsers(data.slice(0, 6)))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="section-card">
            <h3>Task 1: Users (useEffect API Fetch)</h3>
            {loading && <div className="loading">Loading users...</div>}
            {error && <div className="error">{error}</div>}
            {!loading && !error && (
                <div className="user-list">
                    {users.map((u) => (
                        <div key={u.id} className="user-item">
                            <h4>{u.name}</h4>
                            <p>{u.email}</p>
                            <p>{u.company.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// Task 2: Display Posts Dynamically on Render
function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                setPosts(data.slice(0, 4));
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className="section-card">
            <h3>Task 2: Dynamic Posts (Lifecycle on Mount)</h3>
            {loading ? (
                <div className="loading">Loading posts...</div>
            ) : (
                <div className="posts-list">
                    {posts.map((p) => (
                        <div key={p.id} className="post-item">
                            <h4>{p.title}</h4>
                            <p>{p.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h2>Week 3 Day 4: useEffect Hook & Lifecycle</h2>
            <UserList />
            <Posts />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
