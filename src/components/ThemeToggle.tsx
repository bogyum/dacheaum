'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 시스템 테마 확인
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(systemTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // 테마 적용
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, mounted]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // 서버 사이드 렌더링 시에는 기본 상태 표시
  if (!mounted) {
    return (
      <div className="relative w-12 h-6 bg-gray-200 rounded-full p-1">
        <div className="w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center">
          <Sun className="w-3 h-3 text-yellow-500" />
        </div>
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-4 h-4 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: isDark ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-gray-600" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
}