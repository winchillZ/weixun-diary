import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart, Moon, Music, Brain, MessageCircle, Sparkles,
  Play, Pause, Send, ChevronRight, BookOpen, Bot
} from 'lucide-react';
import AIChatWidget from '../components/AIChatWidget';

const HealingPage = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [selectedMood, setSelectedMood] = useState(null);
  const [message, setMessage] = useState('');
  const [playingTrack, setPlayingTrack] = useState(null);
  const [showFullChat, setShowFullChat] = useState(false);

  const tabs = [
    { id: 'ai', label: 'AI陪伴', icon: Bot },
    { id: 'mood', label: '情绪记录', icon: Heart },
    { id: 'meditation', label: '冥想音频', icon: Music },
    { id: 'resources', label: '专业资源', icon: BookOpen },
  ];

  const moods = [
    { id: 1, emoji: '😊', label: '开心', color: 'from-yellow-400 to-orange-500' },
    { id: 2, emoji: '😌', label: '平静', color: 'from-green-400 to-teal-500' },
    { id: 3, emoji: '😢', label: '难过', color: 'from-blue-400 to-indigo-500' },
    { id: 4, emoji: '😤', label: '烦躁', color: 'from-red-400 to-pink-500' },
    { id: 5, emoji: '😰', label: '焦虑', color: 'from-purple-400 to-indigo-500' },
    { id: 6, emoji: '😴', label: '疲惫', color: 'from-gray-400 to-gray-500' },
    { id: 7, emoji: '🥰', label: '满足', color: 'from-pink-400 to-rose-500' },
    { id: 8, emoji: '🤔', label: '思考', color: 'from-cyan-400 to-blue-500' },
  ];

  const meditationTracks = [
    {
      id: 1,
      title: '饮酒前的放松',
      duration: '5:30',
      category: '饮酒前',
      icon: '🌙',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: '微醺后的舒缓',
      duration: '8:15',
      category: '饮酒后',
      icon: '🌟',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 3,
      title: '睡前助眠冥想',
      duration: '10:00',
      category: '睡眠',
      icon: '💤',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 4,
      title: '焦虑缓解引导',
      duration: '7:45',
      category: '情绪',
      icon: '💚',
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 5,
      title: '自我接纳练习',
      duration: '12:30',
      category: '自我成长',
      icon: '🌸',
      color: 'from-pink-500 to-purple-500',
    },
    {
      id: 6,
      title: '压力释放冥想',
      duration: '9:20',
      category: '解压',
      icon: '🍃',
      color: 'from-teal-500 to-green-500',
    },
  ];

  const resources = [
    {
      id: 1,
      title: '饮酒动机评估',
      desc: '了解你饮酒背后的心理需求',
      duration: '约5分钟',
      icon: Brain,
      color: 'bg-purple-100 text-purple-500',
    },
    {
      id: 2,
      title: '情绪状态量表',
      desc: '评估当前的情绪健康状况',
      duration: '约3分钟',
      icon: Heart,
      color: 'bg-pink-100 text-pink-500',
    },
    {
      id: 3,
      title: '心理健康热线',
      desc: '24小时心理危机干预热线',
      duration: '随时可用',
      icon: MessageCircle,
      color: 'bg-green-100 text-green-500',
    },
    {
      id: 4,
      title: '专业咨询平台',
      desc: '预约一对一心理咨询',
      duration: '按需预约',
      icon: Sparkles,
      color: 'bg-orange-100 text-orange-500',
    },
  ];

  const handlePlayTrack = (trackId) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId);
  };

  // 如果显示完整聊天，则渲染全屏聊天组件
  if (showFullChat) {
    return <AIChatWidget onClose={() => setShowFullChat(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 pb-8">
      {/* 顶部标题 */}
      <div className="px-6 pt-12 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <Moon className="w-6 h-6 text-purple-500" />
            <h1 className="text-3xl font-bold gradient-text">疗愈空间</h1>
          </div>
          <p className="text-gray-600">放松身心，关爱自己</p>
        </motion.div>
      </div>

      {/* 标签切换 */}
      <div className="px-6 mb-6">
        <div className="flex overflow-x-auto space-x-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 shadow-sm'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* AI 陪伴 */}
      {activeTab === 'ai' && (
        <motion.div
          className="px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* AI 聊天入口卡片 */}
          <motion.div
            className="card bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white mb-6 shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowFullChat(true)}
          >
            <div className="flex items-center space-x-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center"
              >
                <Bot className="w-10 h-10" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">和 AI 聊聊</h3>
                <p className="text-sm text-white/90">随时倾听，温暖陪伴</p>
              </div>
              <Send className="w-6 h-6 text-white/60" />
            </div>
          </motion.div>

          {/* AI 功能介绍 */}
          <div className="card mb-4">
            <h3 className="font-semibold text-gray-800 mb-3">AI 陪伴能做什么？</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-purple-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">倾听你的心事</p>
                  <p className="text-sm text-gray-500">无论开心还是烦恼，我都愿意听</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">提供情绪支持</p>
                  <p className="text-sm text-gray-500">给你温暖的力量和建议</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">分析饮酒模式</p>
                  <p className="text-sm text-gray-500">帮你理解自己的饮酒习惯</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-glass bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
            <p className="text-gray-600 text-center text-sm">
              💜 这是一个安全的空间，你的感受值得被倾听。如遇危机情况，请寻求专业帮助。
            </p>
          </div>
        </motion.div>
      )}

      {/* 情绪记录 */}
      {activeTab === 'mood' && (
        <motion.div
          className="px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="card mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">现在的心情如何？</h3>
            <div className="grid grid-cols-4 gap-3">
              {moods.map((mood) => (
                <motion.button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`p-3 rounded-2xl flex flex-col items-center justify-center transition-all ${
                    selectedMood === mood.id
                      ? `bg-gradient-to-br ${mood.color} text-white shadow-lg`
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-2xl mb-1">{mood.emoji}</span>
                  <span className="text-xs font-medium">{mood.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {selectedMood && (
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">记录此刻的感受</h3>
              <textarea
                placeholder="发生了什么让你有这种感觉？"
                className="input-field h-32 resize-none mb-4"
              />
              <button className="w-full btn-primary">保存情绪记录</button>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* 冥想音频 */}
      {activeTab === 'meditation' && (
        <motion.div
          className="px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-1 gap-3">
            {meditationTracks.map((track) => (
              <motion.div
                key={track.id}
                className="card flex items-center justify-between"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${track.color} rounded-2xl flex items-center justify-center text-2xl shadow-md`}
                  >
                    {track.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{track.title}</p>
                    <p className="text-sm text-gray-500">{track.category} · {track.duration}</p>
                  </div>
                </div>
                <button
                  onClick={() => handlePlayTrack(track.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    playingTrack === track.id
                      ? 'bg-gradient-to-r from-orange-400 to-purple-500 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {playingTrack === track.id ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-1" />
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* 专业资源 */}
      {activeTab === 'resources' && (
        <motion.div
          className="px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="space-y-3">
            {resources.map((resource) => (
              <motion.div
                key={resource.id}
                className="card flex items-center justify-between cursor-pointer"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${resource.color} rounded-2xl flex items-center justify-center`}>
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{resource.title}</p>
                    <p className="text-sm text-gray-500">{resource.desc}</p>
                    <p className="text-xs text-purple-500">{resource.duration}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </motion.div>
            ))}
          </div>

          <div className="card-glass bg-gradient-to-r from-orange-50 to-pink-50 mt-6 border-2 border-orange-200">
            <p className="text-gray-600 text-center text-sm">
              💡 如果你在饮酒或情绪方面遇到严重困扰，建议寻求专业心理咨询师的帮助。
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HealingPage;
