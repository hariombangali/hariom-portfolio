// pages/index.js
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutCard from '../components/AboutCard';
import SkillsList from '../components/SkillsList';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutCard />
      <SkillsList />
      <ProjectCard />
      <Footer />
    </>
  );
}