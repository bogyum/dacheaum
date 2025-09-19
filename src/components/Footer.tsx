'use client';

import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">다채움 활용 수업 모델</h3>
          </div>
          <p className="text-gray-400 mb-4">
            디지털 전환 시대의 교육 혁신을 위한 표준 수업 모델
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2025 다채움 플랫폼</span>
            <span>•</span>
            <span>충청북도교육청</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
