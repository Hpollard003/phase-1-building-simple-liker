// Defining text characters for the empty and full hearts for you to use later.// Your JavaScript code goes here!
const EMPTY_HEART = '🤍'
const FULL_HEART = '💙'

const error = document.getElementById('modal')
error.setAttribute('class','hidden')

const heartTransplant = document.getElementsByClassName('like-glyph')
for (i = 0; i < heartTransplant.length; i++) {
  heartTransplant[i].addEventListener('click', ui)
}

function ui(event) {
  const swap = event.target
  mimicServerCall()
  .then(()=>{
    if (swap.innerText === EMPTY_HEART){
      swap.innerText = FULL_HEART;
      swap.className = '';
    }
    else {
      swap.className = '';
      swap.innerText = EMPTY_HEART;
}  })
.catch((err) => {
  
  error.removeAttribute("class")
  let h2 = error.querySelector("h2")
  h2.innerText = "Weird that didnt work. One sec. Okay give her a go!!"
  setTimeout(() => {
    error.setAttribute('class', 'hidden')
  }, 4000)
})  
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
