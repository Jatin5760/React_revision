import React from "react";

const FilterProduct = () => {
  const product = [
    { id: 1, title: "iphone - 16", category: "Mobile", price: 90000 },
    { id: 2, title: "HP probook", category: "Laptop", price: 90000 },
    { id: 3, title: "MI Tablet", category: "Tablet", price: 20000 },
    { id: 4, title: "Sony Camera", category: "Camera", price: 290000 },
    { id: 5, title: "S-24 Ultra", category: "Mobile", price: 90000 },
  ];

  const filteredData = product.filter((data) => data.category == "Mobile");
  console.log(filteredData);

  return (
    <div>
      {filteredData.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <p>{data.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterProduct;
