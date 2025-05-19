import React from "react";
import { Link, useParams } from "react-router-dom";

const Course_Details = () => {
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

  console.log(useParams());
  const { id } = useParams();

  const course_detail = arr.filter((data) => data.id == id);
  console.log(course_detail);

  return (
    <>
      <div>
        <h2>Course_Details</h2>
        <h3>Course Id = {id}</h3>

        <h2>Course Name = {course_detail[0].course_name} </h2>
        <h2>Course Name = {course_detail[0].duration} </h2>
        <h2>Course Name = {course_detail[0].price} </h2>

        <button>
          <Link
            to={"/courses"}
            style={{ textDecoration: "none", color: "black" }}
          >
            All Course
          </Link>
        </button>
      </div>
    </>
  );
};

export default Course_Details;
