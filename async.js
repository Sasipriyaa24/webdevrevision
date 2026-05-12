setTimeout(()=>{
  console.log("Sasi")
},2000);

let even=new Promise((resolve,reject) => {
  let no=2;
  if (no%2===0) resolve("The NO is even");
  else reject("The no is odd"); 
}
)
even
.then((message)=> console.log("found"))
.catch((error)=> console.log("error"));
