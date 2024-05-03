import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Program from "./component/Program/Program";
import Title from "./component/Title/Title";
import About from "./component/About/About";
import Campus from "./component/Campus/Campus";
import Testimonial from "./component/Testimonial/Testimonial";
import Contact from "./component/Contact us/Contact";
import Footer from "./component/Footer/Footer";
import VideoPlayer from "./component/Videoplayer/VideoPlayer";

const App = () => {
  const [play, setPlays] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title Subtitle="Our Program" Title="What We Offer" />
        <Program />
        <About setPlays={setPlays} />
        <Title Subtitle="gallery" Title="Campus Photos" />
        <Campus />

        <Title Subtitle="TESTIMONIALS" Title="What Student Says" />
        <Testimonial />
        <Title Subtitle="CONTACT US" Title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer play={play} setPlays={setPlays} />
    </div>
  );
};

export default App;
