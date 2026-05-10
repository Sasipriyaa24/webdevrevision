/*let a1=[10,'sasi',20];
console.log(a1);
a1.push("tanu");
a1.unshift("keerthi");

console.log(a1);
a1.pop();
a1.shift();
a1.splice(1,1);
console.log(a1);
a1.forEach(function fn(i,val){
  console.log(i,val);
})
console.log(typeof a1);
let b=a1.toString();
console.log(b);
let c=Array.isArray(a1);
console.log(c); */
let a=[10,20,30,40];
let b=a.map(sasi);
function sasi(){
  return a;
}
console.log(b);
console.log(`i am ${a}`);

let str='i am Sasi';
console.log(str);
let c=str.replace('Sasi','nammu');
console.log(c);