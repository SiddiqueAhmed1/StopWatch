const button = document.querySelector('.time button');
const button2 = document.querySelector('.time button.stop');
const button3 = document.querySelector('.time button.reset');
const second = document.querySelector('h2.second');


//  let take value
let counter;
let count = 0;

// button onclick
button.onclick = () => {
   counter = setInterval(() => {
      count++
      second.innerHTML = count;
   }, 1000)
  
}

button2.onclick = () => {
   clearInterval(counter);
   
}

button3.onclick = () => {
   clearInterval(counter);
   
   count = 0;
   second.innerHTML = count;
 
}
