import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Loader2, Smile, Menu } from 'lucide-react';
import { sendChatMessage, type ChatMessage } from '../../api/chat';

interface DisplayMessage extends ChatMessage {
  id: string;
}

const QUICK_REPLIES = [
  'Giá bao nhiêu?',
  'Mấy mèo dùng được?',
  'Tính năng nổi bật?',
];

const WELCOME_MESSAGE: DisplayMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    'Xin chào! Mình là trợ lý ảo **Petkit Pura Max 2**. Bạn cần tư vấn thông tin gì nào?\n\n- Nhận ngay **Voucher giảm 500k**\n- Cam kết **chính hãng 100%**\n- Bảo hành **24 tháng**',
};

// Helper function to render text with basic Markdown parsing (bold, lists, and newlines)
const renderMessageContent = (content: string) => {
  const lines = content.split('\n');

  return (
    <div className="space-y-1">
      {lines.map((line, lineIdx) => {
        // Handle list item
        const isListItem = line.trim().startsWith('-');
        let textToParse = isListItem ? line.trim().substring(1).trim() : line;

        // Parse **bold** parts
        const parts = [];
        let currentIndex = 0;
        const boldRegex = /\*\*(.*?)\*\*/g;
        let match;

        while ((match = boldRegex.exec(textToParse)) !== null) {
          const matchIndex = match.index;
          if (matchIndex > currentIndex) {
            parts.push(textToParse.substring(currentIndex, matchIndex));
          }
          parts.push(
            <strong key={matchIndex} className="font-extrabold text-brand-yellow font-display">
              {match[1]}
            </strong>
          );
          currentIndex = boldRegex.lastIndex;
        }

        if (currentIndex < textToParse.length) {
          parts.push(textToParse.substring(currentIndex));
        }

        if (isListItem) {
          return (
            <div key={lineIdx} className="flex items-start gap-1.5 pl-1 my-0.5">
              <span className="text-brand-yellow shrink-0 mt-1.5 select-none text-[8px]">•</span>
              <span className="text-[13px]">{parts}</span>
            </div>
          );
        }

        return (
          <p key={lineIdx} className="text-[13px] min-h-[1rem]">
            {parts}
          </p>
        );
      })}
    </div>
  );
};

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState<DisplayMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isLoading) return;

    const userMsg: DisplayMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: messageText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history: ChatMessage[] = messages
        .filter((m) => m.id !== 'welcome')
        .map(({ role, content }) => ({ role, content }));

      const reply = await sendChatMessage(messageText, history);

      const botMsg: DisplayMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: reply,
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: DisplayMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: 'Xin lỗi, mình đang gặp sự cố kết nối. Bạn vui lòng thử lại sau nhé!',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* ── Floating Bubble (closed state) ── */}
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
            
            {/* Pill Tooltip pointing to the circle */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.85, x: 10 }}
                  className="relative flex items-center gap-2 bg-gradient-to-r from-[#ff2f38] to-[#ff5252] pl-3 pr-8 py-2.5 rounded-full shadow-lg shadow-red-500/25 border border-red-500/30"
                >
                  {/* Small avatar inside tooltip */}
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  
                  <span className="text-white text-xs font-bold whitespace-nowrap select-none">
                    Bạn cần hỗ trợ gì?
                  </span>

                  {/* Close mini-button overlapping the top right of pill */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTooltip(false);
                    }}
                    className="absolute -top-1 right-2 w-4 h-4 bg-slate-500/80 hover:bg-slate-600 rounded-full flex items-center justify-center text-white/90 hover:text-white transition shadow-sm"
                    aria-label="Ẩn"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>

                  {/* Small pointing triangle to the right */}
                  <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#ff5252]" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Circular Floating Chat Launcher */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full bg-[#ffeaeb] hover:bg-[#ffd6d8] border-2 border-[#ffccd0] shadow-lg flex items-center justify-center relative transition-colors duration-300 cursor-pointer shrink-0"
              aria-label="Trò chuyện với robot"
            >
              {/* Cute Red Robot Icon inside */}
              <div className="w-11 h-11 rounded-full bg-[#ff2f38] flex items-center justify-center shadow-inner">
                <Bot className="w-6 h-6 text-white" />
              </div>
              
              {/* "..." chat bubble decoration above head */}
              <div className="absolute -top-1.5 right-1 bg-white border border-[#ffccd0] rounded-lg px-1.5 py-0.5 shadow-sm text-[8px] font-black text-[#ff2f38] tracking-widest uppercase">
                •••
              </div>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* ── Chat Window (open state) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-white border border-slate-200 rounded-[2rem] shadow-2xl shadow-black/25 flex flex-col overflow-hidden text-slate-800"
          >
            {/* Header styled exactly like GearVN (Red header, hamburger menu, logo, subtitle) */}
            <div className="px-4 py-3 bg-[#ff2f38] flex items-center gap-3 shrink-0 relative">
              
              {/* Logo / Avatar with V logo representation */}
              <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-black text-white font-display leading-tight">HeliPet</h3>
                <p className="text-[10px] text-white/80 font-sans">
                  Chat với chúng tôi
                </p>
              </div>

              {/* Hamburger menu + Close Button */}
              <div className="flex items-center gap-2">
                <button
                  className="text-white/80 hover:text-white p-1 rounded transition"
                  aria-label="Menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white p-1 rounded transition"
                  aria-label="Đóng chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages container - solid light gray/white background */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-thin scrollbar-thumb-slate-200">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-amber-100 text-amber-600'
                        : 'bg-[#ffeaeb] text-[#ff2f38]'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-4 py-2.5 text-[13px] leading-relaxed shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-[#ff2f38] text-white rounded-2xl rounded-tr-none'
                        : 'bg-white text-slate-800 rounded-2xl rounded-tl-none border border-slate-100'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <p>{msg.content}</p>
                    ) : (
                      renderMessageContent(msg.content)
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#ffeaeb] text-[#ff2f38] flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2 shadow-sm">
                    <Loader2 className="w-3.5 h-3.5 text-[#ff2f38] animate-spin" />
                    <span className="text-xs text-slate-400 font-sans">Đang trả lời...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-4 py-2 bg-slate-50 flex flex-wrap gap-1.5 shrink-0 border-t border-slate-100">
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => handleSend(qr)}
                    className="text-[11px] font-black text-[#ff2f38] border border-[#ffccd0] bg-white px-3 py-1.5 rounded-full hover:bg-[#ffeaeb] transition"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            {/* Input & CareSoft-like branding footer */}
            <div className="p-3 border-t border-slate-200 shrink-0 bg-white">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl px-3 py-0.5">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Nhập nội dung..."
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none py-2.5 font-sans disabled:opacity-50"
                />
                
                {/* Smile icon decoration */}
                <button
                  className="text-slate-400 hover:text-slate-600 transition shrink-0 p-1"
                  aria-label="Biểu tượng cảm xúc"
                >
                  <Smile className="w-5 h-5" />
                </button>

                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-full bg-[#ff2f38] text-white flex items-center justify-center hover:bg-[#e02029] disabled:opacity-30 disabled:hover:bg-[#ff2f38] transition shrink-0"
                  aria-label="Gửi tin nhắn"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
