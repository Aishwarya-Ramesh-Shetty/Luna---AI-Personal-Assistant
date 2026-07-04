# 🌙 Luna - AI Powered Desktop Assistant

> A privacy-first AI desktop assistant that runs locally on your computer, combining conversational AI, desktop automation, personal memory, file management, and intelligent task execution into a seamless desktop experience.

![Electron](https://img.shields.io/badge/Electron-Desktop-47848F?style=for-the-badge&logo=electron)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?style=for-the-badge&logo=sqlite)
![Ollama](https://img.shields.io/badge/Ollama-Local_AI-black?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

---

# 🌐 Live Demo

**Desktop Application:** *(Coming Soon)*

**Demo Video:** *(Coming Soon)*

---

# 📖 Overview

Luna is an AI-powered desktop assistant designed to provide users with a fast, private, and personalized AI experience directly on their computers.

Unlike cloud-based assistants, Luna leverages locally running open-source language models to keep conversations private while enabling intelligent desktop automation. Users can chat naturally, organize files, summarize documents, launch applications, remember important information, and automate everyday tasks from a single desktop application.

The project focuses on combining conversational AI, desktop integrations, and productivity tools into one unified experience while maintaining complete control over user data.

---

# ✨ Features

## 🤖 AI Chat Assistant

Users can:

* Chat Naturally
* Continue Conversations
* Create Multiple Chats
* View Chat History
* Receive Streaming AI Responses
* Upload Files
* Upload Images
* Markdown & Code Block Support

---

## 🧠 Personal Memory

Luna gradually learns user preferences.

Memory Features:

* Remember User Preferences
* Remember Favorite Applications
* Remember Writing Style
* Remember Important Notes
* Review Stored Memories
* Delete Individual Memories
* Clear Entire Memory

---

## ⚡ Desktop Automation

Luna can perform desktop actions including:

* Open Installed Applications
* Search Local Files
* Organize Downloads Folder
* Rename Files
* Create Notes
* Generate To-Do Lists
* Draft Emails
* Open Websites
* Create Reminders

---

## 📄 Document Assistant

Users can:

* Upload PDFs
* Summarize Documents
* Extract Important Information
* Generate Notes
* Explain Content

---

## 📂 Local File Management

Features include:

* Intelligent File Search
* File Organization
* File Renaming
* Folder Navigation
* Recent File Access

---

## 🔒 Privacy Dashboard

Privacy is one of Luna's core principles.

Users can:

* View Granted Permissions
* Manage Connected Applications
* Review Activity History
* Manage Stored Memories
* Delete Personal Data

---

## 🎨 Personalization

Customize Luna according to your preferences.

Options include:

* Assistant Name
* User Name
* Language Selection
* Theme (Light / Dark)
* Response Length
* AI Personality

---

## 🎤 Voice Support *(Optional)*

Voice capabilities include:

* Speech-to-Text
* Text-to-Speech
* Voice Conversations
* Wake Word Detection

---

# ⚙️ Intelligent Action Pipeline

```text
User Request
      │
      ▼
 Natural Language Processing
      │
      ▼
 Intent Detection
      │
      ▼
Permission Check
      │
      ▼
 Desktop Action
      │
      ▼
AI Response + Task Completion
```

---

# 💻 Desktop Workflow

```text
User
   │
   ▼
Electron Desktop App
   │
   ▼
React Frontend
   │
   ▼
Node.js Backend
   │
   ▼
Local AI (Ollama)
   │
   ▼
Desktop APIs
   │
   ▼
Task Execution
```

---

# 🛠️ Tech Stack

## Desktop Application

* Electron
* React (Vite)
* Tailwind CSS

---

## Backend

* Node.js
* Express.js
* Electron IPC

---

## AI

* Ollama
* Qwen 2.5
* Phi-3 Mini
* GGUF Models

---

## Database

* SQLite

---

## Desktop APIs

* Node.js File System
* Child Process
* Electron IPC

---

# 📂 Project Structure

```text
Luna/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── database/
│   ├── middleware/
│   └── server.js
│
├── electron/
│   ├── main.js
│   ├── preload.js
│   └── ipcHandlers.js
│
└── README.md
```

---

# 🗄️ Local Storage

The application stores data locally.

## Conversations

Stores:

* Chat Messages
* Conversation History
* Attachments
* AI Responses

---

## Memories

Stores:

* User Preferences
* Favorite Applications
* Important Notes
* Assistant Settings

---

## Settings

Stores:

* Theme
* Language
* Assistant Name
* AI Model
* Permissions

---

# 🔄 Application Workflow

1. User launches Luna.
2. Completes initial onboarding.
3. Selects AI model.
4. Starts chatting with the assistant.
5. Luna processes requests using a local AI model.
6. Desktop actions require user permission.
7. Luna executes approved tasks.
8. User preferences are stored locally.
9. Future conversations become personalized.
10. Users can manage memories and permissions anytime.

---

# 🚀 Running Locally

## Clone Repository

```bash
git clone https://github.com/your-username/Luna.git

cd Luna
```

---

## Install Dependencies

```bash
npm install
```

---

## Install Ollama

Download Ollama from

https://ollama.com

Pull a local model

```bash
ollama pull qwen2.5:3b
```

or

```bash
ollama pull phi3
```

---

## Start Ollama

```bash
ollama serve
```

---

## Start Backend

```bash
cd backend

npm install

npm run dev
```

---

## Start Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Run Desktop Application

```bash
npm run electron
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=5000

OLLAMA_BASE_URL=http://localhost:11434

DATABASE_PATH=./database/luna.db
```

---

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 📸 Screenshots

* Welcome Screen
* Onboarding
* AI Chat
* Conversation History
* File Upload
* Desktop Automation
* Memory Dashboard
* Privacy Dashboard
* Settings
* Voice Assistant

*(Add screenshots after implementation.)*

---

# 🔮 Future Enhancements

* 🌐 Multi-language Support
* 🤖 Multiple AI Model Selection
* 📧 Gmail Integration
* 📅 Calendar Integration
* 🎵 Spotify Control
* 🏠 Smart Home Automation
* 📱 Mobile Companion App
* ☁️ Optional Cloud Sync
* 🧩 Plugin Marketplace
* 🔔 Smart Notifications
* 📊 Productivity Analytics
* 🧠 Long-Term Memory

---

# 👩‍💻 Author

**Aishwarya Shetty**

BE Computer Science & Engineering (Data Science)

Full Stack Developer | AI & Desktop Application Enthusiast

Passionate about building intelligent, privacy-focused applications that combine AI, automation, and modern user experiences.

If you found this project helpful, consider giving it a ⭐ on GitHub!
