import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GuideTopic } from '../types';

interface TopicCardProps {
  topic: GuideTopic;
  index: number;
  onClick: (topic: GuideTopic) => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, index, onClick }) => {

  // Determine text color for the number based on background brightness of the art
  const getNumberColorClass = (id: string) => {
    switch (id) {
      case 'drive':       // Light Background
      case 'substitute':  // Light Background
        return "text-black/30"; 
      case 'notion':      // Dark Background
      case 'mteacher':    // Dark Background
      case 'desktop':     // Medium-Dark Background
        return "text-white/30";
      default:
        return "text-white/30";
    }
  };

  // Function to render custom art based on topic ID
  const renderTopicArt = () => {
    switch (topic.id) {
      case 'drive': // Google Drive - Abstract Triangle
        return (
          <div className="w-full h-full bg-[#FAFAFA] relative flex items-center justify-center overflow-hidden">
             {/* Abstract Background Shapes */}
             <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,208,87,0.1),transparent_70%)]" />
             
             {/* Sophisticated Drive Logo Construction */}
             <motion.div 
               className="relative w-48 h-48 md:w-64 md:h-64"
               whileHover={{ rotate: 10, scale: 1.05 }}
               transition={{ type: "spring", stiffness: 200, damping: 20 }}
             >
                {/* Green Bottom */}
                <div className="absolute bottom-10 left-4 right-4 h-12 bg-[#34A853] transform -skew-x-12 rounded-sm opacity-90 mix-blend-multiply shadow-lg" />
                {/* Yellow Right */}
                <div className="absolute top-10 right-4 w-12 h-44 bg-[#FBBC04] transform skew-x-[30deg] origin-bottom-left rounded-sm opacity-90 mix-blend-multiply shadow-lg" />
                {/* Blue Left */}
                <div className="absolute top-10 left-12 w-12 h-44 bg-[#4285F4] transform -skew-x-[30deg] origin-bottom-right rounded-sm opacity-90 mix-blend-multiply shadow-lg" />
                
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
             </motion.div>
          </div>
        );
      
      case 'notion': // Notion - Abstract Cube/N
        return (
          <div className="w-full h-full bg-[#1A1A1A] relative flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#555 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             
             <motion.div 
               className="w-40 h-40 md:w-56 md:h-56 bg-white rounded-2xl shadow-2xl relative flex items-center justify-center text-black font-black text-9xl md:text-[10rem]"
               whileHover={{ y: -10, rotateY: 15 }}
               style={{ perspective: 1000 }}
             >
                <span className="translate-y-[-10%] block">N</span>
                {/* 3D Sides */}
                <div className="absolute top-2 -right-2 w-full h-full bg-gray-400 -z-10 rounded-2xl" />
                <div className="absolute top-4 -right-4 w-full h-full bg-gray-600 -z-20 rounded-2xl" />
             </motion.div>
          </div>
        );

      case 'substitute': // Medical - Hospital Symbol
        return (
          <div className="w-full h-full bg-[#ECFDF5] relative flex items-center justify-center overflow-hidden">
             {/* Soft Circles */}
             <div className="absolute top-10 right-10 w-64 h-64 bg-[#34D399] rounded-full blur-3xl opacity-20" />
             <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#059669] rounded-full blur-3xl opacity-20" />

             <motion.div 
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
             >
                {/* The Cross */}
                <div className="w-16 h-48 md:w-20 md:h-64 bg-[#10B981] rounded-full shadow-lg relative z-10 mx-auto" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-16 md:w-64 md:h-20 bg-[#10B981] rounded-full shadow-lg" />
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-8 -right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md z-20 text-[#10B981] font-bold"
                >
                  +
                </motion.div>
             </motion.div>
          </div>
        );

      case 'mteacher': // AI - Tablet/Chip
        return (
          <div className="w-full h-full bg-slate-900 relative flex items-center justify-center overflow-hidden">
             {/* Tech Grid Background */}
             <div className="absolute inset-0" 
                  style={{ 
                    backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} 
             />

             {/* Glowing Core */}
             <motion.div 
               className="relative w-48 h-32 md:w-64 md:h-44 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-[0_0_50px_rgba(59,130,246,0.5)] border border-blue-400/50 flex items-center justify-center"
               whileHover={{ scale: 1.05 }}
             >
                {/* Screen Glint */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-xl" />
                {/* AI Node */}
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-inner">
                   <div className="w-8 h-8 rounded-full bg-blue-500 animate-pulse" />
                </div>
                {/* Data Lines */}
                <div className="absolute -left-4 top-1/2 w-8 h-1 bg-blue-400 rounded-full" />
                <div className="absolute -right-4 top-1/2 w-8 h-1 bg-blue-400 rounded-full" />
             </motion.div>
          </div>
        );
      
      case 'desktop': // Windows - Window Pane
         return (
          <div className="w-full h-full bg-[#0ea5e9] relative flex items-center justify-center overflow-hidden">
            {/* Background Clouds/Softness */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-600" />
            
            <motion.div 
              className="relative grid grid-cols-2 gap-2 p-2"
              whileHover={{ rotate: -5, skewX: -5 }}
              transition={{ type: "spring" }}
            >
               <div className="w-20 h-20 md:w-28 md:h-28 bg-white/90 backdrop-blur shadow-lg rounded-tl-sm" />
               <div className="w-20 h-20 md:w-28 md:h-28 bg-white/80 backdrop-blur shadow-lg rounded-tr-sm" />
               <div className="w-20 h-20 md:w-28 md:h-28 bg-white/80 backdrop-blur shadow-lg rounded-bl-sm" />
               <div className="w-20 h-20 md:w-28 md:h-28 bg-white/70 backdrop-blur shadow-lg rounded-br-sm" />
            </motion.div>
          </div>
         )

      default:
        return <img src={topic.imageUrl} alt={topic.title} className="w-full h-full object-cover" />;
    }
  }

  return (
    <motion.div
      // Hover effect: Scale up significantly.
      whileHover={{ 
        scale: 1.15, 
        zIndex: 100,
        boxShadow: "0 40px 80px -20px rgba(0, 0, 0, 0.4)"
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      // Base width increased
      className="relative w-[320px] md:w-[480px] aspect-[3/4.2] cursor-pointer overflow-hidden bg-white border-r border-white/10"
      style={{ backgroundColor: topic.themeColor, color: topic.textColor }}
      onClick={() => onClick(topic)}
    >
      {/* Art/Image Section */}
      <div className="h-[65%] w-full overflow-hidden p-0 relative">
        {/* Render Custom Art */}
        {renderTopicArt()}
        
        {/* Gradient Overlay for Text Readability transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none"></div>

        {/* Large Number Index */}
        <div className="absolute top-0 left-0 p-6 z-20">
            <span className={`text-8xl font-bold tracking-tighter ${getNumberColorClass(topic.id)}`}>
              0{index}
            </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="h-[35%] px-6 py-6 md:px-8 md:py-8 flex flex-col justify-between relative">
        
        {/* Header Tags */}
        <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest opacity-60">
          <span>{topic.tag}</span>
        </div>

        {/* Title & Desc */}
        <div className="flex flex-col gap-2 mt-2 z-10">
           <h3 className="text-3xl md:text-4xl font-bold leading-none break-keep tracking-tight">
             {topic.title}
           </h3>
           <p className="text-sm opacity-80 font-medium line-clamp-2 break-keep leading-snug">
             {topic.description}
           </p>
        </div>

        {/* Big Action Icon */}
        <div className="absolute top-0 right-0 p-4">
           <div 
             className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 backdrop-blur-sm"
           >
             <ArrowUpRight className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-300" />
           </div>
        </div>

      </div>
    </motion.div>
  );
};

export default TopicCard;