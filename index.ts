#! /usr/bin/env node
import inquirer from "inquirer"
let splitData :string[]; // this array will hold the splitted words
let splitCharacter :string[]; // this array will hold splitted characters
let totalWords:number=0;
let totalCharacters:number=0;
let excludeSpecialCharaters=new RegExp('^[a-zA-Z]*$');// it is a regular expression for all the alphabets
let userInput=await inquirer.prompt({

    name:"submittedText",
    type:"input",
    message:"Eneter the Text you want to inspect"
});
let data=userInput.submittedText;
console.log("You enetered::::",data);
       splitData=data.split(" ");// Split function divides text based on given criteria
        totalWords=splitData.length; 
    console.log("Total words are:",totalWords);
   splitCharacter=data.split("");

    //console.log(splitCharacter);
    for (let i=0;i<splitCharacter.length;i++){
         
        if(excludeSpecialCharaters.test(splitCharacter[i])) //regex has abuilt in function test
        totalCharacters++;
    }

console.log("Total Charcters are:",totalCharacters);


