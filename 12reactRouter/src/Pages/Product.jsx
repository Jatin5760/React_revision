import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const arr = [
    {
      id: "MERN001",
      course_name: "MERN_Stack",
      price: 10000,
      duration: "5 Months",
    },
    {
      id: "JAVA002",
      course_name: "Java Full Stack",
      price: 20000,
      duration: "5 Months",
    },
    {
      id: "PY0102",
      course_name: "Python Full Stack",
      price: 5000,
      duration: "5 Months",
    },
    {
      id: "REACT1099",
      course_name: "React Js",
      price: 5000,
      duration: "5 Months",
    },
  ];
  return (
    <div>
      <h1> Learning Dynamic Routing</h1>
      <ul>
        {arr.map((data) => (
          <div key={data.id}>
            <li>
              <Link to={`/courses/${data.id}`}>{data.course_name}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Product;
