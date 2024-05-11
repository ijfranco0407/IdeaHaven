var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}


function toggleAnswer(question) {
  question.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navigation = document.querySelector(".navigation ul");
  const overlay = document.querySelector(".overlay");

  hamburgerMenu.addEventListener("click", function() {
    navigation.classList.toggle("active");
    overlay.classList.toggle("active"); // Toggle overlay visibility
  });
});

events();


//update profile
let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function(){
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
}

//Update Bio 
document.addEventListener("DOMContentLoaded", function() {
  const bioInput = document.getElementById("bio-input");
  const updateBioBtn = document.getElementById("update-bio");

  // Load the bio from local storage if it exists
  const savedBio = localStorage.getItem("userBio");
  if (savedBio) {
      bioInput.value = savedBio;
  }

  updateBioBtn.addEventListener("click", function() {
      // Save the updated bio to local storage
      localStorage.setItem("userBio", bioInput.value);
      alert("Bio updated successfully!");
  });
});

