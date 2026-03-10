import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { Calendar, TrendingUp, Award, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const InsightsPage = ({ drinkRecords }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // 模拟数据
  const weeklyData = [
    { day: '周一', drinks: 2, mood: 7 },
    { day: '周二', drinks: 0, mood: 8 },
    { day: '周三', drinks: 1, mood: 6 },
    { day: '周四', drinks: 3, mood: 7 },
    { day: '周五', drinks: 4, mood: 8 },
    { day: '周六', drinks: 2, mood: 9 },
    { day: '周日', drinks: 1, mood: 7 },
  ];

  const monthlyData = [
    { week: '第1周', drinks: 8 },
    { week: '第2周', drinks: 6 },
    { week: '第3周', drinks: 10 },
    { week: '第4周', drinks: 7 },
  ];

  const moodData = [
    { name: '开心', value: 35, color: '#f97316' },
    { name: '放松', value: 28, color: '#a855f7' },
    { name: '浪漫', value: 15, color: '#ec4899' },
    { name: '解压', value: 12, color: '#3b82f6' },
    { name: '其他', value: 10, color: '#6b7280' },
  ];

  const sceneData = [
    { name: '聚会', value: 40, color: '#f97316' },
    { name: '独酌', value: 25, color: '#a855f7' },
    { name: '约会', value: 20, color: '#ec4899' },
    { name: '派对', value: 15, color: '#3b82f6' },
  ];

  const stats = [
    { label: '本月饮酒', value: '31杯', trend: '-15%', icon: Calendar },
    { label: '平均每周', value: '7.8杯', trend: '-10%', icon: TrendingUp },
    { label: '最长无酒', value: '3天', trend: '+1天', icon: Award },
    { label: '达成目标', value: '80%', trend: '+20%', icon: Target },
  ];

  const achievements = [
    { id: 1, title: '初次记录', desc: '开始记录第一次饮酒', date: '2024-01-01', unlocked: true },
    { id: 2, title: '一周记录', desc: '连续记录7天', date: '2024-01-07', unlocked: true },
    { id: 3, title: '控制达人', desc: '周饮酒量控制在10杯以内', date: '2024-01-14', unlocked: true },
    { id: 4, title: '探索者', desc: '尝试5种不同的酒', date: '', unlocked: false },
    { id: 5, title: '社交达人', desc: '记录10次聚会场景', date: '', unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 pb-8">
      {/* 顶部标题 */}
      <div className="px-6 pt-12 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold gradient-text mb-2">数据洞察</h1>
          <p className="text-gray-600">了解你的饮酒模式</p>
        </motion.div>
      </div>

      {/* 统计卡片 */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-5 h-5 text-orange-500" />
                <span className={`text-xs font-medium ${
                  stat.trend.startsWith('+') ? 'text-green-500' : 'text-purple-500'
                }`}>
                  {stat.trend}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 本周趋势 */}
      <div className="px-6 mb-6">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">本周饮酒趋势</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  background: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="drinks" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* 心情分布 */}
      <div className="px-6 mb-6">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">饮酒心情分布</h3>
          <div className="flex items-center justify-between">
            <ResponsiveContainer width="50%" height={150}>
              <PieChart>
                <Pie
                  data={moodData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {moodData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 pl-4">
              {moodData.slice(0, 4).map((item) => (
                <div key={item.name} className="flex items-center mb-2">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.name}</span>
                  <span className="text-sm font-medium text-gray-800 ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* 场景分析 */}
      <div className="px-6 mb-6">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">场景分析</h3>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={sceneData}
                cx="50%"
                cy="50%"
                outerRadius={60}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {sceneData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* 成就徽章 */}
      <div className="px-6 mb-6">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">成就徽章</h3>
          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`flex items-center p-3 rounded-xl ${
                  achievement.unlocked ? 'bg-gradient-to-r from-orange-50 to-purple-50' : 'bg-gray-50'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-3 ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-orange-400 to-purple-500'
                      : 'bg-gray-200'
                  }`}
                >
                  <Award className={`w-6 h-6 ${achievement.unlocked ? 'text-white' : 'text-gray-400'}`} />
                </div>
                <div className="flex-1">
                  <p className={`font-semibold ${achievement.unlocked ? 'text-gray-800' : 'text-gray-400'}`}>
                    {achievement.title}
                  </p>
                  <p className="text-sm text-gray-500">{achievement.desc}</p>
                </div>
                {achievement.unlocked && (
                  <span className="text-xs text-purple-500">{achievement.date}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* AI 洞察建议 */}
      <div className="px-6">
        <motion.div
          className="card bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-3">💡 本周洞察</h3>
          <p className="text-white/90 mb-4">
            你在周五和周六饮酒较多，主要场景是聚会。建议在社交场合提前设定饮酒上限，享受社交的同时保持健康。
          </p>
          <button className="w-full py-2 bg-white/20 rounded-xl font-medium backdrop-blur-sm">
            查看详细建议
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default InsightsPage;
