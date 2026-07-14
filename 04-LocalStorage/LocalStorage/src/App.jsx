// import React from 'react'

const App = () => {
  const user = {
    username: "Vishal",
    age: 18,
    city: "Ballia",
  };

  localStorage.setItem("user", JSON.stringify(user));
  console.log(user);
  // console.log(typeof(user))

  const usera = JSON.parse(localStorage.getItem("user"));
  console.log(usera);
  console.log(typeof usera);

  // const user = localStorage.setItem('user','Vishal Ravan')
  // const age = localStorage.setItem('age',18)

  // localStorage.clear()
  // sessionStorage.setItem('user','vishal')

  // const user = localStorage.getItem('user')
  // console.log(user)
  // const age = localStorage.getItem('age')
  // console.log(age)

  // localStorage.removeItem('user')
  // localStorage.removeItem('age')

  return <div>App</div>;
};

export default App;
