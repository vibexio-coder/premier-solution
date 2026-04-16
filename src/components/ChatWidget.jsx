import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const queryOptions = [
  "gst registration",
  "income tax registration",
  "gst notice",
  "income tax notice",
  "TDS",
  "legal consultancy",
  "others",
];

// Replace this with the actual WhatsApp number including the country code
const WHATSAPP_NUMBER = "+918610246393";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! What is your name?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState(0); // 0 = name, 1 = mobile, 2 = query, 3 = complete
  const [userData, setUserData] = useState({ name: "", mobile: "", query: "" });
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendText = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setMessages((prev) => [...prev, { text: userMsg, sender: "user" }]);
    setInputValue("");

    // Process logic based on step
    if (step === 0) {
      setUserData((prev) => ({ ...prev, name: userMsg }));
      setStep(1);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Could you please share your mobile number?", sender: "bot" },
        ]);
      }, 500);
    } else if (step === 1) {
      setUserData((prev) => ({ ...prev, mobile: userMsg }));
      setStep(2);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "What is your query?", sender: "bot" },
        ]);
      }, 500);
    }
  };

  const handleSelectQuery = (queryText) => {
    setMessages((prev) => [...prev, { text: queryText, sender: "user" }]);
    setUserData((prev) => ({ ...prev, query: queryText }));
    setStep(3);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Our team will contact you as soon as possible.", sender: "bot" },
      ]);

      // Redirect to WhatsApp directly, bypassing web landing pages 
      // This will trigger the downloaded WhatsApp application on Laptops natively.
      const waMessage = `*New Lead from Website*\n\n*Name:* ${userData.name}\n*Mobile:* ${userData.mobile}\n*Query:* ${queryText}`;
      const encodedMessage = encodeURIComponent(waMessage);
      const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
      
      // The native protocol targets the installed app on both mobile and laptop/desktop.
      const appUrl = `whatsapp://send?phone=${cleanNumber}&text=${encodedMessage}`;
      const webUrl = `https://web.whatsapp.com/send?phone=${cleanNumber}&text=${encodedMessage}`;
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      setTimeout(() => {
        if (isMobile) {
          window.location.href = appUrl;
        } else {
          // On laptop, try to open the native app directly. 
          // Note: If the user doesn't have the desktop app, they can manually visit Web.
          // But since the request is to force the downloaded app, we use the protocol directly.
          window.location.href = appUrl;
          
          // Provide a tiny delayed fallback to web just in case they don't have the app installed
          // (Though modern browsers might still show the permission prompt)
          setTimeout(() => {
            window.open(webUrl, "_blank");
          }, 1500);
        }
      }, 500);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end w-[calc(100%-32px)] sm:w-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-[380px] md:w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden mb-4 flex flex-col border border-gray-100 origin-bottom-right"
            style={{ height: "600px", maxHeight: "80vh" }}
          >
            {/* Header */}
            <div className="bg-[#1f4d4d] text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold poppins text-[16px]">Premier Solution</h3>
                <p className="text-white/80 text-[12px]">We typically reply in minutes</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#f8f9fa] flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-[14px] poppins leading-[1.5] ${
                      msg.sender === "user" 
                        ? "bg-[#496C6B] text-white rounded-br-sm" 
                        : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm drop-shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Query Options */}
              {step === 2 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-2 mt-2"
                >
                  {queryOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelectQuery(opt)}
                      className="bg-white border border-[#496C6B] text-[#496C6B] hover:bg-[#496C6B] hover:text-white text-left px-4 py-2.5 rounded-xl text-[14px] poppins transition-colors duration-200 shadow-sm"
                    >
                      {opt}
                    </button>
                  ))}
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            {step < 2 && (
              <form 
                onSubmit={handleSendText}
                className="p-3 bg-white border-t border-gray-100 flex items-center gap-2"
              >
                <input
                  type={step === 1 ? "tel" : "text"}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={step === 0 ? "Type your name..." : "Type your mobile..."}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 outline-none focus:border-[#496C6B] text-[14px] poppins transition-colors"
                  autoFocus
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="bg-[#1f4d4d] text-white p-2.5 rounded-full hover:bg-[#163838] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send size={16} />
                </button>
              </form>
            )}
            {step === 3 && (
              <div className="p-4 bg-white border-t border-gray-100 text-center text-[13px] text-gray-500 poppins">
                Chat completed. Thank you!
              </div>
            )}
            {step === 2 && (
               <div className="p-3 bg-white border-t border-gray-100 text-center text-[13px] text-gray-500 poppins">
               Please select an option above
             </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-[#1f4d4d] text-white p-4 rounded-full shadow-2xl hover:bg-[#163838] transition-colors focus:outline-none flex items-center justify-center relative"
      >
        <MessageCircle size={28} />
        {!isOpen && step === 0 && messages.length === 1 && (
           <span className="absolute -top-1 -right-1 flex h-4 w-4">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
           </span>
        )}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
