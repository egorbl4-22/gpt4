import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import EarlyAccess from "../components/EarlyAccess";
import StartExplore from "../components/StartExplore";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section early_access">
        <EarlyAccess />
      </section>
      <section className="section start_explore">
        <StartExplore />
      </section>
      <section className="section blog">
        <Blog />
      </section>
      <section className="section footer">
        <Footer />
      </section>
    </>
  );
};

export default Home;