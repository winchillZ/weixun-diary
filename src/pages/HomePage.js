import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wine, Sparkles, MessageCircle, TrendingUp, Heart, Plus, ChevronRight, 
  Moon, Sun, Bot, Send, Coffee, Target, Award, Zap
} from 'lucide-react';

const HomePage = ({ drinkRecords, onNavigate }) => {
  const [currentTip, setCurrentTip] = useState(0);
  const [aiMessage, setAiMessage] = useState('');
  const [showAIMessage, setShowAIMessage] = useState(false);

  const today = new Date();
  const dateStr = today.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' });

  const recentRecords = drinkRecords.slice(0, 3);
  const totalDrinksThisWeek = drinkRecords.filter(r => {
    const recordDate = new Date(r.date);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return recordDate >= weekAgo;
  }).reduce((sum, r) => sum + r.amount, 0);

  // AI 每日关怀消息
  const aiDailyMessages = [
    "嗨！今天是周五，我注意到你最近周五都喜欢喝一杯放松。要不要试试无酒精鸡尾酒？同样美味，明天会更轻松 🌟",
    "下午好！你已经连续 3 天没喝酒了，真棒！保持这个节奏，身体会感谢你的 💪",
    "晚上好！今天心情怎么样？如果你想聊聊，我随时在这里陪伴你 💜",
    "新的一天！记得多喝水哦，保持身体水分平衡，今晚会更享受微醺时刻 🌙",
  ];

  // AI 智能洞察
  const aiInsights = [
    { icon: Target, title: "目标达成", value: "85%", desc: "本周饮酒控制目标", color: "from-green-400 to-teal-500" },
    { icon: TrendingUp, title: "模式发现", value: "周五", desc: "你的高饮酒日", color: "from-orange-400 to-red-500" },
    { icon: Heart, title: "情绪关联", value: "放松", desc: "主要饮酒情绪", color: "from-purple-400 to-pink-500" },
  ];

  // 每日小贴士轮播
  const dailyTips = [
    "💡 小贴士：每杯酒之间喝一杯水，可以减少次日的宿醉感",
    "💡 小贴士：细品慢饮，享受每一口，减少饮酒量的同时提升体验",
    "💡 小贴士：记录饮酒时的情绪，你会发现自己真实的饮酒动机",
    "💡 小贴士：尝试无酒精替代品，同样可以享受社交氛围",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % dailyTips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // 随机显示 AI 消息
    const timer = setTimeout(() => {
      setAiMessage(aiDailyMessages[Math.floor(Math.random() * aiDailyMessages.length)]);
      setShowAIMessage(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* 顶部英雄区域 */}
      <div className="px-6 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 时间和问候 */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{dateStr}</p>
                <h1 className="text-2xl font-bold gradient-text">早上好，探索者</h1>
              </div>
            </div>
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <Moon className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* AI 每日关怀卡片 */}
          <AnimatePresence>
            {showAIMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="card bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white mb-6 shadow-xl"
              >
                <div className="flex items-start space-x-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Bot className="w-8 h-8 mt-1" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold">AI 小助手</h3>
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <p className="text-sm leading-relaxed">{aiMessage}</p>
                    <div className="flex space-x-2 mt-3">
                      <motion.button 
                        className="px-4 py-1.5 bg-white/20 rounded-full text-xs backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onNavigate('healing')}
                      >
                        和 AI 聊聊
                      </motion.button>
                      <motion.button 
                        className="px-4 py-1.5 bg-white/20 rounded-full text-xs backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowAIMessage(false)}
                      >
                        知道了
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 主操作区 - 快速记录 + AI 分析 */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-2 gap-3">
          {/* 快速记录 */}
          <motion.button
            onClick={() => onNavigate('record')}
            className="card bg-gradient-to-br from-orange-400 to-pink-500 text-white p-6 text-left shadow-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
              <Plus className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold mb-1">记录微醺</h3>
            <p className="text-sm text-white/80">一键快速记录</p>
          </motion.button>

          {/* AI 分析 */}
          <motion.button
            onClick={() => onNavigate('insights')}
            className="card bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 text-left shadow-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold mb-1">AI 洞察</h3>
            <p className="text-sm text-white/80">深度数据分析</p>
          </motion.button>
        </div>
      </div>

      {/* AI 智能洞察卡片 */}
      <div className="px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-500" />
              <h2 className="text-lg font-bold text-gray-800">AI 智能洞察</h2>
            </div>
            <button
              onClick={() => onNavigate('insights')}
              className="text-purple-500 text-sm font-medium flex items-center"
            >
              详细报告
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="space-y-3">
            {aiInsights.map((insight, index) => (
              <motion.div
                key={index}
                className="card flex items-center justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${insight.color} rounded-2xl flex items-center justify-center shadow-md`}>
                    <insight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{insight.title}</p>
                    <p className="text-sm text-gray-500">{insight.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold gradient-text">{insight.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 本周概览 - 数据可视化 */}
      <div className="px-6 mb-6">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">本周饮酒</h2>
            <div className="flex items-center space-x-1 text-green-500">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">-20%</span>
            </div>
          </div>

          {/* 简化的柱状图 */}
          <div className="flex items-end justify-between h-24 mb-3">
            {['一', '二', '三', '四', '五', '六', '日'].map((day, index) => {
              const height = [40, 20, 60, 30, 80, 50, 30][index];
              const isToday = index === new Date().getDay() - 1;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div
                    className={`w-6 rounded-t-lg ${
                      isToday 
                        ? 'bg-gradient-to-t from-orange-400 to-pink-500' 
                        : 'bg-gradient-to-t from-gray-200 to-gray-300'
                    }`}
                    style={{ height: `${height}px` }}
                  />
                  <span className={`text-xs mt-1 ${isToday ? 'text-orange-500 font-bold' : 'text-gray-400'}`}>
                    {day}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-around pt-3 border-t border-gray-100">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">{totalDrinksThisWeek}</p>
              <p className="text-xs text-gray-500">本周总杯数</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">{(totalDrinksThisWeek / 7).toFixed(1)}</p>
              <p className="text-xs text-gray-500">日均杯数</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">3天</p>
              <p className="text-xs text-gray-500">无酒天数</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 最近记录 */}
      <div className="px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">最近记录</h2>
            <button
              onClick={() => onNavigate('insights')}
              className="text-orange-500 text-sm font-medium"
            >
              全部
            </button>
          </div>

          <div className="space-y-3">
            {recentRecords.map((record, index) => (
              <motion.div
                key={record.id}
                className="card-glass flex items-center justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-md">
                    <Wine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{record.type}</p>
                    <p className="text-sm text-gray-500">{record.date} · {record.scene}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">{record.amount}杯</p>
                  <p className="text-sm text-purple-500">{record.mood}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 每日小贴士轮播 */}
      <div className="px-6 mb-6">
        <motion.div
          className="card bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-purple-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTip}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-gray-700 text-center text-sm"
            >
              {dailyTips[currentTip]}
            </motion.p>
          </AnimatePresence>
          
          {/* 进度指示器 */}
          <div className="flex justify-center space-x-1 mt-3">
            {dailyTips.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentTip ? 'bg-purple-500 w-3' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* AI 聊天入口 */}
      <div className="px-6 mb-6">
        <motion.button
          onClick={() => onNavigate('healing')}
          className="w-full card bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-between shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="font-bold">和 AI 聊聊</h3>
              <p className="text-sm text-white/80">随时倾听，温暖陪伴</p>
            </div>
          </div>
          <Send className="w-6 h-6 text-white/60" />
        </motion.button>
      </div>

      {/* 底部激励 */}
      <div className="px-6 pb-8">
        <motion.div
          className="card bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-orange-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Award className="w-5 h-5 text-orange-500" />
            <span className="font-semibold text-gray-800">连续记录 7 天</span>
          </div>
          <p className="text-center text-gray-600 text-sm">
            "每一次微醺都是一次与自己对话的机会"
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
