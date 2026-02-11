import React, { useState } from 'react';
import Hero from './components/Hero';
import SliderSection from './components/SliderSection';
import SlideViewer from './components/SlideViewer';
import AllSlidesViewer from './components/AllSlidesViewer';
import { GUIDE_TOPICS } from './constants';
import { GuideTopic } from './types';
import { Layers } from 'lucide-react';

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<GuideTopic | null>(null);
  const [isAllSlidesOpen, setIsAllSlidesOpen] = useState(false);

  return (
    <div className="h-screen w-screen bg-paper text-primary overflow-hidden flex flex-col">
      
      {/* Navigation / Header (Fixed Overlay) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <span className="font-bold text-xl tracking-tight text-primary">5th.Guide</span>
        </div>
        <div className="pointer-events-auto">
           <button 
             onClick={() => setIsAllSlidesOpen(true)}
             className="flex items-center space-x-2 text-sm font-bold text-gray-600 hover:text-black transition-colors uppercase tracking-widest bg-white/50 backdrop-blur px-4 py-2 rounded-full border border-gray-200 hover:border-black"
           >
             <Layers className="w-4 h-4" />
             <span className="hidden md:inline">자료 모아보기</span>
           </button>
        </div>
      </nav>

      {/* Main Layout Split */}
      {/* Top 35% - Static Introduction */}
      <header className="h-[35vh] flex-shrink-0 w-full">
        <Hero />
      </header>

      {/* Bottom 65% - Horizontal Scrollable Slider */}
      <main className="h-[65vh] flex-1 w-full relative z-10">
        <SliderSection 
          topics={GUIDE_TOPICS} 
          onTopicClick={setSelectedTopic} 
        />
      </main>

      {/* Viewers (Modals) */}
      <SlideViewer 
        topic={selectedTopic} 
        isOpen={!!selectedTopic} 
        onClose={() => setSelectedTopic(null)} 
      />

      <AllSlidesViewer 
        topics={GUIDE_TOPICS}
        isOpen={isAllSlidesOpen}
        onClose={() => setIsAllSlidesOpen(false)}
      />
      
    </div>
  );
};

export default App;