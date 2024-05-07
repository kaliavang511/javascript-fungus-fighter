// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 0
let yourAp = 100
//state variable


function onReady() {
document.querySelector('#submit-button').addEventListener('click', apCount);

}



//Event handler
function apCount(event) {
    event.preventDefault();
    console.log("apCount works")

    //funxtion not wokring, not sure why


 let apDiv = document.getElementById("hp-text").text
  apDiv.innerHTML = yourAp

  // getting get hp text so everytime the button iscliked, it'll go down by 1 count
}

fungusHP -- 

apCount()


//need a if statement (if fungusHP > youAP you lose ) 


