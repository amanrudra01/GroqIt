# GroqIt 🧠⚡

**GroqIt** is a lightweight AI chatbot powered by [Groq](https://groq.com/) and [LangChain](https://www.langchain.com/). It provides ultra-fast responses via a terminal-style web interface, ideal for developers and AI enthusiasts.

---

## 🚀 Features

- ⚡ **Powered by Groq LLMs** (blazing-fast responses)
- 🎨 **Clean, terminal-inspired web UI**
- 🔗 **LangChain** integration for conversation management
- 🧠 **Session memory** using ConversationBuffer
- 📦 Built with **FastAPI**, **JavaScript**, and **HTML/CSS**

---

## 📁 Project Structure
```
GroqIt/
  ├── app.py             # FastAPI backend
  ├── index.html         # Frontend interface
  ├── script.js          # Frontend logic
  ├── styles.css         # Chat UI styling
  ├── requirement.txt    # Python dependencies
  └── .env               # API key config
 
```

---

## 🔧 Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/amanrudra01/GroqIt.git
cd groqit
```
2.	**Install Python dependencies**
```
pip install -r requirement.txt
```

3.	**Set up your .env file**
```
GROQ_API_KEY=your_groq_api_key_here
```
4.	**Run the FastAPI server**
```
uvicorn app:app --reload
```
5.	**Open index.html in your browser to chat!**

---

🌐 Example Prompt

“What is LangChain and how does it work?”

---

📄 License

MIT License © 2025 Aman Chand

---
🙌 Credits

Built using:
	•	Groq
	•	LangChain
	•	FastAPI




