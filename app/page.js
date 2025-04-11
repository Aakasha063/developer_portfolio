import { personalData } from "@/utils/data/personal-data";
import dynamic from 'next/dynamic';

// Dynamically import client components with SSR disabled for those using browser APIs
const HeroSection = dynamic(() => import('./components/homepage/hero-section'), { ssr: false });
const AboutSection = dynamic(() => import('./components/homepage/about'), { ssr: false });
const Experience = dynamic(() => import('./components/homepage/experience'), { ssr: false });
const Skills = dynamic(() => import('./components/homepage/skills'), { ssr: false });
const Projects = dynamic(() => import('./components/homepage/projects'), { ssr: false });
const Education = dynamic(() => import('./components/homepage/education'), { ssr: false });
const Blog = dynamic(() => import('./components/homepage/blog'), { ssr: false });
const ContactSection = dynamic(() => import('./components/homepage/contact'), { ssr: false });
const ClientWrapper = dynamic(() => import('./components/client-wrapper'), { ssr: false });

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}&per_page=100`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <ClientWrapper>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </ClientWrapper>
  )
};