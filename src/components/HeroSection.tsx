'use client';

import { motion } from 'framer-motion';
import { Target, BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(/imgfile/IMG_6947.JPG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top 20%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
        >
          2022 개정 교육과정과
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI·디지털 전환 시대
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-100 mb-8 max-w-4xl mx-auto space-y-4 drop-shadow-md"
        >
          <p>
            <strong className="text-white">학교 간 활용 격차 해소</strong> 및 
            <strong className="text-white"> 표준 수업 모델</strong>을 통한
          </p>
          <p>
            <strong className="text-white">수업 설계 품질 제고</strong>와 
            <strong className="text-white"> 지역 특색 반영</strong> 교육 혁신
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center shadow-lg">
            <Target className="w-5 h-5 mr-2" />
            수업 모델 살펴보기
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center backdrop-blur-sm">
            <BookOpen className="w-5 h-5 mr-2" />
            활용 사례 보기
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
