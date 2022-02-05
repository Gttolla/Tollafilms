import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import "./App.css"
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

function App(){

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState();

    useEffect(()=>{
      const loadAll = async () => {
        let list = await Tmdb.getHomeList();
        setMovieList(list);

        let originals = list.filter(i=>i.slug === 'originals'); 
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieinfo(chosen.id, 'tv')
        setFeatureData(chosenInfo);

      }

      loadAll();
    }, []);

  return(
    <div className="page">
        
      <Header/>

      {featureData&& 
        <FeatureMovie item={featureData}/>
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>

      </footer>
    </div>
  );
} 

export default App;