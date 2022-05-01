console.log("hello world")

function printer(){
    console.log("Executes after 2 seconds only one time ")
}

setTimeout(printer, 2000)

function printer2(){
    console.log("executed  intervally")
}
//setInterval(printer2, 2000)

//callbacks 
function greet(name){
    console.log(name) ; 
}

function greet2(f){
    // the parameter is a function
    const name = "karti" 
    f(name)
}
greet2(greet)


// promises 

