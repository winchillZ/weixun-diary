import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wine, Beer, GlassWater, X, Camera, Mic, Send, Sparkles } from 'lucide-react';

const RecordPage = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    type: '',
    amount: 1,
    mood: '',
    scene: '',
    note: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const drinkTypes = [
    { id: 'beer', name: '啤酒', icon: Beer, color: 'from-yellow-400 to-orange-500', emoji: '🍺' },
    { id: 'wine', name: '红酒', icon: Wine, color: 'from-red-400 to-pink-500', emoji: '🍷' },
    { id: 'cocktail', name: '鸡尾酒', icon: GlassWater, color: 'from-purple-400 to-pink-500', emoji: '🍹' },
    { id: 'whisky', name: '威士忌', icon: GlassWater, color: 'from-amber-400 to-orange-500', emoji: '🥃' },
    { id: 'white', name: '白酒', icon: Wine, color: 'from-blue-400 to-purple-500', emoji: '🍶' },
    { id: 'other', name: '其他', icon: GlassWater, color: 'from-gray-400 to-gray-500', emoji: '🥤' },
  ];

  const moods = [
    { name: '开心', emoji: '😊', color: 'from-yellow-400 to-orange-500' },
    { name: '放松', emoji: '😌', color: 'from-green-400 to-teal-500' },
    { name: '浪漫', emoji: '😍', color: 'from-pink-400 to-rose-500' },
    { name: '解压', emoji: '💪', color: 'from-purple-400 to-indigo-500' },
    { name: '庆祝', emoji: '🎉', color: 'from-orange-400 to-red-500' },
    { name: '独处', emoji: '🌙', color: 'from-blue-400 to-purple-500' },
    { name: '忧郁', emoji: '😔', color: 'from-gray-400 to-gray-500' },
    { name: '思考', emoji: '🤔', color: 'from-cyan-400 to-blue-500' },
  ];

  const scenes = [
    { name: '聚会', emoji: '👥', color: 'from-orange-400 to-red-500' },
    { name: '约会', emoji: '💑', color: 'from-pink-400 to-rose-500' },
    { name: '独酌', emoji: '🧘', color: 'from-purple-400 to-indigo-500' },
    { name: '派对', emoji: '🎊', color: 'from-yellow-400 to-orange-500' },
    { name: '庆功', emoji: '🏆', color: 'from-green-400 to-teal-500' },
    { name: '解愁', emoji: '💭', color: 'from-blue-400 to-purple-500' },
    { name: '宵夜', emoji: '🌙', color: 'from-indigo-400 to-purple-500' },
    { name: '其他', emoji: '📌', color: 'from-gray-400 to-gray-500' },
  ];

  const aiSuggestions = [
    "今天的心情很棒！记录下来，以后回顾会很开心 💜",
    "适量饮酒，享受当下，记得多喝水哦 💧",
    "记录饮酒时的情绪，帮你更好地了解自己 🔍",
  ];

  const handleSubmit = () => {
    if (!formData.type || !formData.mood || !formData.scene) {
      return;
    }

    const record = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split('T')[0],
    };

    setShowSuccess(true);

    setTimeout(() => {
      onSubmit(record);
    }, 1500);
  };

  const isFormValid = formData.type && formData.mood && formData.scene;

  // 成功动画页面
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-center text-white"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-8xl mb-6"
          >
            ✨
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold mb-2"
          >
            记录成功！
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/90"
          >
            每一次记录都是了解自己的开始
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 pb-24">
      {/* 顶部导航 */}
      <div className="px-6 pt-12 pb-4 sticky top-0 bg-gradient-to-br from-orange-50 via-white to-purple-50 z-10">
        <div className="flex items-center justify-between">
          <button 
            onClick={onCancel} 
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-xl font-bold gradient-text">记录微醺时刻</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="px-6 space-y-6">
        {/* AI 提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card bg-gradient-to-r from-purple-500 to-pink-500 text-white"
        >
          <div className="flex items-start space-x-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <p className="text-sm leading-relaxed">
              {aiSuggestions[Math.floor(Math.random() * aiSuggestions.length)]}
            </p>
          </div>
        </motion.div>

        {/* 第一步：选择酒类 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
            <h2 className="text-lg font-bold text-gray-800">今天喝了什么？</h2>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {drinkTypes.map((drink) => (
              <motion.button
                key={drink.id}
                onClick={() => setFormData({ ...formData, type: drink.name })}
                className={`card flex flex-col items-center justify-center py-4 ${
                  formData.type === drink.name
                    ? 'ring-2 ring-orange-400 shadow-lg'
                    : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-2">{drink.emoji}</div>
                <span className="text-sm font-semibold text-gray-800">{drink.name}</span>
                {formData.type === drink.name && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 第二步：数量 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
            <h2 className="text-lg font-bold text-gray-800">喝了多少？</h2>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <motion.button
                onClick={() => setFormData({ ...formData, amount: Math.max(0.5, formData.amount - 0.5) })}
                className="w-14 h-14 bg-gray-100 rounded-full text-3xl font-bold text-gray-600 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                -
              </motion.button>
              <div className="text-center">
                <motion.p
                  key={formData.amount}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  className="text-6xl font-bold gradient-text"
                >
                  {formData.amount}
                </motion.p>
                <p className="text-gray-500 mt-1">杯</p>
              </div>
              <motion.button
                onClick={() => setFormData({ ...formData, amount: formData.amount + 0.5 })}
                className="w-14 h-14 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full text-3xl font-bold text-white flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                +
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* 第三步：心情 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
            <h2 className="text-lg font-bold text-gray-800">现在的心情</h2>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {moods.map((mood) => (
              <motion.button
                key={mood.name}
                onClick={() => setFormData({ ...formData, mood: mood.name })}
                className={`card flex flex-col items-center justify-center py-3 ${
                  formData.mood === mood.name
                    ? 'ring-2 ring-purple-400 shadow-lg'
                    : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-2xl mb-1">{mood.emoji}</div>
                <span className="text-xs font-medium text-gray-700">{mood.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 第四步：场景 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              4
            </div>
            <h2 className="text-lg font-bold text-gray-800">饮酒场景</h2>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {scenes.map((scene) => (
              <motion.button
                key={scene.name}
                onClick={() => setFormData({ ...formData, scene: scene.name })}
                className={`card flex flex-col items-center justify-center py-3 ${
                  formData.scene === scene.name
                    ? 'ring-2 ring-blue-400 shadow-lg'
                    : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-2xl mb-1">{scene.emoji}</div>
                <span className="text-xs font-medium text-gray-700">{scene.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 第五步：备注（可选） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              5
            </div>
            <h2 className="text-lg font-bold text-gray-800">
              想说点什么？
              <span className="text-sm font-normal text-gray-500 ml-2">（可选）</span>
            </h2>
          </div>

          <textarea
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            placeholder="记录此刻的感受..."
            className="w-full bg-white border-2 border-gray-100 rounded-2xl px-4 py-3 h-24 resize-none focus:outline-none focus:border-purple-300 transition-all"
          />

          <div className="flex space-x-2 mt-3">
            <button className="flex-1 bg-white border border-gray-200 rounded-xl py-2 flex items-center justify-center space-x-2 text-gray-600">
              <Camera className="w-4 h-4" />
              <span className="text-sm">拍照</span>
            </button>
            <button className="flex-1 bg-white border border-gray-200 rounded-xl py-2 flex items-center justify-center space-x-2 text-gray-600">
              <Mic className="w-4 h-4" />
              <span className="text-sm">语音</span>
            </button>
          </div>
        </motion.div>

        {/* 预览卡片 */}
        {isFormValid && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card bg-gradient-to-r from-orange-50 to-purple-50 border-2 border-purple-200"
          >
            <h3 className="font-semibold text-gray-800 mb-3 text-center">记录预览</h3>
            <div className="flex items-center justify-around text-center">
              <div>
                <p className="text-2xl font-bold gradient-text">{formData.type}</p>
                <p className="text-xs text-gray-500">酒类</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <p className="text-2xl font-bold gradient-text">{formData.amount}杯</p>
                <p className="text-xs text-gray-500">数量</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <p className="text-2xl font-bold gradient-text">{formData.mood}</p>
                <p className="text-xs text-gray-500">心情</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* 底部提交按钮 */}
      <div className="fixed bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-orange-50 to-transparent">
        <motion.button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 shadow-lg ${
            isFormValid
              ? 'bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          whileHover={isFormValid ? { scale: 1.02 } : {}}
          whileTap={isFormValid ? { scale: 0.98 } : {}}
        >
          <Send className="w-5 h-5" />
          <span>完成记录</span>
        </motion.button>
      </div>
    </div>
  );
};

export default RecordPage;
