import React from 'react';
import { motion } from 'framer-motion';
import {
  User, Settings, Award, TrendingUp, Calendar, ChevronRight,
  Wine, Heart, Target, Bell, Shield, HelpCircle, LogOut
} from 'lucide-react';

const ProfilePage = ({ drinkRecords }) => {
  const userStats = {
    totalDays: 45,
    totalDrinks: 78,
    streakDays: 12,
    achievements: 8,
  };

  const menuItems = [
    { icon: Calendar, label: '饮酒日历', desc: '查看完整的饮酒记录', color: 'text-orange-500' },
    { icon: TrendingUp, label: '数据报告', desc: '详细的饮酒数据分析', color: 'text-purple-500' },
    { icon: Target, label: '目标设置', desc: '设置饮酒控制目标', color: 'text-pink-500' },
    { icon: Bell, label: '提醒设置', desc: '自定义提醒和通知', color: 'text-blue-500' },
    { icon: Shield, label: '隐私设置', desc: '管理数据和隐私', color: 'text-green-500' },
    { icon: HelpCircle, label: '帮助与反馈', desc: '常见问题与意见反馈', color: 'text-gray-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 pb-8">
      {/* 顶部个人信息 */}
      <div className="px-6 pt-12 pb-6">
        <motion.div
          className="card bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-4xl border-2 border-white/30">
              😊
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">微醺探索者</h2>
              <p className="text-white/80">已记录 {userStats.totalDays} 天</p>
              <div className="flex items-center space-x-1 mt-1">
                <Award className="w-4 h-4" />
                <span className="text-sm">连续记录 {userStats.streakDays} 天</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold">{userStats.totalDays}</p>
              <p className="text-sm text-white/80">记录天数</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{userStats.totalDrinks}</p>
              <p className="text-sm text-white/80">总饮酒杯数</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{userStats.achievements}</p>
              <p className="text-sm text-white/80">成就徽章</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 本周成就 */}
      <div className="px-6 mb-6">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">最近成就</h3>
            <button className="text-orange-500 text-sm font-medium">全部</button>
          </div>

          <div className="flex overflow-x-auto space-x-3 pb-2">
            {[
              { emoji: '🎯', title: '目标达成', desc: '本周饮酒控制在目标内' },
              { emoji: '🔥', title: '坚持记录', desc: '连续记录7天' },
              { emoji: '🌟', title: '探索者', desc: '尝试了5种不同的酒' },
            ].map((achievement, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 p-3 bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl text-center"
              >
                <div className="text-3xl mb-2">{achievement.emoji}</div>
                <p className="text-sm font-semibold text-gray-800">{achievement.title}</p>
                <p className="text-xs text-gray-500 mt-1">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 功能菜单 */}
      <div className="px-6 mb-6">
        <motion.div
          className="card p-0 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-800">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* 健康提醒 */}
      <div className="px-6 mb-6">
        <motion.div
          className="card-glass bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-purple-500" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 mb-1">健康提示</p>
              <p className="text-sm text-gray-600">
                建议成年男性每日酒精摄入量不超过25克，女性不超过15克。适量饮酒，享受生活。
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 版本信息 */}
      <div className="px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-gray-400 mb-2">微醺日记 v1.0.0</p>
          <p className="text-xs text-gray-300">记录每一次微醺，理解真实的自己 💜</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
