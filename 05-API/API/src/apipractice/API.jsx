// import React from 'react'
import axios from "axios";
const API = () => {
  const getData = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(data);
  };

  // const getData = async () =>{
  //  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  //  const data = await response.json();

  //  console.log(data)
  // }

  //  async function getData() {
  //   console.log('data is fetch successfully.')
  //    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json()
  //    console.log(data)
  // }
  return (
    <div className="p-20">
      <button className="bg-gray-400 p-4 rounded-2xl" onClick={getData}>
        get data
      </button>
    </div>
  );
};

export default API;
