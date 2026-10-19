const { useState } = React;

// Sample Blog Data
const initialPosts = [
    {
        id: 1,
        title: "Understanding React 19 & Modern Component Architecture",
        category: "React",
        excerpt: "An in-depth guide into JSX, functional components, and the power of React 19's optimized rendering engine.",
        date: "Oct 2026",
        readTime: "4 min read"
    },
    {
        id: 2,
        title: "Mastering State with the useState Hook",
        category: "Hooks",
        excerpt: "Why state is the core heartbeat of React applications and how to manage dynamic UI re-renders cleanly.",
        date: "Oct 2026",
        readTime: "5 min read"
    },
    {
        id: 3,
        title: "Lifecycle & Side Effects: The Complete useEffect Guide",
        category: "Hooks",
        excerpt: "Learn how to fetch APIs, clean up timers, and avoid infinite loops using dependency arrays.",
        date: "Oct 2026",
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "Building Production Full Stack APIs with Node & NestJS",
        category: "Backend",
        excerpt: "Structuring robust modular microservices with TypeScript, controllers, and dependency injection.",
        date: "Sep 2026",
        readTime: "7 min read"
    },
    {
        id: 5,
        title: "Modern Tailwind CSS & Component Styling Best Practices",
        category: "Design",
        excerpt: "Crafting beautiful responsive interfaces with design tokens, utility classes, and custom themes.",
        date: "Sep 2026",
        readTime: "3 min read"
    },
    {
        id: 6,
        title: "Git & Collaborative GitHub Workflows for Teams",
        category: "DevOps",
        excerpt: "Branching strategies, meaningful commits, and frictionless pull requests for team collaboration.",
        date: "Aug 2026",
        readTime: "4 min read"
    }
];

// 1. Navbar Component
function Navbar() {
    return (
        <header>
            <nav>
                <div className="nav-brand">
                    <h1>DD Tech Blog</h1>
                    <span>MERN Stack Insights</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

// 2. BlogCard Component
function BlogCard({ post }) {
    return (
        <div className="blog-card">
            <div>
                <span className="card-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
            </div>
            <div className="card-meta">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
            </div>
        </div>
    );
}

// 3. BlogList Component
function BlogList({ posts }) {
    return (
        <div className="blog-grid">
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
}

// 4. Footer Component
function Footer() {
    return (
        <footer>
            <p>&copy; 2026 Dipanshu Dashore. Built with React Components & State.</p>
        </footer>
    );
}

// Main App Component with State-driven filtering
function App() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "React", "Hooks", "Backend", "Design", "DevOps"];

    const filteredPosts = selectedCategory === "All" 
        ? initialPosts 
        : initialPosts.filter(p => p.category === selectedCategory);

    return (
        <div>
            <Navbar />
            <main>
                <div className="hero-banner">
                    <h2>Engineering & Web Development Blog</h2>
                    <p>Curated articles, practical tutorials, and insights on the MERN ecosystem.</p>
                </div>

                <div className="category-filter">
                    {categories.map((cat) => (
                        <button 
                            key={cat} 
                            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <BlogList posts={filteredPosts} />
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
