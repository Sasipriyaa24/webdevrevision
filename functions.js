//named fn
function add(x,y){
  return x+y;
}
let b2=add(10,20);
console.log(b2); 

//anonymous fn
let fun=function(x,y){
  return x+y;
};
console.log(fun(30,40));

//arrow fn
let n=(a,b) => {
  return a+b;
}
console.log(n(10,20));

function c1(num){
  console.log(num);
}
function c2(num){
  c1(num);
}
c2(5);