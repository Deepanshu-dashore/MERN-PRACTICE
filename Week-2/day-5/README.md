# Week 2 – Day 5: Git & GitHub Workflow

## Hands-on Tasks

### Task 1: Initialize Portfolio Repository
```bash
# Navigate to your portfolio folder
cd Week-1/day-6-7

# Initialize Git repository
git init
git add .
git commit -m "Initial Portfolio Commit"
git branch -M main

# Link remote repo and push
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Task 2: Invite a Collaborator
1. Open your repository on **GitHub**.
2. Go to **Settings** &rarr; **Collaborators**.
3. Click **Add people** and enter your peer's GitHub username or email.

### Task 3: Create & Merge a Feature Branch
```bash
# 1. Create and switch to new branch
git checkout -b feature-projects

# 2. Make your edits to HTML/CSS/JS

# 3. Stage and commit changes
git add .
git commit -m "Added projects section"

# 4. Push feature branch to GitHub
git push origin feature-projects

# 5. Open GitHub and create a Pull Request (PR), then merge into 'main'
```
