let obj={
  "name":"sasi",
  age:19,
  fun:add
};
function add(){
  console.log(obj.name,obj.age)
}
console.log(obj.fun());

console.log(obj.age);
obj.age=20;
console.log(Object.keys(obj).length);
console.log(typeof obj==="object" && obj!=null);
delete obj.age;
console.log(obj);

function greet(name,age){
  this.name='sasi';
  this.age=20;
  console.log(`hello ${name} ${age}`);
}
greet();

