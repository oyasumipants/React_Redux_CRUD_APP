import React , { Component } from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Taro", age: 5},
    { name: "Taro"}
  ]
  return (
    <div>
      {
        profiles.map((prifile, index) => {
          return <User name={prifile.name} age={prifile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi! I am {props.name}, and {props.age} years old</div>
}

User.defaultProps = {
  age: 1
}

export default App;
