import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Home } from 'lucide-react';
import { GuideTopic } from '../types.ts';

interface AllSlidesViewerProps {
  topics: GuideTopic[];
  isOpen: boolean;
  onClose: () => void;
}

const AllSlidesViewer: React.FC<AllSlidesViewerProps> = ({ topics, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-50 bg-white overflow-y-auto"
      >
        <div className="sticky top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-10 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
             {/* Home Button */}
             <button 
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 hover:text-black rounded-full transition-all duration-300 text-xs font-bold uppercase tracking-wider text-gray-500 group"
              >
                <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Home</span>
              </button>

             <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary">전체 자료 모아보기</h2>
                <p className="text-xs text-gray-500 uppercase tracking-widest hidden md:block">All Presentation Slides</p>
             </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-8 h-8 text-primary" />
          </button>
        </div>

        <div className="max-w-5xl mx-auto py-12 px-6 space-y-24">
          {topics.map((topic, index) => (
            <div key={topic.id} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                   <span className="text-xs font-bold text-accent tracking-widest uppercase mb-2 block">Part 0{index + 1}</span>
                   <h3 className="text-3xl font-bold text-primary">{topic.title}</h3>
                </div>
                <button className="flex items-center text-sm font-medium text-gray-500 hover:text-accent transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  자료 다운로드
                </button>
              </div>
              
              <div className="w-full aspect-video bg-gray-100 shadow-lg rounded-sm overflow-hidden border border-gray-200">
                <iframe
                   src={topic.slideUrl}
                   frameBorder="0"
                   width="100%"
                   height="100%"
                   allowFullScreen={true}
                   title={topic.title}
                   className="w-full h-full"
                 ></iframe>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-2xl">{topic.description}</p>
            </div>
          ))}
          
          <div className="py-12 text-center">
             <button onClick={onClose} className="text-lg underline underline-offset-4 text-gray-400 hover:text-primary transition-colors flex items-center justify-center gap-2 mx-auto">
               <Home className="w-4 h-4" />
               메인으로 돌아가기
             </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AllSlidesViewer;