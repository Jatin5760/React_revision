import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Fetch_Data_Api = () => {
  const [apiData, setApiData] = useState([]);

  // Learn this syntax if you want to fetch API
  useEffect(() => {
    // Ye function asynchronous function hona chaiye
    const fetchDataFromAPI = async () => {

      const api = await fetch("https://jsonplaceholder.typicode.com/todos");
      
      // Api data ko json mai kardiya
      const data = await api.json();
      setApiData(data);
      console.log("my data = ", data);
    };

    fetchDataFromAPI();
  }, []);

  return (
    <div>
      {apiData.map((data) => (
        <div key={data.id} style={{
        backgroundColor: 'rgb(9, 5, 63)',
        margin: "10px",
        border: "2px solid yellow",
        borderRadius: "10px",
        textAlign:'center'
      }}>
          <h3>{data.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Fetch_Data_Api;
