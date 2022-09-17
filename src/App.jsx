import { useState, useEffect } from "react";
import { Menu } from "./components/menu";
import { Header } from "./components/header";
import { LiensUtiles } from "./components/liensUtiles";
import { APropos } from "./components/aPropos";
import { Actualites } from "./components/actualites";
import { Gallery } from "./components/gallery";
import { Avis } from "./components/avis";
import { Equipe } from "./components/equipe";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Menu />
      <Header data={landingPageData.Header} />
      <APropos data={landingPageData.APropos} />
      <Actualites data={landingPageData.Actualites} />
      <Gallery data={landingPageData.Gallery}/>
      <LiensUtiles data={landingPageData.LiensUtiles} />
      <Equipe data={landingPageData.Equipe} />
      <Avis data={landingPageData.Avis} />
      <Contact data={landingPageData.Contact} />
      <Footer/>
    </div>
  );
};

export default App;
