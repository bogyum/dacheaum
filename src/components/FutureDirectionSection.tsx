'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, TrendingUp, ArrowRight } from 'lucide-react';

export default function FutureDirectionSection() {
  const futureDirections = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "초-중-고 연계",
      description: "표준 모델 제시",
      details: [
        "학교급별 연계 교육과정 개발",
        "학습자 발달 단계 고려한 교육 설계",
        "교육과정 일관성 확보"
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "우수 사례 공유",
      description: "플랫폼 탑재 및 공유",
      details: [
        "성공 사례 데이터베이스 구축",
        "모범 사례 자동 추천 시스템",
        "지식 공유 커뮤니티 활성화"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "교사 커뮤니티",
      description: "연구·공유 문화 조성",
      details: [
        "교사 학습 공동체 지원",
        "동료 교사 간 협력 체계",
        "전문성 신장 프로그램 운영"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "성과 관리",
      description: "정량·정성 지표 시스템",
      details: [
        "학습 성과 측정 체계",
        "교육 효과 분석 도구",
        "지속적 개선을 위한 피드백 시스템"
      ]
    }
  ];

  return (
    <section id="future" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            일반화 및 발전 방향
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            <strong>초-중-고 연계 표준 모델</strong>을 통한 
            <strong> 지속가능한 교육 생태계</strong> 구축을 위한 
            <strong> 장기적 발전 전략</strong>을 제시합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {futureDirections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-blue-100 mb-4">{item.description}</p>
              <ul className="text-sm text-blue-200 space-y-1 text-left">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <ArrowRight className="w-3 h-3 text-white mr-2 mt-0.5 flex-shrink-0" />
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
