import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './pages/SplashScreen';
import HomePage from './pages/HomePage';
import RecordPage from './pages/RecordPage';
import InsightsPage from './pages/InsightsPage';
import CommunityPage from './pages/CommunityPage';
import HealingPage from './pages/HealingPage';
import ProfilePage from './pages/ProfilePage';
import BottomNav from './components/BottomNav';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [drinkRecords, setDrinkRecords] = useState([
    { id: 1, type: '啤酒', amount: 2, date: '2024-01-20', mood: '放松', scene: '聚会' },
    { id: 2, type: '红酒', amount: 1, date: '2024-01-18', mood: '浪漫', scene: '约会' },
    { id: 3, type: '鸡尾酒', amount: 3, date: '2024-01-15', mood: '开心', scene: '派对' },
  ]);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const addDrinkRecord = (record) => {
    setDrinkRecords([record, ...drinkRecords]);
    setCurrentPage('home');
  };

  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage drinkRecords={drinkRecords} onNavigate={setCurrentPage} />;
      case 'record':
        return <RecordPage onSubmit={addDrinkRecord} onCancel={() => setCurrentPage('home')} />;
      case 'insights':
        return <InsightsPage drinkRecords={drinkRecords} />;
      case 'community':
        return <CommunityPage />;
      case 'healing':
        return <HealingPage />;
      case 'profile':
        return <ProfilePage drinkRecords={drinkRecords} />;
      default:
        return <HomePage drinkRecords={drinkRecords} onNavigate={setCurrentPage} />;
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 pb-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
      <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
