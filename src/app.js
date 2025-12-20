import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

let domainNames = [];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  pronouns.forEach((pronoun) => {
    adjs.forEach((adj) => {
      nouns.forEach((noun) => {
        domainNames.push(pronoun + adj + noun + ".com")
      })
    })
  })

  console.log("------------------");
  console.log("Possible domain names: ");

  domainNames.forEach((name) => {console.log(name)})

  
  
};
