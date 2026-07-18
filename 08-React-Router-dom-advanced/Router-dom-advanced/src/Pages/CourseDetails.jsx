// import React from 'react'

import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const params = useParams();

  return (
    <div className="flex text-5xl text-white place-content-center h-screen">
      <h1 className="flex text-center items-center underline">
        {params.courseId} Course Details Page
      </h1>
    </div>
  );
};

export default CourseDetails;
