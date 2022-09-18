import { useState, useEffect } from "react";
import { Menu } from "./components/menu";
import { Header } from "./components/header";
import { LiensUtiles } from "./components/liensUtiles";
import { APropos } from "./components/aPropos";
import { Actualites } from "./components/actualites";
import { Gallery } from "./components/gallery";
import { Avis } from "./components/avis";
import { Equipe } from "./components/equipe";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [dataJsonParam, setDataJsonParam] = useState({});
  useEffect(() => {
    setDataJsonParam(JsonData);
  }, []);

  return (
    <div>
      <Menu />
      <Header data={dataJsonParam.Header} />
      <APropos data={dataJsonParam.APropos} />
      <Actualites data={dataJsonParam.Actualites} />
      <Gallery data={dataJsonParam.Gallery}/>
      <LiensUtiles data={dataJsonParam.LiensUtiles} />
      <Equipe data={dataJsonParam.Equipe} />
      <Avis data={dataJsonParam.Avis} />
      <Footer/>
    </div>
  );
};

export default App;
