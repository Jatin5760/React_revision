import React, { useEffect, useState } from "react";

const Meal = () => {
    
    const [meal, setMeal] = useState(second)
  

    useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
      );

      const data = await api.json();
      console.log(data);
    };

    fetchDataFromAPI();
  }, []);

  return <div>hii</div>;
};

export default Meal;
