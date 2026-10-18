const container = document.getElementById("usersContainer");

function renderUsers(users) {
    container.innerHTML = users.map(user => `
        <div class="user-card">
            <img src="${user.picture.large}" alt="${user.name.first}">
            <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <p>${user.email}</p>
        </div>
    `).join("");
}

// Task 1: Fetch single random user
async function loadSingleUser() {
    container.innerHTML = '<div class="loading">Fetching single user...</div>';
    try {
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        renderUsers(data.results);
    } catch (err) {
        container.innerHTML = `<div class="loading">Failed to load user: ${err.message}</div>`;
    }
}

// Task 2: Fetch multiple users in grid
async function loadMultipleUsers(count = 6) {
    container.innerHTML = `<div class="loading">Loading ${count} users...</div>`;
    try {
        const res = await fetch(`https://randomuser.me/api/?results=${count}`);
        const data = await res.json();
        renderUsers(data.results);
    } catch (err) {
        container.innerHTML = `<div class="loading">Failed to load users: ${err.message}</div>`;
    }
}

// Initial load
loadMultipleUsers(6);
