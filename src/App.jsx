import React from 'react';
import ContainerTop from './Components/Top/Container-top';
import CarouselCertifications from './Components/CarouselCertifications/Carousel';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';
import Aboutme from './Components/About Me/About-me';
import WorkExperience from './Components/Work Experience/Work-experience';
import SectionCards from './Components/ProjectsGit/SectionCards';
import Education from './Components/Education/education';

function App() {

  return (
    <>
      <ContainerTop />
      <Aboutme />
      <Education />
      <WorkExperience />
      <CarouselCertifications />
      <Carousel />
      <SectionCards />
      <Footer />
    </>
  )
}

export default App
