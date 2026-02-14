import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cog, CheckCircle, BookOpen, ClipboardList } from 'lucide-react';
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
      case 'facility':    // Dark Background
      case 'manual':      // Orange Background
      case 'rules':       // Red Background
        return "text-white/30";
      default:
        return "text-white/30";
    }
  };

  // Function to render custom art based on topic ID
  const renderTopicArt = () => {
    switch (topic.id) {
      case 'manual': // User Manual - Book/Document
        return (
          <div className="w-full h-full bg-[#FB923C] relative flex items-center justify-center overflow-hidden">
              {/* Pattern */}
              <div className="absolute inset-0 opacity-10" 
                  style={{ 
                    backgroundImage: 'radial-gradient(#FFF 2px, transparent 2px)',
                    backgroundSize: '24px 24px'
                  }} 
              />
              
              <motion.div 
                className="relative w-32 h-44 md:w-44 md:h-60 bg-white rounded-r-lg rounded-l-sm shadow-2xl flex flex-col items-center justify-center border-l-8 border-orange-700"
                whileHover={{ rotateY: -15, x: 5 }}
                style={{ perspective: 1000 }}
              >
                {/* Manual Content Mockup */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-100 mb-4 flex items-center justify-center overflow-hidden border-2 border-gray-200">
                   {/* Abstract User Icon */}
                   <div className="flex flex-col items-center translate-y-2">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded-full mb-1" /> 
                      <div className="w-12 h-8 md:w-16 md:h-10 bg-gray-300 rounded-t-full" />
                   </div>
                </div>
                <div className="w-20 md:w-24 h-2 bg-gray-200 rounded mb-2" />
                <div className="w-12 md:w-16 h-2 bg-gray-200 rounded" />

                {/* Label */}
                <div className="absolute bottom-4 text-[0.6rem] font-bold tracking-widest uppercase text-gray-400">MANUAL</div>
                
                {/* Floating Element */}
                <motion.div 
                  className="absolute -top-3 -right-3 bg-white p-2 rounded-full shadow-md text-orange-500"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                   <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
              </motion.div>
          </div>
        );

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

      case 'mteacher': // AI - Tablet
        return (
          <div className="w-full h-full bg-slate-900 relative flex items-center justify-center overflow-hidden">
             {/* Tech Grid Background */}
             <div className="absolute inset-0" 
                  style={{ 
                    backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} 
             />

             {/* Tablet Device */}
             <motion.div 
               className="relative w-48 h-32 md:w-64 md:h-44 bg-gray-800 rounded-xl shadow-2xl border-4 border-gray-700 flex items-center justify-center"
               whileHover={{ scale: 1.05 }}
             >
                {/* Screen Area */}
                <div className="w-full h-full bg-slate-900 rounded-lg relative overflow-hidden flex flex-col p-3">
                   {/* Top Bar */}
                   <div className="flex justify-between items-center mb-4 opacity-50">
                      <div className="w-10 h-1 bg-white/20 rounded-full"></div>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                      </div>
                   </div>

                   {/* Content Mockup */}
                   <div className="flex-1 flex flex-col items-center justify-center gap-3">
                      {/* AI Circle */}
                      <div className="w-12 h-12 rounded-full border border-blue-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)] bg-blue-500/10">
                        <span className="text-blue-400 font-bold text-[0.6rem]">AI</span>
                      </div>
                      {/* Lines */}
                      <div className="w-full space-y-1.5 px-4 opacity-30">
                        <div className="w-full h-1 bg-blue-400 rounded-full"></div>
                        <div className="w-3/4 h-1 bg-blue-400 rounded-full"></div>
                        <div className="w-1/2 h-1 bg-blue-400 rounded-full"></div>
                      </div>
                   </div>

                   {/* Scanning Effect */}
                   <motion.div 
                     className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent pointer-events-none"
                     animate={{ top: ['-100%', '100%'] }}
                     transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                   />
                </div>
                
                {/* Camera */}
                <div className="absolute top-1/2 -left-1.5 w-1 h-8 bg-gray-600 rounded-l-md transform -translate-y-1/2"></div>
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
         );

      case 'facility': // Automation - Gears & Check
        return (
          <div className="w-full h-full bg-[#8B5CF6] relative flex items-center justify-center overflow-hidden">
             {/* Background Gears */}
             <motion.div 
               className="absolute top-[-10%] right-[-10%] opacity-10"
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
             >
                <Cog className="w-64 h-64 text-white" />
             </motion.div>

             <motion.div 
               className="relative w-40 h-40 md:w-56 md:h-56 bg-white rounded-full shadow-2xl flex items-center justify-center"
               whileHover={{ scale: 1.1, rotate: -10 }}
             >
                {/* Face/Icon */}
                <div className="flex flex-col items-center justify-center gap-2">
                   <div className="flex gap-4">
                     <div className="w-3 h-8 bg-gray-800 rounded-full animate-blink" />
                     <div className="w-3 h-8 bg-gray-800 rounded-full animate-blink" />
                   </div>
                   <div className="w-16 h-8 border-b-4 border-gray-800 rounded-[50%] mt-2" />
                </div>
                
                {/* Floating Gear */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-yellow-400 p-3 rounded-full shadow-lg"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                >
                   <Cog className="w-8 h-8 text-yellow-900" />
                </motion.div>

                {/* Checkmark */}
                 <motion.div 
                  className="absolute -bottom-2 -left-2 bg-green-500 p-2 rounded-full shadow-lg border-4 border-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                   <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
             </motion.div>
          </div>
        );

      case 'rules': // Rules - Clipboard
        return (
          <div className="w-full h-full bg-[#E11D48] relative flex items-center justify-center overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute inset-0" 
                  style={{ 
                    backgroundImage: 'linear-gradient(45deg, #BE123C 25%, transparent 25%, transparent 75%, #BE123C 75%, #BE123C), linear-gradient(45deg, #BE123C 25%, transparent 25%, transparent 75%, #BE123C 75%, #BE123C)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px',
                    opacity: 0.1
                  }} 
             />

             <motion.div 
               className="relative w-40 h-52 md:w-52 md:h-64 bg-amber-100 rounded-md shadow-2xl flex flex-col items-center pt-8"
               whileHover={{ scale: 1.05 }}
               style={{ transformOrigin: 'top center' }}
               animate={{ rotate: [0, 2, 0, -2, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             >
                {/* Metal Clip */}
                <div className="absolute -top-4 w-24 h-12 bg-gray-300 rounded-t-lg border-b-4 border-gray-400 shadow-md z-20 flex justify-center items-end pb-2">
                   <div className="w-12 h-4 bg-gray-800 rounded-full" />
                </div>

                {/* Paper Content */}
                <div className="w-[85%] h-[85%] bg-white shadow-inner flex flex-col p-4 gap-3">
                   <div className="w-full h-4 bg-gray-200 rounded-sm mb-2" />
                   
                   {/* Checklist items */}
                   {[1, 2, 3, 4].map(i => (
                     <div key={i} className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-red-500 rounded-sm flex items-center justify-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                        </div>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full" />
                     </div>
                   ))}
                </div>

                {/* Floating Pencil */}
                <motion.div 
                  className="absolute -right-6 bottom-10 w-4 h-32 bg-yellow-400 rounded-b-md border-l-4 border-yellow-600 shadow-lg transform rotate-45 origin-bottom-left"
                  whileHover={{ rotate: 30 }}
                >
                   <div className="absolute -top-4 w-full h-4 bg-pink-300 rounded-t-sm" /> {/* Eraser */}
                   <div className="absolute bottom-0 w-full h-0 border-l-[8px] border-r-[8px] border-t-[16px] border-l-transparent border-r-transparent border-t-yellow-400 transform translate-y-full" /> {/* Tip Base */}
                   <div className="absolute bottom-0 w-full h-0 border-l-[8px] border-r-[8px] border-t-[16px] border-l-transparent border-r-transparent border-t-black transform translate-y-full scale-50 translate-y-2" /> {/* Lead */}
                </motion.div>
             </motion.div>
          </div>
        );

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