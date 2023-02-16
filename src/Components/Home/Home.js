import React, { useEffect, useState } from "react";
import { PortfolioProvider } from "../Context/Context";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navigation from "../Navigation/Navigation";
import Project from "../Project/Project";
import {
  aboutData,
  contactData,
  footerData,
  heroData,
  projectsData,
} from "../../Data/Data";

function Home() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Navigation></Navigation>
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </PortfolioProvider>
  );
}

export default Home;
