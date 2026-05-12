function check(age){
  if(age>18){
    console.log("Eligible");
  }
  else
    throw new Error("not eligible");
}

try{
  check(16);
}
catch(error){
  console.log(error.message);
}
finally{
  console.log("Completed");
}