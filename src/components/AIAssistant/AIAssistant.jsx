import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './AIAssistant.scss';

const AgentAvatar = () => (
  <svg className="agent-avatar" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <path d="M32 16V9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="32" cy="7" r="4" fill="currentColor" />
    <rect x="9" y="17" width="46" height="37" rx="15" fill="#111816" stroke="currentColor" strokeWidth="2" />
    <rect x="16" y="25" width="32" height="18" rx="8" fill="#269af9" fillOpacity=".18" />
    <path d="M23 32v4m18-4v4" stroke="#a8d8ff" strokeWidth="4" strokeLinecap="round" />
    <path d="M27 46h10" stroke="#a8d8ff" strokeWidth="3" strokeLinecap="round" />
    <path d="M5 30v10m54-10v10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Troy's professional AI assistant. I'm here to answer questions about his background, experience, skills, and projects."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const suggestionQuestions = [
    "What experience does Troy have with .NET?",
    "What automation tools does Troy know?",
    "Has Troy worked with AI or OpenAI?",
    "What projects has Troy built?",
    "Has Troy Worked with Azure OpenAI or Foundry?"
  ];

  const handleSuggestionClick = (question) => {
    setInputValue(question);
    handleSendMessage(question);
  };

  const handleSendMessage = async (messageText = inputValue) => {
    const trimmedMessage = messageText.trim();
    if (!trimmedMessage || isLoading) return;

    setError('');
    setInputValue('');
    setIsLoading(true);

    // Add user message
    const newMessages = [...messages, { role: 'user', content: trimmedMessage }];
    setMessages(newMessages);

    try {
      // Call Azure OpenAI API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = data.message;

      setMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
    } catch (err) {
      console.error('Error calling AI:', err);
      setError('Sorry, I encountered an error. Please try again.');
      // Remove the user message if there was an error
      setMessages(messages);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className={`ai-chat-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        ref={toggleRef}
        aria-label={isOpen ? 'Close Ask About Troy' : 'Ask About Troy'}
        aria-expanded={isOpen}
        aria-controls="troy-assistant-panel"
        title={isOpen ? 'Close assistant' : 'Ask About Troy'}
      >
        {isOpen ? '✕' : <AgentAvatar />}
        {!isOpen && <span className="pulse-ring"></span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window" id="troy-assistant-panel" role="dialog" aria-label="Ask About Troy" onKeyDown={event => { if(event.key === 'Escape') { setIsOpen(false); toggleRef.current?.focus(); } }}>
          {/* Header */}
          <div className="chat-header">
            <div className="header-content">
              <span className="ai-icon"><AgentAvatar /></span>
              <div>
                <h3>Ask About Troy</h3>
                <p>Powered by Azure AI Foundry</p>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="suggestions-container">
              <p className="suggestions-label">Try asking:</p>
              <div className="suggestions">
                {suggestionQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="suggestion-btn"
                    onClick={() => handleSuggestionClick(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {/* Messages Container */}
          <div className="chat-messages" ref={chatContainerRef} role="log" aria-live="polite" aria-label="Conversation">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.role}`}>
                <div className="message-avatar">
                  {message.role === 'assistant' ? <AgentAvatar /> : '👤'}
                </div>
                <div className="message-content">
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="message assistant typing">
                <div className="message-avatar"><AgentAvatar /></div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="chat-input-container">
            <input
              type="text"
              ref={inputRef}
              aria-label="Ask about Troy's experience"
              className="chat-input"
              placeholder="Ask about Troy's experience..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button
              className="send-button"
              aria-label="Send question"
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputValue.trim()}
            >
              <span>➤</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
