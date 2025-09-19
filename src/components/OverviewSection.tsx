'use client';

import { motion } from 'framer-motion';
import { Users, BookOpen, Heart, CheckCircle, ArrowRight } from 'lucide-react';

export default function OverviewSection() {
  const overviewItems = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "표준 수업 모델",
      description: "학교 간 활용 격차 해소를 위한 표준화된 수업 모델 제공",
      details: [
        "일관된 교육 품질 보장",
        "교사 간 수업 방법 공유",
        "교육 과정 표준화"
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "수업 설계 품질 제고",
      description: "콘텐츠와 운영 가이드를 통한 수업 설계 품질 향상",
      details: [
        "체계적인 수업 설계 가이드",
        "다양한 콘텐츠 활용",
        "수업 평가 체계 구축"
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: "지역 특색 반영",
      description: "각 지역의 특색을 반영한 맞춤형 교육 모델 구축",
      details: [
        "지역 특성 기반 교육",
        "지역 자원 활용",
        "지역 교육 공동체 형성"
      ]
    }
  ];

  return (
    <section id="overview" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            다채움 플랫폼의 필요성과 배경
          </h2>
          <div className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto space-y-4">
            <p>
              <strong className="text-gray-900 dark:text-white">2022 개정 교육과정</strong>과 
              <strong className="text-gray-900 dark:text-white"> AI·디지털 전환 시대</strong>에 맞는 
              수업 혁신 요구가 증대되면서, 다음과 같은 필요성이 대두되었습니다:
            </p>
            <ul className="text-left space-y-2 mt-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>학교 간 활용 격차 해소:</strong> 교육 정보화 수준의 지역별 격차를 줄이고 표준화된 교육 환경 구축</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>표준 수업 모델 필요:</strong> 일관된 교육 품질을 보장하는 표준화된 수업 모델 개발</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>수업 설계 품질 제고:</strong> 체계적인 콘텐츠와 운영 가이드를 통한 수업 설계 역량 강화</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>지역 특색 반영:</strong> 각 지역의 특성을 살린 맞춤형 교육 모델 구축</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {overviewItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center">
                    <ArrowRight className="w-3 h-3 text-blue-500 mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
