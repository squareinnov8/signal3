'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Send,
  Sparkles,
  User,
  Check,
  CheckCheck,
  MessageCircle,
  X,
  Paperclip,
  Smile,
  MoreHorizontal,
  Phone,
  Video,
  Bot,
} from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';

// ============================================================================
// Chat Message Types
// ============================================================================

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'agent' | 'ai' | 'system';
  timestamp: string;
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  avatar?: string;
  name?: string;
}

// ============================================================================
// Shared Components
// ============================================================================

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Support Chat Widget Pattern
// ============================================================================

function SupportChatPattern() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Hi there! Welcome to Signal3 support. How can I help you today?", sender: 'agent', timestamp: '2:30 PM', name: 'Sarah' },
    { id: 2, content: "I'm having trouble integrating the Chat component into my project.", sender: 'user', timestamp: '2:31 PM', status: 'read' },
    { id: 3, content: "I'd be happy to help with that! Are you using React or another framework?", sender: 'agent', timestamp: '2:31 PM', name: 'Sarah' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sending',
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev.map(m => m.id === newMessage.id ? { ...m, status: 'read' as const } : m),
        {
          id: prev.length + 1,
          content: "Great question! Let me pull up our documentation on that. One moment...",
          sender: 'agent',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          name: 'Sarah',
        }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-primary-600 px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">
                S
              </div>
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-success-400 border-2 border-primary-600"></span>
            </div>
            <div>
              <h3 className="font-semibold text-white">Sarah from Support</h3>
              <p className="text-sm text-white/80">Online • Typically replies in minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Phone className="h-5 w-5 text-white" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <MoreHorizontal className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender !== 'user' && (
              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold text-sm mr-2 shrink-0">
                {msg.name?.[0]}
              </div>
            )}
            <div className="max-w-[75%]">
              <div
                className={`rounded-2xl px-4 py-2.5 ${
                  msg.sender === 'user'
                    ? 'bg-primary-600 text-white rounded-br-md'
                    : 'bg-white text-gray-900 shadow-sm border border-gray-100 rounded-bl-md'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
              <div className={`flex items-center gap-1 mt-1 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <span className="text-xs text-gray-400">{msg.timestamp}</span>
                {msg.sender === 'user' && msg.status && (
                  <span className="text-primary-500">
                    {msg.status === 'read' ? <CheckCheck className="h-3 w-3" /> : <Check className="h-3 w-3" />}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        {isTyping && <TypingIndicator />}
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Paperclip className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Smile className="h-5 w-5" />
          </button>
          <button
            onClick={handleSend}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// AI Assistant Pattern
// ============================================================================

function AIAssistantPattern() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI assistant powered by Claude. I can help you with:\n\n• Questions about Signal3 components\n• Code examples and best practices\n• Troubleshooting issues\n• Design system guidance\n\nWhat would you like to know?",
      sender: 'ai',
      timestamp: '2:30 PM',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: prev.length + 1,
          content: "That's a great question! Based on the Signal3 design system documentation, here's what I found...\n\nThe Chat component supports multiple variants including `support`, `ai`, `floating`, and `embedded`. Each variant is optimized for different use cases.\n\nWould you like me to show you a code example?",
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">AI Assistant</h3>
              <p className="text-sm text-white/80">Powered by Claude</p>
            </div>
          </div>
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
            Beta
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'ai' && (
              <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center mr-2 shrink-0">
                <Bot className="h-4 w-4 text-violet-600" />
              </div>
            )}
            <div className="max-w-[80%]">
              <div
                className={`rounded-2xl px-4 py-2.5 ${
                  msg.sender === 'user'
                    ? 'bg-primary-600 text-white rounded-br-md'
                    : 'bg-white text-gray-900 shadow-sm border border-gray-100 rounded-bl-md'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{msg.content}</p>
              </div>
              <span className={`text-xs text-gray-400 mt-1 block ${msg.sender === 'user' ? 'text-right' : ''}`}>
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center mr-2 shrink-0">
              <Bot className="h-4 w-4 text-violet-600" />
            </div>
            <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-violet-500 animate-pulse" />
                <span className="text-sm text-gray-500">AI is thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suggested prompts */}
      <div className="border-t border-gray-100 px-4 py-2 bg-gray-50">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['Show code example', 'Explain variants', 'Best practices'].map((prompt) => (
            <button
              key={prompt}
              onClick={() => setInputValue(prompt)}
              className="shrink-0 rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-100"
          />
          <button
            onClick={handleSend}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Floating Widget Pattern
// ============================================================================

function FloatingWidgetPattern() {
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="relative h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
      {/* Mock page content */}
      <div className="p-8">
        <div className="max-w-xl">
          <div className="h-6 w-48 bg-gray-300 rounded mb-6"></div>
          <div className="h-4 w-full bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-4/6 bg-gray-300 rounded mb-6"></div>
          <div className="h-32 w-full bg-gray-300 rounded mb-6"></div>
          <div className="h-4 w-full bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Floating chat widget */}
      {isOpen ? (
        <div className="absolute bottom-4 right-4 w-80 rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Need help?</h3>
                <p className="text-xs text-white/80">We typically reply instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-56 overflow-y-auto p-4 space-y-4 bg-gray-50">
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-bl-md px-4 py-2.5 shadow-sm border border-gray-100 max-w-[85%]">
                <p className="text-sm">Hi there! How can we help you today?</p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-primary-500 focus:outline-none"
              />
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="absolute bottom-4 right-4 h-14 w-14 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 flex items-center justify-center transition-all hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-error-500 text-xs font-bold flex items-center justify-center">
            1
          </span>
        </button>
      )}
    </div>
  );
}

// ============================================================================
// Main Page
// ============================================================================

export default function ChatPatternPage() {
  const [activeVariant, setActiveVariant] = useState<'support' | 'ai' | 'floating'>('support');

  const codeExamples = {
    support: `import { Chat, ChatMessage, ChatHeader, ChatInput } from '@signal3/web';

export function SupportChat() {
  const [messages, setMessages] = useState([]);

  return (
    <Chat variant="support">
      <ChatHeader
        avatar={<Avatar src="/agent.jpg" status="online" />}
        title="Sarah from Support"
        subtitle="Typically replies in minutes"
      />

      <ChatMessages>
        {messages.map(msg => (
          <ChatMessage
            key={msg.id}
            variant={msg.sender === 'user' ? 'outgoing' : 'incoming'}
            avatar={msg.avatar}
            timestamp={msg.timestamp}
            status={msg.status}
          >
            {msg.content}
          </ChatMessage>
        ))}
      </ChatMessages>

      <ChatInput
        onSend={(content) => handleSend(content)}
        placeholder="Type your message..."
        showAttachments
        showEmoji
      />
    </Chat>
  );
}`,
    ai: `import { Chat, ChatMessage, TypingIndicator } from '@signal3/web';

export function AIAssistant() {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <Chat variant="ai">
      <ChatHeader
        icon={<SparklesIcon />}
        title="AI Assistant"
        subtitle="Powered by Claude"
        badge="Beta"
      />

      <ChatMessages>
        {messages.map(msg => (
          <ChatMessage
            key={msg.id}
            variant={msg.sender === 'user' ? 'outgoing' : 'incoming'}
            isAI={msg.sender === 'ai'}
          >
            {msg.content}
          </ChatMessage>
        ))}

        {isTyping && (
          <TypingIndicator icon={<SparklesIcon />}>
            AI is thinking...
          </TypingIndicator>
        )}
      </ChatMessages>

      <SuggestedPrompts
        prompts={['Show code', 'Explain more', 'Best practices']}
        onSelect={setInput}
      />

      <ChatInput
        onSend={handleSend}
        placeholder="Ask me anything..."
      />
    </Chat>
  );
}`,
    floating: `import { ChatWidget, ChatTrigger } from '@signal3/web';

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <ChatTrigger
        onClick={() => setIsOpen(true)}
        position="bottom-right"
        unreadCount={2}
      />

      {/* Chat widget */}
      <ChatWidget
        open={isOpen}
        onClose={() => setIsOpen(false)}
        position="bottom-right"
      >
        <ChatHeader
          title="Need help?"
          subtitle="We typically reply instantly"
          onClose={() => setIsOpen(false)}
        />

        <ChatMessages messages={messages} />

        <ChatInput onSend={handleSend} />
      </ChatWidget>
    </>
  );
}`,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="container-marketing py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/patterns" className="text-gray-500 hover:text-gray-700">
              Patterns
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900">Chat & Messaging</span>
          </nav>
        </div>
      </div>

      <div className="container-marketing py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
              <MessageCircle className="h-6 w-6 text-primary-600" />
            </div>
            <span className="rounded-full bg-warning-50 px-3 py-1 text-sm font-medium text-warning-700 ring-1 ring-inset ring-warning-200">
              Beta
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Chat & Messaging
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Interactive chat interfaces for customer support, AI assistants, and real-time messaging.
            Built following iOS and WhatsApp messaging patterns for familiar user experience.
          </p>
        </div>

        {/* Variant Selector */}
        <div className="mb-8">
          <div className="flex gap-2 border-b border-gray-200 pb-4">
            {[
              { id: 'support', label: 'Support Widget', description: 'Human support chat' },
              { id: 'ai', label: 'AI Assistant', description: 'Claude-powered chat' },
              { id: 'floating', label: 'Floating Widget', description: 'Overlay chat button' },
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveVariant(v.id as typeof activeVariant)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeVariant === v.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Preview</h2>
          <p className="text-gray-600 mb-6">Try sending a message to see the chat in action.</p>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            {activeVariant === 'support' && <SupportChatPattern />}
            {activeVariant === 'ai' && <AIAssistantPattern />}
            {activeVariant === 'floating' && <FloatingWidgetPattern />}
          </div>
        </div>

        {/* Code */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h2>
          <CodeBlock code={codeExamples[activeVariant]} language="tsx" />
        </div>

        {/* Best Practices */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Best Practices</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-success-200 bg-success-50 p-6">
              <h3 className="font-semibold text-success-900 mb-4">Do</h3>
              <ul className="space-y-3 text-sm text-success-800">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 text-success-600 shrink-0" />
                  Show typing indicators to communicate real-time activity
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 text-success-600 shrink-0" />
                  Display message status (sent, delivered, read) for user confidence
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 text-success-600 shrink-0" />
                  Use avatars to humanize conversations
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 text-success-600 shrink-0" />
                  Provide suggested prompts for AI assistants
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 text-success-600 shrink-0" />
                  Keep the floating widget minimizable to not obstruct content
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-error-200 bg-error-50 p-6">
              <h3 className="font-semibold text-error-900 mb-4">Don&apos;t</h3>
              <ul className="space-y-3 text-sm text-error-800">
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 mt-0.5 text-error-600 shrink-0" />
                  Auto-open floating widgets without user interaction
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 mt-0.5 text-error-600 shrink-0" />
                  Hide the close button on floating widgets
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 mt-0.5 text-error-600 shrink-0" />
                  Use the same styling for human and AI messages
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 mt-0.5 text-error-600 shrink-0" />
                  Remove timestamps from messages
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 mt-0.5 text-error-600 shrink-0" />
                  Make message bubbles wider than 80% of the container
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accessibility */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Accessibility</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
              New messages are announced to screen readers as they arrive
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
              Chat input has a clear accessible label
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
              Floating widget traps focus when open
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
              Close button is keyboard accessible with Escape key support
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
              Status changes (typing, delivered) are announced to assistive technology
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
