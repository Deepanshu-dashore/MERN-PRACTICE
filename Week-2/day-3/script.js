// Task 1: Simulate API Call with setTimeout
function runFakeApi() {
    const out1 = document.getElementById("out1");
    out1.innerText = "Fetching user details...";
    setTimeout(() => {
        out1.innerText = "User data received ✅";
    }, 1500);
}

// Task 2: Promise Example
function runPromise() {
    const out2 = document.getElementById("out2");
    out2.innerText = "Connecting to network...";

    const simulateFetch = new Promise((resolve, reject) => {
        const isOnline = Math.random() > 0.1; // 90% success rate
        setTimeout(() => {
            if (isOnline) resolve("Data fetched successfully! 🎉");
            else reject("Network error: Failed to connect ❌");
        }, 1200);
    });

    simulateFetch
        .then(msg => { out2.innerText = msg; })
        .catch(err => { out2.innerText = err; });
}

// Task 3: Async/Await with Fetch (JSONPlaceholder)
async function loadPosts() {
    const out3 = document.getElementById("out3");
    out3.innerText = "Loading posts...";
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
        const posts = await res.json();
        out3.innerHTML = posts.map(p => `• <b>${p.title}</b>`).join("<br>");
    } catch (err) {
        out3.innerText = "Error loading posts: " + err.message;
    }
}

// Mini Challenge: Weather Fetcher
async function fetchWeather() {
    const out4 = document.getElementById("out4");
    out4.innerText = "Fetching weather for Delhi (28.61° N, 77.23° E)...";

    try {
        const url = "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true";
        const res = await fetch(url);
        const data = await res.json();
        const { temperature, windspeed } = data.current_weather;
        out4.innerHTML = `Current Temp: <b>${temperature}°C</b><br>Wind Speed: <b>${windspeed} km/h</b>`;
    } catch (err) {
        out4.innerText = "Error fetching weather data: " + err.message;
    }
}
