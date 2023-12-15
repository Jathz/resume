"use client"
import React, { useEffect, useRef, useState } from 'react';
import Banner from '~/components/banner';
import Hero from '~/components/hero';
import Timeline from '~/components/timeline';


export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState('bg-[#131D3C] transition-colors duration-1000'); // Set default background color with transition
  const timelineRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = heroRef.current;
      const timelineSection = timelineRef.current;

      if (heroSection && timelineSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const timelineRect = timelineSection.getBoundingClientRect();

        // Define an offset to start the transition before reaching the section boundaries
        const transitionOffset = 500; // Adjust this offset value as needed

        // Check if the Hero section is approaching the Timeline section with an offset
        if (heroRect.bottom - transitionOffset <= 0 && timelineRect.top < window.innerHeight - transitionOffset) {
          setBackgroundColor('bg-[#180342] transition-colors duration-1000'); // Change to your desired Tailwind CSS background class with transition
        } else {
          setBackgroundColor('bg-[#131D3C] transition-colors duration-1000'); // Change to the default Tailwind CSS background class with transition
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className={`min-h-screen ${backgroundColor}`}>
      <div ref={heroRef}>
        <Hero />
      </div>
      <Banner />
      <div ref={timelineRef}>
        <Timeline />
      </div>
    </main>
  );
}
