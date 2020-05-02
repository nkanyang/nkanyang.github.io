const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("async done!");
    resolve({username:"jessie"})
  },3000);
})

promise.then((user)=>{
  console.log("then:");
  console.log(user);
})