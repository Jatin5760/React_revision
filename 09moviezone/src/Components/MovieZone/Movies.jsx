import React from "react";
import { movies } from "./data.js";
import { useState } from "react";

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);


  const filterByCatergory = (cat) => {
        setMovieList(movies.filter((data)=> data.category == cat))
  }

  return (
    <>
      <div className="my-3" style={{ width: "1000px", margin: "auto" }}>
        <div className="mx-auto text-center">
          <button onClick={()=>filterByCatergory('Action')} type="button" className="btn btn-primary mx-3">
            All
          </button>
          <button onClick={()=>filterByCatergory('Action')} type="button" className="btn btn-secondary mx-3">
            Action
          </button>
          <button onClick={()=>filterByCatergory('Thriller')} type="button" className="btn btn-success mx-3">
            Thriller
          </button>
          <button onClick={()=>filterByCatergory('Animation')} type="button" className="btn btn-danger mx-3">
            Animation
          </button>
          <button onClick={()=>filterByCatergory('Horror')} type="button" className="btn btn-warning mx-3"> 
            Horror
          </button>
          <button onClick={()=>filterByCatergory('Drama')} type="button" className="btn btn-info mx-3">
            Drama
          </button>
          <button onClick={()=>filterByCatergory('Sci-Fi')} type="button" className="btn btn-light mx-3">
            Sci-Fi
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          // gap: "2rem",
          textAlign: "center",
          width: "1300px",
          margin: "auto",
          marginTop: "1.5rem",
        }}
      >
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "280px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={data.poster_path}
                style={{
                  width: "200px",
                  borderRadius: "10px",
                  border: "1px solid yellow",
                  height: "275px",
                }}
              ></img>
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
