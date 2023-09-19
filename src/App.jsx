import React from 'react';
import ContainerTop from './Components/Top/Container-top';
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';
import Aboutme from './Components/About Me/About-me';
import WorkExperience from './Components/Work Experience/Work-experience';

function App() {

  return (
    <>
      <ContainerTop />
      <Aboutme />
      <WorkExperience />
      <Carousel />
      <Footer />
    </>
  )
}

export default App
