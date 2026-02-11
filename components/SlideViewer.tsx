import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Home } from 'lucide-react';
import { GuideTopic } from '../types.ts';

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

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col bg-white"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-100 bg-white/95 backdrop-blur z-10">
          
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
            <button 
              onClick={() => window.open(topic.downloadUrl, '_blank')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
              title="Download Material"
            >
              <Download className="w-5 h-5 text-gray-600 group-hover:text-primary" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group ml-2"
              title="Close"
            >
              <X className="w-6 h-6 text-gray-600 group-hover:text-red-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 w-full h-full bg-gray-50 p-4 md:p-8 flex items-center justify-center relative">
           {/* Iframe Container with aspect ratio */}
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

        {/* Footer info */}
        <div className="px-6 py-4 bg-white border-t border-gray-100 text-sm text-gray-500 flex justify-between items-center">
            <p className="line-clamp-1 mr-4">{topic.description}</p>
            <p className="text-xs text-gray-300 uppercase whitespace-nowrap">5th Grade Guide</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideViewer;