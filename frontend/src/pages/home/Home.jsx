import React from "react";
import { Hero, BlogSection, Blogi, Footer } from "../../components";
import "./Home.css";

import { images } from "../../constant";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <BlogSection />

      <Footer
        siteLogo={images.logo}
        githubIcon={images.githubIcon}
        instagramIcon={images.instagramIcon}
        discordIcon={images.discordIcon}
        linkedinIcon={images.linkedinIcon}
      />
    </div>
  );
};

export default Home;
