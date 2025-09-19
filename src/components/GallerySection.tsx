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
      src: '/exmp/exp1.png',
      alt: '흥덕고 사례 1',
      title: '흥덕고 교과수업 사례',
      description: '외부 링크를 활용한 교과 수업 사례'
    },
    {
      id: 2,
      src: '/exmp/exp2.png',
      alt: '흥덕고 사례 2',
      title: '흥덕고 특별활동 수업 사례',
      description: '학습자료 공유를 활용한 특별활동 수업 사례'
    },
    {
      id: 3,
      src: '/exmp/exp3.png',
      alt: '세명고 독서교육 사례',
      title: '세명고 채움책방을 활용한 창의적체험활동 사례',
      description: '채움책방을 활용한 독서교육 후 다양한 활동 사례'
    },
    {
      id: 4,
      src: '/exmp/exp4.png',
      alt: '옥천여중 사례',
      title: '옥천여중 채움타자 활용 수업 사례',
      description: '옥천여중 채움타자를 활용한 교과 보조학습 수업 사례'
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
