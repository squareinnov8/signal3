'use client';

import { useState } from 'react';
import { ChevronDown, Search, Menu, Bell, User, Sun, Database, Shield, Building, Users, BarChart3, Zap, Puzzle, BookOpen, FileText, Video, Send, Sparkles, Check, CheckCheck, MessageCircle, X, Settings, CreditCard, Key, HelpCircle, LogOut } from 'lucide-react';

// Account dropdown menu items for navbar preview
const accountMenuItems = [
  { name: 'My Profile', href: '#', icon: User },
  { name: 'Account Settings', href: '#', icon: Settings },
  { name: 'Billing & Subscription', href: '#', icon: CreditCard },
  { name: 'API Keys', href: '#', icon: Key },
  { name: 'Team Members', href: '#', icon: Users },
  { divider: true },
  { name: 'Help Center', href: '#', icon: HelpCircle },
  { name: 'Documentation', href: '#', icon: BookOpen },
  { divider: true },
  { name: 'Sign Out', href: '#', icon: LogOut, danger: true },
];

interface ComponentPreviewProps {
  componentName: string;
}

export function ComponentPreview({ componentName }: ComponentPreviewProps) {
  const [variant, setVariant] = useState('simple');
  const [megamenuOpen, setMegamenuOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  // Render different previews based on component name
  const renderPreview = () => {
    switch (componentName.toLowerCase()) {
      case 'navbar':
        return (
          <div className="w-full space-y-6">
            {/* Variant selector */}
            <div className="flex gap-2 border-b border-gray-200 pb-4">
              {['simple', 'megamenu', 'developer'].map((v) => (
                <button
                  key={v}
                  onClick={() => { setVariant(v); setMegamenuOpen(false); }}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    variant === v
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>

            {/* Simple Navbar */}
            {variant === 'simple' && (
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-8">
                    <div className="text-xl font-bold text-primary-600">Logo</div>
                    <nav className="hidden md:flex items-center gap-6">
                      <a href="#" className="text-sm font-medium text-gray-900">Products</a>
                      <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Solutions</a>
                      <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
                      <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Resources</a>
                    </nav>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">Sign in</button>
                    <button className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700">
                      Get Started
                    </button>
                    <button className="md:hidden p-2">
                      <Menu className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Megamenu Navbar */}
            {variant === 'megamenu' && (
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-8">
                    <div className="text-xl font-bold text-primary-600">Logo</div>
                    <nav className="hidden md:flex items-center gap-6">
                      <div className="relative">
                        <button
                          onClick={() => setMegamenuOpen(!megamenuOpen)}
                          className="flex items-center gap-1 text-sm font-medium text-gray-900"
                        >
                          Products
                          <ChevronDown className={`h-4 w-4 transition-transform ${megamenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
                      <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Docs</a>
                    </nav>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Account Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                        className="flex items-center gap-1.5"
                      >
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <span className="text-xs font-semibold text-white">JD</span>
                        </div>
                        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${accountDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {accountDropdownOpen && (
                        <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                          {/* User Info Header */}
                          <div className="border-b border-gray-100 px-4 pb-3 pt-1">
                            <p className="text-sm font-medium text-gray-900">John Doe</p>
                            <p className="text-xs text-gray-500">john.doe@company.com</p>
                          </div>

                          {/* Menu Items */}
                          <div className="py-1">
                            {accountMenuItems.map((item, index) =>
                              item.divider ? (
                                <div key={index} className="my-1 border-t border-gray-100" />
                              ) : (
                                <a
                                  key={item.name}
                                  href={item.href || '#'}
                                  className={`flex items-center gap-2 px-4 py-2 text-sm ${
                                    item.danger
                                      ? 'text-red-600 hover:bg-red-50'
                                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                  }`}
                                >
                                  {item.icon && <item.icon className="h-4 w-4" />}
                                  {item.name}
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Megamenu dropdown */}
                {megamenuOpen && (
                  <div className="border-t border-gray-200 bg-white p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Platform</h4>
                        <div className="space-y-3">
                          <a href="#" className="flex items-start gap-3 rounded-lg p-2 hover:bg-gray-50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                              <Database className="h-5 w-5 text-primary-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">Data Hub</p>
                              <p className="text-sm text-gray-500">Centralized data management</p>
                            </div>
                          </a>
                          <a href="#" className="flex items-start gap-3 rounded-lg p-2 hover:bg-gray-50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                              <Shield className="h-5 w-5 text-primary-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">Security Suite</p>
                              <p className="text-sm text-gray-500">Enterprise-grade protection</p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Solutions</h4>
                        <div className="space-y-3">
                          <a href="#" className="flex items-start gap-3 rounded-lg p-2 hover:bg-gray-50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success-50">
                              <Building className="h-5 w-5 text-success-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">Enterprise</p>
                              <p className="text-sm text-gray-500">For large organizations</p>
                            </div>
                          </a>
                          <a href="#" className="flex items-start gap-3 rounded-lg p-2 hover:bg-gray-50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success-50">
                              <Users className="h-5 w-5 text-success-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">Teams</p>
                              <p className="text-sm text-gray-500">For growing teams</p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <span className="text-xs font-semibold text-primary-600">NEW</span>
                        <h4 className="mt-2 font-semibold text-gray-900">AI Features</h4>
                        <p className="mt-1 text-sm text-gray-600">Explore our new AI-powered capabilities</p>
                        <button className="mt-3 text-sm font-medium text-primary-600 hover:text-primary-700">
                          Learn more →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Developer Navbar */}
            {variant === 'developer' && (
              <div className="rounded-lg border border-gray-200 overflow-hidden">
                {/* Top bar */}
                <div className="bg-gray-900 px-6 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-xs text-gray-400 hover:text-white">Status</a>
                    <a href="#" className="text-xs text-gray-400 hover:text-white">Changelog</a>
                    <a href="#" className="text-xs text-gray-400 hover:text-white">Support</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-1 text-gray-400 hover:text-white">
                      <Sun className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-white relative">
                      <Bell className="h-4 w-4" />
                      <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-error-500"></span>
                    </button>
                    {/* Account Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                        className="flex items-center gap-1.5"
                      >
                        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <span className="text-[10px] font-semibold text-white">JD</span>
                        </div>
                        <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform ${accountDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {accountDropdownOpen && (
                        <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                          {/* User Info Header */}
                          <div className="border-b border-gray-100 px-4 pb-3 pt-1">
                            <p className="text-sm font-medium text-gray-900">John Doe</p>
                            <p className="text-xs text-gray-500">john.doe@company.com</p>
                          </div>

                          {/* Menu Items */}
                          <div className="py-1">
                            {accountMenuItems.map((item, index) =>
                              item.divider ? (
                                <div key={index} className="my-1 border-t border-gray-100" />
                              ) : (
                                <a
                                  key={item.name}
                                  href={item.href || '#'}
                                  className={`flex items-center gap-2 px-4 py-2 text-sm ${
                                    item.danger
                                      ? 'text-red-600 hover:bg-red-50'
                                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                  }`}
                                >
                                  {item.icon && <item.icon className="h-4 w-4" />}
                                  {item.name}
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Main navbar */}
                <div className="bg-white px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <div className="text-xl font-bold text-primary-600">DevDocs</div>
                    <nav className="hidden md:flex items-center gap-6">
                      <a href="#" className="text-sm font-medium text-gray-900">Documentation</a>
                      <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">API Reference</a>
                      <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Guides</a>
                      <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Community</a>
                    </nav>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm text-gray-500">
                      <Search className="h-4 w-4" />
                      <span>Search docs...</span>
                      <kbd className="ml-2 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-medium text-gray-600">⌘K</kbd>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Variant description */}
            <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
              {variant === 'simple' && (
                <p><strong>Simple Navbar:</strong> Basic navigation with links and CTA buttons. Best for landing pages, simple sites, and dashboards.</p>
              )}
              {variant === 'megamenu' && (
                <p><strong>Megamenu Navbar:</strong> Full-width dropdown menus with columns and featured content. Click &quot;Products&quot; to see the megamenu. Best for marketing sites and enterprise products.</p>
              )}
              {variant === 'developer' && (
                <p><strong>Developer Navbar:</strong> Documentation-focused with top utility bar, search command, and theme toggle. Best for API docs and developer portals.</p>
              )}
            </div>
          </div>
        );

      case 'chat':
        return <ChatPreview />;

      case 'button':
        return (
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700">
              Primary
            </button>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
              Secondary
            </button>
            <button className="rounded-lg px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50">
              Tertiary
            </button>
            <button className="rounded-lg bg-error-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-error-700">
              Destructive
            </button>
          </div>
        );

      case 'badge':
        return (
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200">
              Default
            </span>
            <span className="inline-flex items-center rounded-md bg-primary-50 px-2.5 py-0.5 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-200">
              Primary
            </span>
            <span className="inline-flex items-center rounded-md bg-success-50 px-2.5 py-0.5 text-sm font-medium text-success-700 ring-1 ring-inset ring-success-200">
              Success
            </span>
            <span className="inline-flex items-center rounded-md bg-warning-50 px-2.5 py-0.5 text-sm font-medium text-warning-700 ring-1 ring-inset ring-warning-200">
              Warning
            </span>
            <span className="inline-flex items-center rounded-md bg-error-50 px-2.5 py-0.5 text-sm font-medium text-error-700 ring-1 ring-inset ring-error-200">
              Error
            </span>
          </div>
        );

      case 'input':
        return (
          <div className="w-full max-w-sm space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm shadow-sm placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
              <p className="mt-1.5 text-sm text-gray-500">
                We&apos;ll never share your email.
              </p>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full rounded-lg border border-error-300 px-3.5 py-2.5 text-sm shadow-sm placeholder:text-gray-400 focus:border-error-500 focus:outline-none focus:ring-2 focus:ring-error-100"
              />
              <p className="mt-1.5 text-sm text-error-600">
                Password must be at least 8 characters.
              </p>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-gray-500">
            Preview not available for this component.
          </div>
        );
    }
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="flex min-h-[200px] items-center justify-center p-8">
        {renderPreview()}
      </div>
      <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 rounded-b-xl">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Interactive preview</span>
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            View code
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Chat Preview Component
// ============================================================================

interface ChatMessage {
  id: number;
  content: string;
  sender: 'user' | 'agent' | 'ai';
  timestamp: string;
  status?: 'sending' | 'sent' | 'delivered' | 'read';
}

function ChatPreview() {
  const [variant, setVariant] = useState<'support' | 'ai' | 'floating'>('support');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, content: "Hi there! How can I help you today?", sender: 'agent', timestamp: '2:30 PM' },
    { id: 2, content: "I have a question about my account settings.", sender: 'user', timestamp: '2:31 PM', status: 'read' },
    { id: 3, content: "Of course! I'd be happy to help with your account settings. What specifically would you like to know?", sender: 'agent', timestamp: '2:31 PM' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [widgetOpen, setWidgetOpen] = useState(true);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: ChatMessage = {
      id: messages.length + 1,
      content: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sending',
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate response
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev.map(m => m.id === newMessage.id ? { ...m, status: 'read' as const } : m),
        {
          id: prev.length + 1,
          content: variant === 'ai'
            ? "I understand you're asking about that. Let me help you find the right information..."
            : "Thanks for your message! Let me look into that for you.",
          sender: variant === 'ai' ? 'ai' : 'agent',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const aiMessages: ChatMessage[] = [
    { id: 1, content: "Hello! I'm your AI assistant powered by Claude. I can help you with:\n\n• Product questions\n• Technical support\n• Documentation\n\nWhat would you like to know?", sender: 'ai', timestamp: '2:30 PM' },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Variant selector */}
      <div className="flex gap-2 border-b border-gray-200 pb-4">
        {[
          { id: 'support', label: 'Support Chat' },
          { id: 'ai', label: 'AI Assistant' },
          { id: 'floating', label: 'Floating Widget' },
        ].map((v) => (
          <button
            key={v.id}
            onClick={() => {
              setVariant(v.id as typeof variant);
              setWidgetOpen(true);
            }}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              variant === v.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Support Chat */}
      {variant === 'support' && (
        <div className="mx-auto max-w-md rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 px-4 py-3 flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-success-400 border-2 border-primary-600"></span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Support Team</h3>
              <p className="text-xs text-white/80">Online • Typically replies in minutes</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${msg.sender === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`rounded-2xl px-4 py-2 ${
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
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
              <button
                onClick={handleSend}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Assistant */}
      {variant === 'ai' && (
        <div className="mx-auto max-w-md rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">AI Assistant</h3>
              <p className="text-xs text-white/80">Powered by Claude</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {(messages.length > 3 ? messages : aiMessages).map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%]`}>
                  <div
                    className={`rounded-2xl px-4 py-2 ${
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
                <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-violet-500 animate-pulse" />
                    <span className="text-sm text-gray-500">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-100"
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
      )}

      {/* Floating Widget */}
      {variant === 'floating' && (
        <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
          {/* Mock page content */}
          <div className="p-6">
            <div className="h-4 w-32 bg-gray-300 rounded mb-4"></div>
            <div className="h-3 w-full bg-gray-300 rounded mb-2"></div>
            <div className="h-3 w-3/4 bg-gray-300 rounded mb-4"></div>
            <div className="h-20 w-full bg-gray-300 rounded"></div>
          </div>

          {/* Floating chat widget */}
          {widgetOpen ? (
            <div className="absolute bottom-4 right-4 w-80 rounded-xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-primary-600 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Chat with us</h3>
                    <p className="text-xs text-white/80">We reply instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setWidgetOpen(false)}
                  className="p-1 hover:bg-white/10 rounded"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
              </div>

              {/* Messages */}
              <div className="h-48 overflow-y-auto p-3 space-y-3 bg-gray-50">
                <div className="flex justify-start">
                  <div className="bg-white rounded-xl rounded-bl-md px-3 py-2 shadow-sm border border-gray-100 max-w-[85%]">
                    <p className="text-sm">👋 Hi! How can we help?</p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 p-2 bg-white">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 rounded-full border border-gray-300 px-3 py-1.5 text-sm focus:border-primary-500 focus:outline-none"
                  />
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700">
                    <Send className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setWidgetOpen(true)}
              className="absolute bottom-4 right-4 h-14 w-14 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 flex items-center justify-center transition-transform hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-error-500 text-xs font-bold flex items-center justify-center">2</span>
            </button>
          )}
        </div>
      )}

      {/* Variant description */}
      <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
        {variant === 'support' && (
          <p><strong>Support Chat:</strong> Full-featured chat with avatars, typing indicators, read receipts, and real-time messaging. Try sending a message!</p>
        )}
        {variant === 'ai' && (
          <p><strong>AI Assistant:</strong> Chat interface optimized for AI interactions with streaming-style responses and assistant branding. Ideal for Claude-powered support.</p>
        )}
        {variant === 'floating' && (
          <p><strong>Floating Widget:</strong> Minimizable chat that overlays page content. Click the chat bubble to open/close. Shows unread badge when minimized.</p>
        )}
      </div>
    </div>
  );
}
