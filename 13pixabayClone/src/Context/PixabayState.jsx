import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([]);

  const api_key = "50393482-19928b06db9ea7641826b49e6";
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=london&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data.hits);
    };
    fetchData();
  }, []);

  return (
    <div>
      <PixabayContext.Provider value={{ imageData }}>
        {props.children}
      </PixabayContext.Provider>
    </div>
  );
};

export default PixabayState;
