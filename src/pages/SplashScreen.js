import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wine, Heart, Sparkles } from 'lucide-react';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex flex-col items-center justify-center relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Logo和品牌名 */}
      <motion.div
        className="flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="relative mb-6"
          initial={{ scale: 0.5, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="w-28 h-28 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl border border-white/30">
            <Wine className="w-16 h-16 text-white" />
          </div>
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-5xl font-bold text-white mb-3 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          微醺日记
        </motion.h1>

        <motion.p
          className="text-white/90 text-lg font-light tracking-widest mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          记录每一次微醺，理解真实的自己
        </motion.p>

        <motion.div
          className="flex items-center space-x-2 text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Heart className="w-4 h-4 fill-current" />
          <span className="text-sm">温暖 · 不批判 · 陪伴</span>
        </motion.div>
      </motion.div>

      {/* 加载动画 */}
      <motion.div
        className="absolute bottom-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              animate={{ y: [-8, 0, -8] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
