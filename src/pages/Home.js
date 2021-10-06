import React from "react";

import Header from "../components/Home/Header";
import Slider from "../components/Home/Slider";
import History from "../components/Home/History";
import ProjectsCompleted from "../components/Home/ProjectsCompleted";
import Services from "../components/Home/Services";
import ContactUs from "../components/Home/ContactUs";
import Projects from "../components/Home/Projects";
import Executive from "../components/Home/Executive";
import Testimonials from "../components/Home/Testimonials";
import Posts from "../components/Home/Posts";
import Contacts from "../components/Home/Contacts";
import Map from "../components/Home/Map";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Slider />
      <History />
      <ProjectsCompleted />
      <Services />
      <ContactUs />
      <Projects />
      <Executive />
      <Testimonials />
      <Posts />
      <Contacts />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
