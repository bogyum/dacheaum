'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';

export default function UXImprovementsSection() {
  const uxImprovements = [
    {
      category: "사용자 경험 개선",
      items: [
        "학생 로그인 절차 간소화를 통한 접근성 향상",
        "관리자 권한 분산(담임·교과 교사별)으로 운영 효율성 증대",
        "교과 개설 제한 완화 및 교사 자율 교과방 개설 지원"
      ]
    },
    {
      category: "콘텐츠 관리 기능",
      items: [
        "외부 링크 제목 표시로 콘텐츠 식별성 향상",
        "수업 꾸러미 자유 편집 기능으로 맞춤형 수업 구성",
        "영상 자동재생 방지 기능으로 학습 환경 개선"
      ]
    },
    {
      category: "접근성 및 편의성",
      items: [
        "모바일 환경 최적화로 언제 어디서나 학습 가능",
        "직관적 인터페이스로 교사와 학생의 사용 편의성 증대",
        "다양한 학습 자료 형식 지원으로 교육 방법 다양화"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            기능 개선 제언 및 UX 향상 방안
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            사용자 경험 중심의 플랫폼 개선을 위한 
            <strong className="text-gray-900 dark:text-white"> 구체적이고 실현 가능한 제언</strong>들입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {uxImprovements.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Shield className="w-5 h-5 text-blue-500 mr-2" />
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                    className="flex items-start p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
