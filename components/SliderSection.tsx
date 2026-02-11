import React, { useRef, useEffect } from 'react';
import TopicCard from './TopicCard';
import { GuideTopic } from '../types';

interface SliderSectionProps {
  topics: GuideTopic[];
  onTopicClick: (topic: GuideTopic) => void;
}

const SliderSection: React.FC<SliderSectionProps> = ({ topics, onTopicClick }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const targetScrollRef = useRef<number>(0);
  const isInitializedRef = useRef(false);

  // Increase to 7 sets to ensure the scrollable width is far larger than any viewport
  // [Buffer, Buffer, Buffer, Main, Buffer, Buffer, Buffer]
  const extendedTopics = [
    ...topics, ...topics, ...topics, 
    ...topics, 
    ...topics, ...topics, ...topics
  ];

  // Initialize scroll position to the middle (Set 4, index 3)
  useEffect(() => {
    if (scrollContainerRef.current && !isInitializedRef.current) {
      const container = scrollContainerRef.current;
      // We have 7 sets. We want to start at the beginning of the 4th set (middle).
      const totalSets = 7;
      const singleSetWidth = container.scrollWidth / totalSets;
      const startPos = singleSetWidth * 3; 
      
      container.scrollLeft = startPos;
      targetScrollRef.current = startPos;
      isInitializedRef.current = true;
    }
  }, [topics]);

  // Animation Loop for Smooth Inertia Scrolling
  useEffect(() => {
    let animationFrameId: number;

    const updateScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const currentScroll = container.scrollLeft;
        const targetScroll = targetScrollRef.current;
        
        // Linear Interpolation (Lerp)
        const diff = targetScroll - currentScroll;
        
        if (Math.abs(diff) > 0.5) {
          container.scrollLeft = currentScroll + diff * 0.08;
        }

        // Infinite Scroll "Teleport" Logic
        const maxScroll = container.scrollWidth;
        const totalSets = 7;
        const singleSetWidth = maxScroll / totalSets;

        // Middle zone is Set 4 (index 3). Range: [3*W, 4*W]
        // If we drift too far left (into Set 3), jump forward.
        // If we drift too far right (into Set 5), jump backward.
        
        // Threshold: If we are less than 2.5 sets in, add 1 set width
        if (container.scrollLeft < singleSetWidth * 2.5) {
          const offset = singleSetWidth;
          container.scrollLeft += offset;
          targetScrollRef.current += offset;
        } 
        // Threshold: If we are more than 4.5 sets in, subtract 1 set width
        else if (container.scrollLeft > singleSetWidth * 4.5) {
          const offset = singleSetWidth;
          container.scrollLeft -= offset;
          targetScrollRef.current -= offset;
        }
      }
      animationFrameId = requestAnimationFrame(updateScroll);
    };

    updateScroll();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Handle Wheel Event
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const scrollSpeed = 4.0; 
      targetScrollRef.current += e.deltaY * scrollSpeed;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section className="w-full h-full flex items-center bg-paper relative overflow-hidden">
      
      {/* Visual Indicator */}
      <div className="absolute top-6 left-6 md:left-12 z-20 pointer-events-none mix-blend-difference text-white/50">
        <span className="text-xs font-bold tracking-[0.3em] uppercase flex items-center gap-2">
           <span className="w-12 h-[2px] bg-current"></span> Drag or Scroll
        </span>
      </div>

      {/* Horizontal Slider Track */}
      <div 
        ref={scrollContainerRef}
        className="w-full h-full flex items-center gap-0 overflow-x-hidden py-10 md:py-16"
      >
        {extendedTopics.map((topic, index) => (
          <div key={`${topic.id}-${index}`} className="h-full flex-shrink-0 flex items-center justify-center px-0">
             <TopicCard 
                topic={topic} 
                index={(index % topics.length) + 1} 
                onClick={onTopicClick} 
             />
          </div>
        ))}
      </div>

    </section>
  );
};

export default SliderSection;