const todoMenu = document.querySelector("#todo-menu");
const musicMenu = document.querySelector("#music-menu");
const todoDiv = document.querySelector("#todo-container");
const musicDiv = document.querySelector("#music-container");

function switchTodo(){
  todoMenu.classList.add("active");
  musicMenu.classList.remove("active");

  todoDiv.classList.remove("hidden");
  musicDiv.classList.add("hidden");
}
function switchMusic(){
  todoMenu.classList.remove("active");
  musicMenu.classList.add("active");

  todoDiv.classList.add("hidden");
  musicDiv.classList.remove("hidden");
}

todoMenu.addEventListener("click", switchTodo);
musicMenu.addEventListener("click", switchMusic);


const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".music-card");

pads.forEach((pad, index) => {
  pad.addEventListener('click', function(){
    pads.forEach(inx => {
      inx.classList.remove("playing");
    })
    sounds.forEach(inx => {
      inx.pause();
    });
    if(sounds[index]){
      sounds[index].currentTime = 0;
      sounds[index].play();
      pads[index].classList.add("playing");
    }
  });
});