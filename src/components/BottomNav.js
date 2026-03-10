import React from 'react';
import { motion } from 'framer-motion';
import { Home, PlusCircle, BarChart2, Users, Heart } from 'lucide-react';

const BottomNav = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'record', label: '记录', icon: PlusCircle, special: true },
    { id: 'insights', label: '洞察', icon: BarChart2 },
    { id: 'community', label: '社区', icon: Users },
    { id: 'healing', label: '疗愈', icon: Heart },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100 safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;

          if (item.special) {
            return (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative -top-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
              </motion.button>
            );
          }

          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center justify-center py-2 px-3"
              whileTap={{ scale: 0.9 }}
            >
              <item.icon
                className={`w-6 h-6 mb-1 ${
                  isActive
                    ? 'text-orange-500'
                    : 'text-gray-400'
                }`}
              />
              <span
                className={`text-xs ${
                  isActive
                    ? 'text-orange-500 font-medium'
                    : 'text-gray-400'
                }`}
              >
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
