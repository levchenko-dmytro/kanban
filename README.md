# GitHub Kanban Board

A **Kanban-style board** for managing GitHub issues, built with **React 18**, **TypeScript**, and **Chakra UI**. Supports **drag-and-drop**, **state persistence LocalStorage**, and integration with GitHub's API to fetch repository issues.

## 🚀 Features

- 📌 **Fetch GitHub Issues**: Enter a repository URL to load open issues.
- 🖱️ **Drag & Drop**: Move issues between columns using `@dnd-kit`.
- 💾 **Persistent State**: Saves issues in **local storage** so your changes remain after refresh.
- 🎨 **Modern UI**: Styled with Chakra UI and Bootstrap for a clean look.
- 🔍 **Real-time GitHub Data**: Displays repo info like stars and issue counts.

## 🛠️ Tech Stack

- **Node version: 20+**
- **React 18** + TypeScript
- **Chakra UI**
- **Redux Toolkit** (for state management)
- **@dnd-kit** (for drag-and-drop functionality)
- **Local Storage** (for persistence)
- **GitHub API** (for fetching issues and repo metadata)

## 📦 Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/levchenko-dmytro/kanban.git

# Navigate into the project
cd kanban

# Install dependencies
npm install  # or yarn install
```

## ▶️ Usage

Start the development server:

```bash
npm run dev  # or yarn dev
```

Then, open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ How It Works

1. **Enter a GitHub repo URL** (e.g., `https://github.com/facebook/react`).
2. **Load Issues**: The app fetches open issues via the GitHub API.
3. **Drag and Drop Issues** between columns (`To Do`, `In Progress`, `Done`).
4. **Data Persistence**: Issue positions are saved in **Local Storage**.
5. **Refresh the page** and see your updates retained!

## [Demo](https://levchenko-dmytro.github.io/kanban/)

## 📄 License

This project is **open-source** under the MIT License.

---

💡 **Contributions are welcome!** Feel free to fork this repo and submit pull requests. 🚀

