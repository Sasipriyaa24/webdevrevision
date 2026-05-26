//1.depositing the money
//2.have to knpow the no of lines they want to bet on
//3.Collect the bet amount
//4.Spin the Slot machine
//5.check if the use won
//6.Give the users there winings
//7.play again
const prompt=require("prompt-sync")();

const rows=3;
const columns=3;
const SYMBOL_COUNT={
  "A":7,
  "B":5,
  "C":10,
  "D":5
};
const SYMBOL_COUNT={
  "A":2,
  "B":3,
  "C":4,
  "D":6
};
const deposit=() => {
  while(true){
  const depositAmount=prompt("Enter the deposit amount: ");
  const numberDepositAmount=parseFloat(depositAmount);
  if(isNaN(numberDepositAmount) || numberDepositAmount<=0){
    console.log("Invalid Amount Try again");
  }
  else{
    return numberDepositAmount;
  }
}
}
const noOfLines=()=>{
  while(true){
    const line=prompt("How many lines do you want to Bet On (1-3): ");
    const numberOfLines=parseFloat(line);
    if(isNaN(numberOfLines) || numberOfLines<=0 || numberOfLines>3){
      console.log("You must bet on atleast one line if you want to spinn the Wheel");
    }
    else{
      return numberOfLines;
    }
  }
}
const getBet=(balance,line)=>{
  while(true){
    const bet=prompt("Enter the Bet Amount per line : ");
    const numberBet=parseFloat(bet);
    if(isNaN(numberBet) || numberBet>balance/line || numberBet<0){
      console.log("You must Enter the Correct AMount");
    }
    else{
      return numberBet;
    }
  }
}

const spin=()=>{
  const symbols=[];
  for()
}
let balance=deposit();
const line=noOfLines();
const bet=getBet(balance,line);