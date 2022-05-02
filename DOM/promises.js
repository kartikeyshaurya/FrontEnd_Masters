// creating a promises 
// const promises = new Promise((resolve, reject)=>{
//     setTimeout(()=> {resolve("NOt bringing") ,5000 })
// })

// const onfulfillment = (result) => {
//     console.log(result)
//     console.log("set up the table to eat tacos ")
// }
// const onRejection = (error) => {
//     console.log(error)
//     console.log("start cooking pasta")
// }

// promises.then(onfulfillment)
// promises.catch(onRejection)

// var promise = new Promise(function(resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "geeksforgks"
//     if(x === y) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
     
//   promise.
//       then(function () {
//           console.log('Success, You are a GEEK');
//       }).
//       catch(function () {
//           console.log('Some error has occurred');
//       });

// const promise1 =  Promise.resolve(3); 
// const promise2 = 42 ; 
// const promise3 = new Promise((resolve, reject)=> {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3].then((values)=>{
//   console.log(values);
// })); 

// const promise1 =  Promise.resolve(3); 
// const promise2 = 42 ; 
// const promise3 = new Promise((resolve, reject)=> {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.allSettled([promise1, promise2, promise3]).then((values)=>{
//   console.log(values);
// }); 

const promise1 = new Promise((resolve,reject)=> {
  setTimeout(resolve, 500, "one") ;
});

const promise2 = new Promise((resolve, reject)=> {
  setTimeout(resolve, 100, "Two");
});
Promise.race([promise1, promise2]).then((value)=>{
  console.log(value); 
});

