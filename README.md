# 🌙 Luna - AI Desktop Assistant

> **A privacy-first, AI-powered desktop assistant that runs locally on your computer.**

Luna is an intelligent desktop companion designed to help users automate everyday tasks, manage files, remember preferences, and interact naturally using a locally running AI model. Unlike traditional cloud-based assistants, Luna prioritizes privacy by performing AI inference directly on the user's machine whenever possible.

---

## ✨ Features

### 🤖 AI Chat

* Natural conversational interface
* Streaming AI responses
* Multi-turn conversations
* Conversation history
* Markdown & code block support

### 🧠 Personal Memory

* Remembers user preferences
* Stores important notes
* Personalized conversations
* View, edit, or delete memories anytime

### 📂 File Assistant

* Search local files
* Summarize PDF documents
* Organize Downloads folder
* Rename files intelligently
* Create notes from documents

### ⚡ Desktop Automation

* Launch installed applications
* Generate to-do lists
* Create reminders
* Open websites
* Draft emails
* Perform desktop actions with user permission

### 🔒 Privacy First

* Local AI processing using open-source models
* Permission-based desktop access
* No unnecessary cloud dependency
* Privacy dashboard for managing permissions and stored data

### 🎨 Personalization

* Light & Dark themes
* Custom assistant name
* Preferred language
* Adjustable response length
* Memory management

### 🎤 Voice Support *(Optional)*

* Speech-to-text
* Text-to-speech
* Voice conversations

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Electron
* Tailwind CSS

### Backend

* Node.js
* Express.js

### AI

* Ollama
* Qwen 2.5 / Phi-3 Mini (Local LLM)

### Database

* SQLite

### Desktop APIs

* Electron IPC
* Node.js File System

---

## 📁 Project Structure

```text
Luna/
├── electron/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── database/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   └── utils/
├── public/
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/luna-desktop-assistant.git
cd luna-desktop-assistant
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Ollama

Download and install Ollama from:

https://ollama.com

Pull the local AI model:

```bash
ollama pull qwen2.5:3b
```

or

```bash
ollama pull phi3
```

### 4. Start Ollama

```bash
ollama serve
```

### 5. Run the Application

```bash
npm run dev
```

### 6. Build Desktop Application

```bash
npm run build
```

The application will be packaged as a Windows executable.

---

## 📸 Screens

* Welcome Screen
* AI Chat
* Conversation History
* Memory Dashboard
* Desktop Tasks
* Privacy Dashboard
* Settings

---

## 🔄 Workflow

```text
User
   │
   ▼
React + Electron
   │
   ▼
Express Backend
   │
   ▼
Ollama (Local LLM)
   │
   ▼
Desktop Actions & AI Response
```

---

## 🎯 Example Commands

* Open Spotify
* Find my resume
* Summarize this PDF
* Organize my Downloads folder
* Create a reminder for tomorrow
* Draft an email
* Generate meeting notes

---

## 🔐 Privacy

Luna is designed with privacy as its core principle.

* AI inference runs locally whenever possible.
* Users control all desktop permissions.
* Personal memories can be viewed or deleted at any time.
* Sensitive data remains on the user's device.

---

## 📦 Future Improvements

* Voice activation
* Wake-word detection
* Smart home integration
* Calendar & Email synchronization
* Plugin ecosystem
* Multi-model AI support

---

## 👩‍💻 Author

**Aishwarya Shetty**

Computer Science Engineering (Data Science) Student

Passionate Full-Stack Developer building AI-powered applications focused on productivity, automation, and user experience.

---

## 📄 License

This project was developed as part of the **Luna Desktop AI Assistant Hackathon** and is intended for educational and demonstration purposes.
