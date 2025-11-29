import React, { useState } from "react";
import { MessageSquare, Brain, Send } from "lucide-react";
import type { ChatDemoProps, ChatMessage } from "../interface/common-data";
import { useNavigate } from "react-router-dom";

const ChatDemo: React.FC<ChatDemoProps> = ({
  title,
  subtitle,
  botName,
  initialMessage,
  placeholder,
  suggestionText,
  aiResponses,
}) => {
  const [chatInput, setChatInput] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: initialMessage },
  ]);

  const handleChatSubmit = (): void => {
    if (!chatInput.trim()) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: chatInput },
    ];
    setMessages(newMessages);
    setChatInput("");

    // Simulate AI response
    setTimeout(() => {
      const response =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: response,
        },
      ]);
    }, 1000);
  };

  return (
    <section
      id="demo"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-gray-400">{subtitle}</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-white/10 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold text-white">{botName}</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                Online
              </span>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
          </div>

          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-black/40">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-md px-5 py-3 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-sm"
                      : "bg-white/5 border border-white/10 text-gray-200 rounded-bl-sm"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-cyan-400 font-medium">
                        AI
                      </span>
                    </div>
                  )}
                  <p className="leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 p-4 bg-black/60">
            <div className="flex space-x-3">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
                placeholder={placeholder}
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500"
              />
              <button
                onClick={handleChatSubmit}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">{suggestionText}</p>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
