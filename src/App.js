import React , { Component } from 'react';

// class App extends Component {
//   render () {
//     // const greeting = "Hi!";
//     // const dom = <h1 className="foo">{greeting}</h1>;
//     // return dom;
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange = {() => {console.log("I am clicked")}}/>
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Hi!</div>
}

export default App;
