// JavaScript Document
// Adding a reference to the main, submit button, body and text element  
let main = document.querySelector('main');
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body'); 
let input = document.querySelector('input[type="text"]');

// Adsding an eventListener called on click event that will display the para message when user hit the button
submitButton.addEventListener('click', function(e) { 
  let personName = input.value; //declaring the variabvke to get name of the user
  let para = document.createElement('p');// target element that will display the greeting message 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; // message content
// append Child the para under the main
  main.appendChild(para);
  body.setAttribute('class', 'meow'); // Setting a class attribute to the body 
  console.log('=^..^='); 
  e.preventDefault();// maintain the continuity of the function i.e. the function doesnot end.
});
