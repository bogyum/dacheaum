'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

export default function ImprovementAreasSection() {
  const improvementAreas = [
    {
      title: "콘텐츠 강화",
      description: "일반계/특성화고 맞춤형 콘텐츠 개발 및 현장 교사 제작단 상시 운영",
      features: [
        "일반계/특성화고 맞춤형 콘텐츠 개발",
        "현장 교사 제작단 상시 운영 + 인센티브(마일리지·연구점수) 제공",
        "EBS·KERIS 등 외부 콘텐츠 연계 + AI 큐레이션 고도화",
        "교과별 특성에 맞는 맞춤형 학습 자료 개발"
      ],
      benefits: [
        "교사 참여형 콘텐츠 생태계 구축",
        "외부 전문 기관과의 협력 체계 강화",
        "AI 기반 개인화 학습 지원 시스템 구축"
      ]
    },
    {
      title: "모델 확산", 
      description: "교과별 활용 사례 공모전 정례화 및 선도교사단 권역별 워크숍 운영",
      features: [
        "교과별 활용 사례 공모전 정례화 (영상·매뉴얼로 확산)",
        "선도교사단 권역별 워크숍/컨설팅 운영",
        "플랫폼 내 '수업 나눔방' 커뮤니티 활성화",
        "우수 사례의 체계적 수집 및 보급"
      ],
      benefits: [
        "교사 간 지식 공유 및 협력 문화 조성",
        "지역별 특성을 반영한 교육 모델 개발",
        "디지털 플랫폼을 통한 교육 혁신 확산"
      ]
    },
    {
      title: "교사 지원",
      description: "교사학습공동체 운영 지원 및 수업 설계 중심 심화 연수 확대",
      features: [
        "교사학습공동체 운영 지원 (행·재정적 지원)",
        "단순 기능 연수 → 수업 설계 중심 심화 연수 확대",
        "교사 전문성 신장을 위한 체계적 연수 프로그램",
        "동료 교사 간 협력 학습 환경 조성"
      ],
      benefits: [
        "교사 전문성 신장을 통한 수업 질 향상",
        "지속가능한 교사 학습 공동체 구축",
        "실무 중심의 실질적 연수 프로그램 제공"
      ]
    }
  ];

  return (
    <section id="improvements" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            실천 방안 및 발전 전략
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            다채움 플랫폼의 지속적인 발전을 위한 
            <strong className="text-gray-900 dark:text-white"> 체계적이고 구체적인 실천 방안</strong>들을 제시합니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {improvementAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{area.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{area.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <Target className="w-4 h-4 text-blue-500 mr-2" />
                  주요 실천 방안
                </h4>
                <div className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                      <ArrowRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                  기대 효과
                </h4>
                <div className="space-y-2">
                  {area.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
