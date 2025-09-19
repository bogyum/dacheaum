'use client';

import { motion } from 'framer-motion';
import { Eye, Download } from 'lucide-react';
import { useState } from 'react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 갤러리 이미지 데이터
  const galleryImages = [
    {
      id: 1,
      src: '/imgfile/IMG_6947.JPG',
      alt: '다채움 활용 사례 1',
      title: '수업 모델 적용 사례',
      description: '실제 수업에서 다채움 플랫폼을 활용한 모습'
    },
    {
      id: 2,
      src: '/imgfile/IMG_6964.JPG',
      alt: '다채움 활용 사례 2',
      title: '학생 참여 활동',
      description: '학생들이 적극적으로 참여하는 수업 현장'
    },
    {
      id: 3,
      src: '/exmp/okcheon_1.png',
      alt: '옥천 활용 사례 1',
      title: '옥천 지역 활용 사례',
      description: '옥천 지역에서의 다채움 플랫폼 활용 모습'
    },
    {
      id: 4,
      src: '/exmp/okcheon_2.png',
      alt: '옥천 활용 사례 2',
      title: '옥천 수업 현장',
      description: '옥천 지역 학교에서의 실제 수업 활용'
    },
    {
      id: 5,
      src: '/exmp/okcheon_3.png',
      alt: '옥천 활용 사례 3',
      title: '옥천 학생 참여',
      description: '옥천 지역 학생들의 적극적인 참여 모습'
    },
    {
      id: 6,
      src: '/exmp/okcheon_4.png',
      alt: '옥천 활용 사례 4',
      title: '옥천 교육 혁신',
      description: '옥천 지역의 교육 혁신 사례'
    },
    {
      id: 7,
      src: '/exmp/okcheon_5.png',
      alt: '옥천 활용 사례 5',
      title: '옥천 성과 공유',
      description: '옥천 지역의 성과 공유 및 발표'
    },
    {
      id: 8,
      src: '/exmp/semeong_1.png',
      alt: '세명 활용 사례 1',
      title: '세명 지역 활용',
      description: '세명 지역에서의 다채움 플랫폼 활용'
    },
    {
      id: 9,
      src: '/exmp/semeong_2.png',
      alt: '세명 활용 사례 2',
      title: '세명 수업 모습',
      description: '세명 지역 학교의 수업 현장'
    },
    {
      id: 10,
      src: '/exmp/semeong_3.png',
      alt: '세명 활용 사례 3',
      title: '세명 교육 성과',
      description: '세명 지역의 교육 성과 및 결과'
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            다채움 활용 갤러리
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            실제 수업 현장에서 다채움 플랫폼이 어떻게 활용되고 있는지 확인해보세요
          </p>
        </motion.div>

        {/* 갤러리 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200 dark:bg-gray-700">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* 오버레이 */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Eye className="w-6 h-6 text-white" />
                  </button>
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Download className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* 이미지 정보 */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* 모달 */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="갤러리 이미지"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
