// Task 1: Header Component
function Header() {
    return (
        <header>
            <h1>My React Modular App</h1>
        </header>
    );
}

// Task 1: Footer Component
function Footer() {
    return (
        <footer>
            <p>&copy; 2026 Dipanshu Dashore. Built with React Components.</p>
        </footer>
    );
}

// Task 2: Greeting Component with Props
function Greeting(props) {
    return (
        <div className="greeting-item">
            <h4>Hello, {props.name}! 👋</h4>
            <p>You are mastering <strong>{props.topic}</strong> today.</p>
        </div>
    );
}

// Task 3: ProfileCard Component with Props
function ProfileCard({ name, role, bio }) {
    return (
        <div className="profile-card">
            <h4>{name}</h4>
            <div className="role">{role}</div>
            <p>{bio}</p>
        </div>
    );
}

// Main App Component
function App() {
    return (
        <div>
            <Header />
            <main>
                <div className="section-box">
                    <h3>Task 2: Dynamic Props (Greeting)</h3>
                    <div className="greetings-list">
                        <Greeting name="Priya" topic="React Components" />
                        <Greeting name="Rohan" topic="JSX Expressions & Props" />
                    </div>
                </div>

                <div className="section-box">
                    <h3>Task 3: Reusable Profile Cards</h3>
                    <div className="cards-container">
                        <ProfileCard 
                            name="Dipanshu Dashore" 
                            role="MERN Stack Developer" 
                            bio="Building scalable web apps with React and Node.js." 
                        />
                        <ProfileCard 
                            name="Aman Sharma" 
                            role="Frontend Engineer" 
                            bio="Passionate about UI/UX and modern JavaScript." 
                        />
                        <ProfileCard 
                            name="Sneha Patel" 
                            role="Backend Developer" 
                            bio="Specialized in REST APIs and PostgreSQL database." 
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
