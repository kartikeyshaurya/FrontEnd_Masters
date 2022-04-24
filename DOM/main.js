// Examine the Document Object 

// console.dir(document)
// console.log(document.domain);
// console.log(document.URL); 
// console.log(document.title); 
// document.title = 123 ; 
// console.log(document.title); 
// console.log(document.body);
// console.log(document.all) ; 
// console.log(document.forms);
// console.log(document.links); 

console.log(document.images)

// Selector 
// GET ELEMENT BY ID 

console.log(document.getElementById("header-title")) ; 
var headertitle = document.getElementById("header-title"); 
console.log(headertitle)
headertitle.textContent = "Hello" ; 
