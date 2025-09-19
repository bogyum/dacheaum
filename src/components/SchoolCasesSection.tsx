'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star, Zap, Award } from 'lucide-react';

export default function SchoolCasesSection() {
  const schoolCases = [
    {
      name: "흥덕고등학교",
      description: "5개 교과군 대표교사 중심 수업 모델(4~6차시) 개발, 10월 공개수업 준비",
      features: [
        "수학: 채움수학/채움수능 → 자율학습, 보충수업, 과제 제시",
        "정보: 채움코딩 → 프로그래밍, 퀴즈, 수행평가",
        "특별활동: 채움책방 기반 독서 활동"
      ],
      achievements: [
        "교과군별 맞춤형 수업 모델 구축",
        "학생 참여도 및 학습 성과 향상",
        "교사 간 협력 체계 강화"
      ],
      icon: "🏫"
    },
    {
      name: "세명고등학교", 
      description: "학습튜터 프로그램 연계, 대학생과의 튜터링 관리 및 AI 학습 도우미 시범 운영",
      features: [
        "학습튜터 프로그램 연계로 대학생과의 튜터링 관리",
        "AI 학습 도우미 시범 운영으로 개별화 학습 지원",
        "채움책방 독서 프로그램 → 수행평가 및 인성 프로그램 연계",
        "EBS 교재 + 채움수능 연계 → 지필평가 반영"
      ],
      achievements: [
        "대학생-고등학생 멘토링 체계 구축",
        "AI 기반 개별화 학습 환경 조성",
        "독서 교육과 평가의 유기적 연계"
      ],
      icon: "🎓"
    },
    {
      name: "옥천여자중학교",
      description: "전 학년 기초학력 진단–보충 학습 연계 운영으로 학습 격차 해소",
      features: [
        "전 학년 기초학력 진단–보충 학습 연계 운영",
        "교과별 방과후 맞춤 지도 + 교재 지원",
        "학습자 수준별 맞춤형 교육 제공"
      ],
      achievements: [
        "기초학력 부진 학생 대상 체계적 지원",
        "학습 격차 해소를 통한 교육 기회 균등화",
        "교과별 특성에 맞는 보충 학습 프로그램 운영"
      ],
      icon: "📚"
    },
    {
      name: "충주상업고등학교",
      description: "외부강사 초청 연수로 교사 역량 제고 및 학교 맥락형 운영",
      features: [
        "외부강사 초청 연수로 교사 역량 제고",
        "기초학력 반, 독서토론 동아리 등 학교 맥락형 운영",
        "특성화고 특성에 맞는 교육 프로그램 개발"
      ],
      achievements: [
        "교사 전문성 신장을 통한 수업 질 향상",
        "학교 특성에 맞는 맞춤형 교육 모델 구축",
        "학생 동아리 활동과 연계한 교육 프로그램 운영"
      ],
      icon: "💼"
    },
    {
      name: "국원고등학교",
      description: "수준별 맞춤형 수업(채움수학) + 기초학력 향상(채움책방) 연계 운영",
      features: [
        "수준별 맞춤형 수업(채움수학) + 기초학력 향상(채움책방)",
        "클래스 기반 수업 모델 운영 + 공개수업 예정",
        "학습자 수준에 따른 차별화된 교육 제공"
      ],
      achievements: [
        "학습자 수준별 맞춤형 교육 체계 구축",
        "기초학력 향상과 심화 학습의 균형적 운영",
        "공개수업을 통한 교육 모델 확산"
      ],
      icon: "🎯"
    },
    {
      name: "단양소백산중학교",
      description: "진단평가–보충·심화 수업 연계 및 필사 릴레이 행사 운영",
      features: [
        "진단평가–보충·심화 수업 연계",
        "필사 릴레이 행사 및 국어과 교과 행사 운영",
        "창의적 독서 활동과 연계한 교육 프로그램"
      ],
      achievements: [
        "진단평가 기반 개별화 학습 지원 체계 구축",
        "창의적 독서 활동을 통한 언어 능력 향상",
        "교과 행사를 통한 학습 동기 증진"
      ],
      icon: "⛰️"
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            학교별 활용 사례 및 성과
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            다양한 학교에서 성공적으로 운영되고 있는 다채움 플랫폼 활용 사례들을 통해 
            <strong className="text-gray-900 dark:text-white"> 교육 혁신의 구체적 성과</strong>를 확인할 수 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolCases.map((school, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{school.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{school.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{school.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <Zap className="w-4 h-4 text-blue-500 mr-2" />
                  주요 활용 기능
                </h4>
                <div className="space-y-2">
                  {school.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <Award className="w-4 h-4 text-purple-500 mr-2" />
                  주요 성과
                </h4>
                <div className="space-y-2">
                  {school.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      {achievement}
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
