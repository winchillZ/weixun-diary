import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wine, Beer, GlassWater, X, Camera, Mic, ChevronRight, Check } from 'lucide-react';

const RecordPage = ({ onSubmit, onCancel }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    amount: 1,
    mood: '',
    scene: '',
    note: '',
  });

  const drinkTypes = [
    { id: 'beer', name: '啤酒', icon: Beer, color: 'from-yellow-400 to-orange-500' },
    { id: 'wine', name: '红酒', icon: Wine, color: 'from-red-400 to-pink-500' },
    { id: 'cocktail', name: '鸡尾酒', icon: GlassWater, color: 'from-purple-400 to-pink-500' },
    { id: 'whisky', name: '威士忌', icon: GlassWater, color: 'from-amber-400 to-orange-500' },
    { id: 'white', name: '白酒', icon: Wine, color: 'from-blue-400 to-purple-500' },
    { id: 'other', name: '其他', icon: GlassWater, color: 'from-gray-400 to-gray-500' },
  ];

  const moods = ['开心', '放松', '浪漫', '解压', '庆祝', '独处', '忧郁', '思考'];
  const scenes = ['聚会', '约会', '独酌', '派对', '庆功', '解愁', '宵夜', '其他'];

  const handleTypeSelect = (type) => {
    setFormData({ ...formData, type });
    setStep(2);
  };

  const handleMoodSelect = (mood) => {
    setFormData({ ...formData, mood });
  };

  const handleSceneSelect = (scene) => {
    setFormData({ ...formData, scene });
  };

  const handleSubmit = () => {
    const record = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split('T')[0],
    };
    onSubmit(record);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* 顶部导航 */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between">
          <button onClick={onCancel} className="p-2">
            <X className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">记录微醺</h1>
          <div className="w-10" />
        </div>

        {/* 进度指示器 */}
        <div className="flex items-center justify-center mt-6 space-x-2">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  step >= s
                    ? 'bg-gradient-to-r from-orange-400 to-purple-500 text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {step > s ? <Check className="w-4 h-4" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 h-1 rounded ${
                    step > s ? 'bg-gradient-to-r from-orange-400 to-purple-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step 1: 选择酒类 */}
      {step === 1 && (
        <motion.div
          className="px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold gradient-text mb-2">今天喝了什么？</h2>
          <p className="text-gray-600 mb-6">选择一种酒类开始记录</p>

          <div className="grid grid-cols-2 gap-4">
            {drinkTypes.map((drink) => (
              <motion.button
                key={drink.id}
                onClick={() => handleTypeSelect(drink.name)}
                className="card-glass flex flex-col items-center justify-center py-8 hover:shadow-xl transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${drink.color} rounded-2xl flex items-center justify-center mb-3 shadow-lg`}>
                  <drink.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-lg font-semibold text-gray-800">{drink.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Step 2: 数量、心情、场景 */}
      {step === 2 && (
        <motion.div
          className="px-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold gradient-text mb-2">喝了多少？</h2>
          <p className="text-gray-600 mb-6">调整数量并选择心情和场景</p>

          {/* 数量选择 */}
          <div className="card mb-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setFormData({ ...formData, amount: Math.max(0.5, formData.amount - 0.5) })}
                className="w-12 h-12 bg-gray-100 rounded-full text-2xl font-bold text-gray-600"
              >
                -
              </button>
              <div className="text-center">
                <p className="text-5xl font-bold gradient-text">{formData.amount}</p>
                <p className="text-gray-500 mt-1">杯</p>
              </div>
              <button
                onClick={() => setFormData({ ...formData, amount: formData.amount + 0.5 })}
                className="w-12 h-12 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full text-2xl font-bold text-white"
              >
                +
              </button>
            </div>
          </div>

          {/* 心情选择 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">现在的心情</h3>
            <div className="flex flex-wrap gap-2">
              {moods.map((mood) => (
                <motion.button
                  key={mood}
                  onClick={() => handleMoodSelect(mood)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    formData.mood === mood
                      ? 'bg-gradient-to-r from-orange-400 to-purple-500 text-white'
                      : 'bg-white text-gray-700 border border-gray-200'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {mood}
                </motion.button>
              ))}
            </div>
          </div>

          {/* 场景选择 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">饮酒场景</h3>
            <div className="flex flex-wrap gap-2">
              {scenes.map((scene) => (
                <motion.button
                  key={scene}
                  onClick={() => handleSceneSelect(scene)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    formData.scene === scene
                      ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white'
                      : 'bg-white text-gray-700 border border-gray-200'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {scene}
                </motion.button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setStep(3)}
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            <span>下一步</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}

      {/* Step 3: 备注 */}
      {step === 3 && (
        <motion.div
          className="px-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold gradient-text mb-2">想说点什么吗？</h2>
          <p className="text-gray-600 mb-6">记录此刻的感受（可选）</p>

          <textarea
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            placeholder="今天想记录点什么..."
            className="input-field h-32 resize-none mb-6"
          />

          <div className="flex space-x-3 mb-6">
            <button className="flex-1 btn-secondary flex items-center justify-center space-x-2">
              <Camera className="w-5 h-5" />
              <span>拍照</span>
            </button>
            <button className="flex-1 btn-secondary flex items-center justify-center space-x-2">
              <Mic className="w-5 h-5" />
              <span>语音</span>
            </button>
          </div>

          <div className="card-glass bg-gradient-to-r from-purple-50 to-pink-50 mb-6">
            <p className="text-gray-600 text-center italic">
              "每一次记录都是了解自己的开始 💜"
            </p>
          </div>

          <button onClick={handleSubmit} className="w-full btn-primary">
            完成记录
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default RecordPage;
