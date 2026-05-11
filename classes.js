/*class Csd{
  constructor(name,rollno){
    this.name=name;
    this.rollno=rollno;
  };
  intro(){
    console.log(`hello i am ${this.name} and my rollno ${this.rollno}`);
  };
}

let per1=new Csd("Sasi",4424);
let per2=new Csd("Tanu",4423);

per1.intro();
per2.intro();


//private 
class Dev{
  #framework;
  constructor(framework){
    this.#framework=framework;
  }
  #showDetails(){
    return this.#framework;
  }
  show(){
    console.log(this.#showDetails());
  }
};

let f1=new Dev("React");
let f2=new Dev("Nextjs");
f1.show();
f2.show();
*/

//protected


class One{
  constructor(name){
    this.name=name;
    console.log("One has Called")
  }
}
class Two extends One{
  constructor(name,age){
    super(name);
    this.age=age;
  }
  show(){
    console.log(this.name,this.age);
  }
}
let a22=new Two("Sasi",20);
let b11=new Two("Pooji",20);
a22.show();
b11.show();