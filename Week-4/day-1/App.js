const { HashRouter, Routes, Route, NavLink, useParams, Link } = ReactRouterDOM;

// Pages
function Home() {
    return (
        <div className="page-box">
            <h2>Home Page</h2>
            <p>Welcome to the React Router SPA! Navigation occurs instantly without full page reloading.</p>
            <h3>Explore Dynamic Route Posts:</h3>
            <div className="posts-list">
                <Link to="/post/101" className="post-link">Post #101</Link>
                <Link to="/post/202" className="post-link">Post #202</Link>
                <Link to="/post/303" className="post-link">Post #303</Link>
            </div>
        </div>
    );
}

function About() {
    return (
        <div className="page-box">
            <h2>About Page</h2>
            <p>This is the About section demonstrating client-side route mounting.</p>
        </div>
    );
}

function Contact() {
    return (
        <div className="page-box">
            <h2>Contact Page</h2>
            <p>Feel free to reach out to us regarding full-stack web development.</p>
        </div>
    );
}

function Dashboard() {
    return (
        <div className="page-box">
            <h2>Dashboard Page</h2>
            <p>Secure administrative and management overview panel.</p>
        </div>
    );
}

// Task 3: Dynamic Route Component
function PostDetail() {
    const { postId } = useParams();
    return (
        <div className="page-box">
            <h2>Post Details</h2>
            <p>You are viewing dynamic post ID: <strong>{postId}</strong></p>
            <Link to="/" className="post-link">&larr; Back to Home</Link>
        </div>
    );
}

// Bonus: 404 Page
function NotFound() {
    return (
        <div className="page-box" style={{ textAlign: "center" }}>
            <h2>404 - Page Not Found</h2>
            <p>The requested route does not exist.</p>
            <Link to="/" className="post-link">Go to Home</Link>
        </div>
    );
}

// Task 2: Navigation Bar Component
function Navbar() {
    return (
        <header>
            <nav>
                <div className="logo">ReactRouter App</div>
                <div className="nav-links">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink>
                </div>
            </nav>
        </header>
    );
}

function App() {
    return (
        <HashRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/post/:postId" element={<PostDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <footer>
                <p>&copy; 2026 Dipanshu Dashore. Built with React Router v6.</p>
            </footer>
        </HashRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
