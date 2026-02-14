import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Home, FileText } from 'lucide-react';
import { GuideTopic } from '../types';

interface SlideViewerProps {
  topic: GuideTopic | null;
  isOpen: boolean;
  onClose: () => void;
}

const SlideViewer: React.FC<SlideViewerProps> = ({ topic, isOpen, onClose }) => {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !topic) return null;

  // Special layout for topics that have a poster image (like the Rules topic)
  const isSplitLayout = !!topic.posterImageUrl;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col bg-white"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-100 bg-white/95 backdrop-blur z-10 flex-shrink-0">
          
          <div className="flex items-center gap-4 md:gap-6">
            {/* Home Button */}
            <button 
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 hover:text-black rounded-full transition-all duration-300 text-xs font-bold uppercase tracking-wider text-gray-500 group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Home</span>
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>

            {/* Title Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <h2 className="text-lg md:text-xl font-bold text-primary truncate max-w-[200px] md:max-w-md">
                {topic.title}
              </h2>
              <span className="hidden sm:inline-block w-px h-3 bg-gray-300"></span>
              <span className="hidden sm:inline-block text-xs text-gray-500 uppercase tracking-wider">
                {topic.subtitle}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {!isSplitLayout && (
              <button 
                onClick={() => window.open(topic.downloadUrl, '_blank')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
                title="Download Material"
              >
                <Download className="w-5 h-5 text-gray-600 group-hover:text-primary" />
              </button>
            )}
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group ml-2"
              title="Close"
            >
              <X className="w-6 h-6 text-gray-600 group-hover:text-red-500" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full h-full bg-gray-50 p-4 md:p-8 overflow-y-auto">
           {isSplitLayout ? (
             // Split View Layout (Slide + Poster)
             // Switched to lg:flex-row to allow side-by-side on laptops
             // Removed max-width restriction to let the slide grow as much as possible
             <div className="flex flex-col lg:flex-row gap-8 w-full h-full items-start justify-center">
                
                {/* Left: Slide */}
                {/* flex-1 ensures it takes all available remaining space */}
                <div className="w-full lg:flex-1 bg-white shadow-lg rounded-sm border border-gray-200 overflow-hidden relative aspect-video self-start">
                   <iframe
                     src={topic.slideUrl}
                     frameBorder="0"
                     width="100%"
                     height="100%"
                     allowFullScreen={true}
                     title={topic.title}
                     className="absolute inset-0 w-full h-full"
                   ></iframe>
                </div>

                {/* Right: Poster Image & Download */}
                {/* Slightly reduced width on large screens to give more room to slide */}
                <div className="w-full lg:w-[350px] flex-shrink-0 flex flex-col gap-4">
                    <div className="bg-white p-3 shadow-md rounded-sm border border-gray-200 flex items-center justify-center bg-gray-50">
                        {topic.posterImageUrl ? (
                          <img 
                            src={topic.posterImageUrl} 
                            alt="Poster" 
                            className="w-full h-auto object-contain max-h-[70vh]" 
                            onError={(e) => {
                                // Fallback if image fails to load
                                (e.target as HTMLImageElement).style.display = 'none';
                                (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="text-red-400 text-xs p-10">이미지를 불러올 수 없습니다.</div>';
                            }}
                          />
                        ) : (
                          <div className="text-gray-400 text-sm py-20">Image not available</div>
                        )}
                    </div>
                    
                    <a 
                      href={topic.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-primary text-white hover:bg-gray-800 transition-colors rounded-lg shadow-lg flex items-center justify-center gap-3 font-bold"
                    >
                      <Download className="w-5 h-5" />
                      <span>포스터 다운로드</span>
                    </a>
                    
                    <p className="text-sm font-bold text-red-500 mt-0 text-center">
                      - 다운 받아서 교실에 게시해주세요
                    </p>
                </div>
             </div>
           ) : (
             // Standard Centered Layout
             <div className="w-full h-full flex items-center justify-center">
                <div className="w-full max-w-6xl aspect-video bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-200 relative">
                  <iframe
                    src={topic.slideUrl}
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    title={topic.title}
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                  
                  {/* Placeholder Overlay if iframe fails or is empty (Visual fallback) */}
                  <div className="absolute -z-10 inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                    <p>Loading Slide...</p>
                  </div>
                </div>
             </div>
           )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-white border-t border-gray-100 text-sm text-gray-500 flex justify-between items-center flex-shrink-0">
            <p className="line-clamp-1 mr-4">{topic.description}</p>
            <p className="text-xs text-gray-300 uppercase whitespace-nowrap">5th Grade Guide</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideViewer;