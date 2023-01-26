var toggle_button;
var big_wrapper;
var hamburger;

const main = document.querySelector("main");

function variables() {
  toggle_button = document.querySelector(".toggle-btn"); 
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger = document.querySelector(".hamburger");
}

variables();
var dark = false;

function toggleAnimation(){
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if(dark == true){
    clone.classList.remove('light');
    clone.classList.add('dark');
  }
  else{
    clone.classList.remove('dark');
    clone.classList.add('light');
  }
  clone.classList.add('copy');
  main.appendChild(clone);
  clone.addEventListener('animationend', () => {
    big_wrapper.remove();
    clone.classList.remove('copy')
    variables();
    events();
  });
}

function events() {
  toggle_button.addEventListener("click", toggleAnimation);
  hamburger.addEventListener("click",() => {
    big_wrapper.classList.toggle("active");
  });
}

events();