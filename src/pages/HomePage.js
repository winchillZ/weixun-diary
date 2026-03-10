import React from 'react';
import { motion } from 'framer-motion';
import { Wine, Calendar, TrendingUp, Heart, Plus, ChevronRight, Moon, Sun } from 'lucide-react';

const HomePage = ({ drinkRecords, onNavigate }) => {
  const today = new Date();
  const dateStr = today.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' });

  const recentRecords = drinkRecords.slice(0, 3);
  const totalDrinksThisWeek = drinkRecords.filter(r => {
    const recordDate = new Date(r.date);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return recordDate >= weekAgo;
  }).reduce((sum, r) => sum + r.amount, 0);

  const moodOptions = ['开心', '放松', '浪漫', '解压', '庆祝', '独处'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* 顶部问候 */}
      <div className="px-6 pt-12 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Sun className="w-5 h-5 text-orange-500" />
              <span className="text-sm text-gray-500">{dateStr}</span>
            </div>
            <Moon className="w-5 h-5 text-purple-400" />
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-1">你好，朋友</h1>
          <p className="text-gray-600">今天感觉怎么样？</p>
        </motion.div>
      </div>

      {/* 快速记录按钮 */}
      <div className="px-6 mb-6">
        <motion.button
          onClick={() => onNavigate('record')}
          className="w-full btn-primary flex items-center justify-center space-x-3 text-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Plus className="w-6 h-6" />
          <span>记录今天的微醺时刻</span>
        </motion.button>
      </div>

      {/* 本周概览卡片 */}
      <div className="px-6 mb-6">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">本周概览</h2>
            <button
              onClick={() => onNavigate('insights')}
              className="text-orange-500 text-sm font-medium flex items-center"
            >
              查看详情
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Wine className="w-6 h-6 text-orange-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{totalDrinksThisWeek}</p>
              <p className="text-xs text-gray-500">本周饮酒次数</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Heart className="w-6 h-6 text-purple-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">放松</p>
              <p className="text-xs text-gray-500">主要心情</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-pink-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">-20%</p>
              <p className="text-xs text-gray-500">较上周</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 最近记录 */}
      <div className="px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-800">最近记录</h2>
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
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center">
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

      {/* 今日心情卡片 */}
      <div className="px-6 mb-6">
        <motion.div
          className="card bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center space-x-3 mb-3">
            <Heart className="w-6 h-6" />
            <h3 className="text-lg font-semibold">今天的心情标签</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {moodOptions.map((mood) => (
              <span
                key={mood}
                className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm"
              >
                {mood}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 每日提示 */}
      <div className="px-6">
        <motion.div
          className="card-glass border-2 border-orange-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 text-center italic">
            "每一次微醺都是一次与自己对话的机会"
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
