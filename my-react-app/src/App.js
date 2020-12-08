import React, {Fragment} from 'react';
import {movies} from "./movies";
import MoviePreview from "./MoviePreview";
import MovieDetails from "./MovieDetails";

function App() {
  //const [count, setCount] = React.useState(0);
  const [currentMovie, setCurrentMovie] = React.useState(null);

  return (
        <div style = {{margin: 40, textAlign: 'center'}}>
            <h1>Movie Information</h1>
            {
                movies.map((movie) => {
                    // some JS logic can go here
                    // React.Fragment is the same as Fragment, but you need to  destructure Fragment from the react import if you use just 'Fragment'
                    // <> and </> can also be used in place of <React.Fragment/> if you don't need to use a key

                    return (
                        <MoviePreview
                          key = {movie.title}
                          movie = {movie}
                          onClickFunction={setCurrentMovie}/>

                    )
                })
            }

            {
              currentMovie ?
                <MovieDetails currentMovie ={currentMovie}/>
                :
                <p>Select a movie to display its details</p>
            }
        </div>
    );
}

export default App;
