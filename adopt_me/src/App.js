import React from "react" ; 
import ReactDOM from "react-dom" ; 
window.React = React
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt me "),
//     ...[1, 2, 3, 4].map((i) => React.createElement("h2", {}, i)),
//     React.createElement(Pet, {
//       name: "peper",
//       animal: "bisadfrd",
//       breed: "cocktiel",
//     }),
//     React.createElement(Pet, {
//       name: "Jinnie ",
//       animal: "dog",
//       breed: "GreatDen",
//     }),
//     React.createElement(Pet, {
//       name: "nancy",
//       animal: "dog",
//       breed: "German Shefard",
//     }),
//   ]);
// };

const App = () =>  {
  return(
  <div>
  <h1> Adopt me </h1>
  <SearchParams/>
  
  </div>
  );
};


//ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App/>, document.getElementById("root"));
