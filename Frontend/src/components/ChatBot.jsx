import { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const { data } = await axios.post("http://localhost:5000/api/chatbot/ask", {
        message: input,
      });

      const botMessage = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, I couldn't respond right now." },
      ]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Chat with AI 🧠"}
      </button>

      {open && (
        <div className="mt-2 w-80 h-96 bg-gray-50 border border-black rounded-lg shadow-lg flex flex-col">
          {/* Chat Area */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-green-100 text-left"
                }`}
              >
                <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-2 border-t border-black flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border border-gray-400 rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
