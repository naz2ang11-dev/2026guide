import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 bg-paper z-20 relative border-b border-gray-200/50">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl"
      >
        <div className="flex items-center space-x-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <p className="text-sm md:text-base font-bold tracking-widest text-gray-500 uppercase">
              2026학년도 새학기 준비
            </p>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6 tracking-tight">
          5학년 동학년 <br/>
          <span className="text-gray-400">선생님을 위한 가이드</span>
        </h1>
        
        <p className="text-lg text-secondary font-light max-w-3xl leading-relaxed break-keep">
          동학년 협업을 위한 구글 드라이브부터, 학년 운영의 핵심인 노션, 
          사정이 있으면 편히 쉴수 있게  준비한 시스템. 
          성공적인 1년을 위한 핵심 가이드를 확인하세요.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;