import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ChatBot from './ChatBot';

export default function ChatBotTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 z-50 flex items-center gap-2 group"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden group-hover:inline-block text-sm font-medium pr-1">
          Book Inspection
        </span>
      </button>

      <ChatBot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
