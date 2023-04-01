import { useState, useEffect } from "react";

import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";

const App = () => {

  const [movieList, setMovieList] = useState([])
  useEffect(() => {
    //when the screen loads to do it: 
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, [])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items || []} />

        ))}
      </section>

    </div>
  )
}

export default App