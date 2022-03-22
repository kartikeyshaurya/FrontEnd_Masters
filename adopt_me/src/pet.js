import React from "react";

// const Pet = (props) => {
//     return React.createElement("div", {id = "brah"}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h3", {}, props.variety),
//     ]);
//   };
  
const Pet = (props) =>{
  return(
    <div id = "brah">
      <h2>{props.name}</h2>
      <h2>{props.animals}</h2>
      <h3>{props.breed}</h3>
    </div>
  );
}

export default Pet ; 