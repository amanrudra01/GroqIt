const chatDiv = document.getElementById('chat');
const input = document.getElementById('messageInput');
const conversationId = generateUUID();

function appendMessage(role, text) {
  const div = document.createElement('div');
  div.classList.add('message');

  if (role === 'assistant') {
    text = text.replace(/```(.*?)```/gs, (match, code) => {
      const escaped = escapeHTML(code.trim());
      const uid = generateUUID();
      return `
        <pre>
          <button class="copy-btn" data-code-id="${uid}">Copy</button>
          <code id="${uid}">${escaped}</code>
        </pre>`;
    });
  }

  div.innerHTML = `<span class="${role}">${role}:</span><br>${text}`;
  chatDiv.appendChild(div);
  chatDiv.scrollTop = chatDiv.scrollHeight;
}

function escapeHTML(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
}

function sendMessage() {
  const message = input.value.trim();
  if (!message) return;

  appendMessage('user', message);
  input.value = '';

  const loadingDiv = document.createElement('div');
  loadingDiv.classList.add('message', 'assistant', 'loading');
  loadingDiv.textContent = 'assistant: Thinking...';
  chatDiv.appendChild(loadingDiv);
  chatDiv.scrollTop = chatDiv.scrollHeight;

  fetch('http://localhost:8000/chat/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: message,
      role: "user",
      conversation_id: conversationId
    })
  })
  .then(response => response.json())
  .then(data => {
    loadingDiv.remove();
    appendMessage('assistant', data.response);
  })
  .catch(error => {
    loadingDiv.remove();
    appendMessage('assistant', 'Error: ' + error.message);
  });
}

function generateUUID() {
  return 'id-' + Math.random().toString(36).substr(2, 9);
}

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// ✅ Event Delegation for Copy Buttons
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {
    const codeId = e.target.getAttribute("data-code-id");
    const codeElement = document.getElementById(codeId);
    if (codeElement) {
      const code = codeElement.innerText;
      navigator.clipboard.writeText(code).then(() => {
        e.target.innerText = "Copied!";
        setTimeout(() => {
          e.target.innerText = "Copy";
        }, 1500);
      });
    }
  }
});