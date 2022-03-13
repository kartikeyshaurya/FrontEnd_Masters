const Pet = (props)=>{
    return React.createElement(
        "div", {}
, [
    React.createElement("h1", {}, props.name), 
    React.createElement("h2", {}, props.animal), 
    React.createElement("h3", {}, props.variety), 
])
}



const App= () => {
    return React.createElement(
        "div",
        {}, 
        [
            React.createElement("h1",{}, "Adopt me "), 
            ...[1,2,3,4].map((i) => React.createElement("h2",{}, i)),
            React.createElement(Pet, {
                name: "peper", 
                animal: "bird", 
                breed: "cocktiel"
            }), 
            React.createElement(Pet, {
                name: "Jinnie ", 
                animal: "dog", 
                breed: "GreatDen"
            }), 
            React.createElement(Pet, {
                name: "nancy", 
                animal: "dog", 
                breed: "German Shefard"
            }), 
            
        ]
            );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));