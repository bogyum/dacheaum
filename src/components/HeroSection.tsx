'use client';

import { motion } from 'framer-motion';
import { Target, BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-end pb-48"
      style={{
        backgroundImage: 'url(/imgfile/IMG_6947.JPG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom 20%',
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
          className="text-xl text-gray-100 mb-24 max-w-4xl mx-auto space-y-4 drop-shadow-md"
        >
          <p>
            <strong className="text-white">학교 간 활용 격차 해소</strong> 및 
            <strong className="text-white"> 표준 수업 모델</strong>을 통한
          </p>
          <p>
            <strong className="text-white">수업 설계 품질 제고</strong>와 
            <strong className="text-white"> 지역 특색 반영</strong> 교육 혁신
          </p>
          <p>
          &nbsp;
          </p>
          <p>
          &nbsp;
          </p>
          <p>
          &nbsp;
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
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

        {/* 팀원 소개 섹션 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">프로젝트 팀원</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors">
              <div className="text-white font-semibold text-lg">김보겸</div>
              <div className="text-gray-200 text-sm">흥덕고등학교</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors">
              <div className="text-white font-semibold text-lg">안정호</div>
              <div className="text-gray-200 text-sm">옥천여자중학교</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors">
              <div className="text-white font-semibold text-lg">하영일</div>
              <div className="text-gray-200 text-sm">충주상업고등학교</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors">
              <div className="text-white font-semibold text-lg">김인혜</div>
              <div className="text-gray-200 text-sm">세명고등학교</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors">
              <div className="text-white font-semibold text-lg">전영순</div>
              <div className="text-gray-200 text-sm">단양소백산중학교</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors">
              <div className="text-white font-semibold text-lg">장기영</div>
              <div className="text-gray-200 text-sm">국원고등학교</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
