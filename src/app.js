/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // 1. Create the "parts of the sentence" arrays
  let who = ["The dog", "My grandma", "The mailman", "The bird"];
  let action = ["ate", "threw away", "mailed", "stole"];
  let what = ["my homework", "my cellphone", "the car"];
  let when = ["yesterday", "this morning", "last week !"];
  // 2. combine random elements in each array to form a sentence
  // create a function to randomly select an element in an array
  function selectArrayElement(arrayName, arrayLength) {
    // 1. Generate a random number based on the length of arrayName
    let randomNumber = Math.floor(Math.random() * arrayLength);

    // 2. Assign an element from the arrayName to be returned
    let selectedElement = arrayName[randomNumber];
    return selectedElement;
  }

  let randomWho = selectArrayElement(who, who.length);
  let randomAction = selectArrayElement(action, action.length);
  let randomWhat = selectArrayElement(what, what.length);
  let randomWhen = selectArrayElement(when, when.length);

  // string templates
  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  /* 3. print the excuse on the terminal, and then in the browser
  console.log(excuse); */

  //retrieving html elements to manipulate
  const htmlElement = document.querySelector(".excuse");
  htmlElement.innerHTML = excuse;
};
