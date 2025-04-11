"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading states
const HeroSection = dynamic(() => import('../homepage/hero-section'), {
  loading: () => <div className="h-screen" />,
});
const AboutSection = dynamic(() => import('../homepage/about'), {
  loading: () => <div className="h-screen" />,
});
const Experience = dynamic(() => import('../homepage/experience'), {
  loading: () => <div className="h-screen" />,
});
const Skills = dynamic(() => import('../homepage/skills'), {
  loading: () => <div className="h-screen" />,
});
const Projects = dynamic(() => import('../homepage/projects'), {
  loading: () => <div className="h-screen" />,
});
const Education = dynamic(() => import('../homepage/education'), {
  loading: () => <div className="h-screen" />,
});
const Blog = dynamic(() => import('../homepage/blog'), {
  loading: () => <div className="h-screen" />,
});
const ContactSection = dynamic(() => import('../homepage/contact'), {
  loading: () => <div className="h-screen" />,
});

export default function HomeContent({ blogs }) {
  return (
    <Suspense fallback={<div className="h-screen" />}>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </Suspense>
  );
} 