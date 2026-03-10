import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle, Heart, Send, MoreHorizontal, Image, Smile,
  Clock, TrendingUp, Users, MapPin
} from 'lucide-react';

const CommunityPage = () => {
  const [selectedTab, setSelectedTab] = useState('discover');
  const [newPost, setNewPost] = useState('');

  const tabs = [
    { id: 'discover', label: '发现', icon: TrendingUp },
    { id: 'following', label: '关注', icon: Users },
    { id: 'nearby', label: '附近', icon: MapPin },
  ];

  const posts = [
    {
      id: 1,
      anonymous: true,
      author: '微醺的夜',
      avatar: '🌙',
      time: '2小时前',
      content: '今天和朋友小聚，喝了两杯红酒。久违的放松，感觉生活还是要和朋友一起分享才美好 💜',
      tags: ['红酒', '聚会', '放松'],
      likes: 128,
      hugs: 56,
      comments: 23,
      location: '北京·三里屯',
    },
    {
      id: 2,
      anonymous: false,
      author: '小确幸',
      avatar: '⭐',
      time: '5小时前',
      content: '周末独酌时间，一杯威士忌配上爵士乐，是最好的独处方式。',
      tags: ['威士忌', '独酌', '爵士乐'],
      likes: 89,
      hugs: 34,
      comments: 12,
      location: '上海·静安',
    },
    {
      id: 3,
      anonymous: true,
      author: '夜猫子',
      avatar: '🦉',
      time: '昨天',
      content: '最近工作压力有点大，喝点酒解压。发现控制饮酒真的很难，希望在这里能找到一些理解和支持。',
      tags: ['解压', '支持', '压力'],
      likes: 256,
      hugs: 198,
      comments: 67,
      location: '深圳·南山',
    },
    {
      id: 4,
      anonymous: false,
      author: '探索者',
      avatar: '🎭',
      time: '2天前',
      content: '今天尝试了一款新的鸡尾酒，味道很惊艳！推荐给喜欢尝试新口味的朋友们。',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400',
      tags: ['鸡尾酒', '探索', '推荐'],
      likes: 167,
      hugs: 45,
      comments: 31,
      location: '成都·春熙路',
    },
  ];

  const hotTopics = [
    { id: 1, name: '微醺时刻', posts: '2.3k', trend: '🔥' },
    { id: 2, name: '今日心情', posts: '1.8k', trend: '💬' },
    { id: 3, name: '酒馆推荐', posts: '956', trend: '📍' },
    { id: 4, name: '解压空间', posts: '834', trend: '💚' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 pb-8">
      {/* 顶部标题 */}
      <div className="px-6 pt-12 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold gradient-text">社区广场</h1>
            <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* 标签切换 */}
          <div className="flex space-x-2 mb-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-orange-400 to-purple-500 text-white'
                    : 'bg-white text-gray-600 shadow-sm'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 热门话题 */}
      <div className="px-6 mb-4">
        <motion.div
          className="flex overflow-x-auto space-x-3 pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {hotTopics.map((topic) => (
            <div
              key={topic.id}
              className="flex-shrink-0 card-glass flex items-center space-x-2 py-2 px-4"
            >
              <span>{topic.trend}</span>
              <span className="font-medium text-gray-800">{topic.name}</span>
              <span className="text-sm text-gray-500">{topic.posts}篇</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 发帖框 */}
      <div className="px-6 mb-4">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-purple-500 rounded-full flex items-center justify-center text-white text-lg">
              😊
            </div>
            <div className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="分享你的微醺时刻..."
                className="w-full bg-gray-50 rounded-xl p-3 resize-none border-0 focus:ring-2 focus:ring-orange-300"
                rows="2"
              />
              <div className="flex items-center justify-between mt-2">
                <div className="flex space-x-3">
                  <button className="p-2 text-gray-400 hover:text-orange-500">
                    <Image className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-orange-500">
                    <Smile className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-orange-500">
                    <MapPin className="w-5 h-5" />
                  </button>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-orange-400 to-purple-500 text-white rounded-full text-sm font-medium">
                  发布
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 动态列表 */}
      <div className="px-6 space-y-4">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          >
            {/* 作者信息 */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-purple-100 rounded-full flex items-center justify-center text-lg">
                  {post.avatar}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-800">{post.author}</span>
                    {post.anonymous && (
                      <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
                        匿名
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{post.time}</span>
                    <span>·</span>
                    <span>{post.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 内容 */}
            <p className="text-gray-700 mb-3 leading-relaxed">{post.content}</p>

            {/* 图片 */}
            {post.image && (
              <div className="mb-3 rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt="post"
                  className="w-full h-48 object-cover"
                />
              </div>
            )}

            {/* 标签 */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gradient-to-r from-orange-50 to-purple-50 text-purple-600 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* 互动按钮 */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex space-x-4">
                <motion.button
                  className="flex items-center space-x-1 text-gray-500"
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">{post.likes}</span>
                </motion.button>
                <motion.button
                  className="flex items-center space-x-1 text-purple-500"
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-lg">🤗</span>
                  <span className="text-sm">{post.hugs}</span>
                </motion.button>
                <motion.button
                  className="flex items-center space-x-1 text-gray-500"
                  whileTap={{ scale: 0.9 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{post.comments}</span>
                </motion.button>
              </div>
              <button className="text-gray-400">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 浮动发帖按钮 */}
      <motion.button
        className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Send className="w-6 h-6 text-white" />
      </motion.button>
    </div>
  );
};

export default CommunityPage;
