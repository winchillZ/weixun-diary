import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const AIChatWidget = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'ai',
      content: '你好呀！我是你的 AI 陪伴助手 💜 我注意到你已经连续记录 3 天了，今天感觉怎么样？',
      time: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 模拟 AI 回复
  const generateAIResponse = (userMessage) => {
    const responses = {
      '开心': '太好了！看到你开心我也很高兴 🌟 今天发生了什么好事吗？愿意和我分享吗？',
      '累': '辛苦了！工作一天确实很累。要不要试试泡个热水澡，或者听段轻音乐放松一下？酒精虽然能暂时放松，但休息才是最好的充电方式哦 💪',
      '想喝酒': '我理解你想放松的心情。如果想喝的话，不如先喝一杯水，想想今天为什么要喝酒？如果是因为压力大，我们可以聊聊；如果是为了庆祝，那就小酌一杯吧！记得记录哦 🍷',
      '压力': '压力大是很正常的。你愿意说说是什么让你感到压力吗？有时候倾诉就能缓解很多。我在这里陪着你 💜',
      '睡不着': '失眠真的很烦人。不如试试听一段助眠冥想？或者喝杯热牛奶？避免睡前喝酒哦，虽然能帮你入睡，但会降低睡眠质量 🌙',
      'default': '我听到了 💜 每个人都有自己的故事，如果你愿意，可以继续和我分享。我会一直在这里陪伴你。',
    };

    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('开心') || lowerMessage.includes('高兴')) {
      return responses['开心'];
    } else if (lowerMessage.includes('累') || lowerMessage.includes('疲惫')) {
      return responses['累'];
    } else if (lowerMessage.includes('酒') || lowerMessage.includes('喝')) {
      return responses['想喝酒'];
    } else if (lowerMessage.includes('压力') || lowerMessage.includes('焦虑')) {
      return responses['压力'];
    } else if (lowerMessage.includes('睡不着') || lowerMessage.includes('失眠')) {
      return responses['睡不着'];
    }
    
    return responses['default'];
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      role: 'user',
      content: inputText,
      time: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputText('');
    setIsTyping(true);

    // 模拟 AI 思考和回复
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        role: 'ai',
        content: generateAIResponse(inputText),
        time: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const quickReplies = [
    { emoji: '😊', text: '今天很开心' },
    { emoji: '😔', text: '有点累' },
    { emoji: '🍷', text: '想喝一杯' },
    { emoji: '💪', text: '今天不喝了' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* 顶部标题栏 */}
      <div className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
            >
              <Bot className="w-6 h-6" />
            </motion.div>
            <div>
              <h2 className="font-bold">AI 陪伴助手</h2>
              <p className="text-xs text-white/80">随时在线，温暖陪伴</p>
            </div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
        </div>
      </div>

      {/* 消息列表 */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === 'ai' 
                    ? 'bg-gradient-to-br from-purple-400 to-pink-500' 
                    : 'bg-gradient-to-br from-orange-400 to-red-500'
                }`}>
                  {message.role === 'ai' ? (
                    <Bot className="w-4 h-4 text-white" />
                  ) : (
                    <User className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.role === 'ai'
                    ? 'bg-white shadow-md'
                    : 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md'
                }`}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.role === 'ai' ? 'text-gray-400' : 'text-white/70'
                  }`}>
                    {message.time.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* AI 正在输入 */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white rounded-2xl px-4 py-3 shadow-md">
              <div className="flex space-x-1">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                  className="w-2 h-2 bg-gray-300 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                  className="w-2 h-2 bg-gray-300 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 bg-gray-300 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 快捷回复 */}
      <div className="px-4 py-2 bg-white/50">
        <div className="flex space-x-2 overflow-x-auto">
          {quickReplies.map((reply, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setInputText(reply.text);
              }}
              className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm text-purple-700 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-1">{reply.emoji}</span>
              {reply.text}
            </motion.button>
          ))}
        </div>
      </div>

      {/* 输入框 */}
      <div className="px-4 py-3 bg-white border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="说说你的想法..."
            className="flex-1 bg-gray-50 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <motion.button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              inputText.trim()
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-400'
            }`}
            whileHover={inputText.trim() ? { scale: 1.1 } : {}}
            whileTap={inputText.trim() ? { scale: 0.9 } : {}}
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AIChatWidget;
