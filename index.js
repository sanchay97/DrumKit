var drum_list = document.querySelectorAll(".drum");

var drum_letters_list = ["w", "a", "s", "d", "j", "k", "l"];

function craeteAudioObject(sound) {
  var audio = new Audio(sound + ".mp3");
  audio.play();
}

function generateSound(letter) {
  switch (letter) {
    case "w":
      craeteAudioObject("tom-1");
      break;
    case "a":
      craeteAudioObject("tom-2");
      break;
    case "s":
      craeteAudioObject("tom-3");
      break;
    case "d":
      craeteAudioObject("tom-4");
      break;
    case "j":
      craeteAudioObject("snare");
      break;
    case "k":
      craeteAudioObject("crash");
      break;
    case "l":
      craeteAudioObject("kick_bass");
      break;
    default: console.log(letter);

  }
}

for (var i = 0; i < drum_list.length; i++) {
  drum_list[i].addEventListener("mousedown", function() {
    this.style.color = "#000";
    generateSound(this.textContent);
    buttonAnimation("." + this.textContent);
  });

  drum_list[i].addEventListener("mouseup", function() {
    this.style.color = "#DA0463";
    remButtonAnim("." + this.textContent);
  });
}


document.addEventListener("keydown", function(event) {
  if (drum_letters_list.findIndex(function(element) {
      return element == event.key;
    }) != -1) {
    document.querySelector("." + event.key).style.color = "#000";
    generateSound(document.querySelector("." + event.key).textContent);
    buttonAnimation("." + event.key);
  }
});

document.addEventListener("keyup", function(event) {
  if (drum_letters_list.findIndex(function(element) {
      return element == event.key;
    }) != -1) {
    document.querySelector("." + event.key).style.color = "#DA0463";
    remButtonAnim("." + event.key);
  }
});

function buttonAnimation(buttonpressed) {
  var activebutton = document.querySelector(buttonpressed);
  activebutton.classList.add("pressed");
}

function remButtonAnim(buttonpressed) {
  var activebutton = document.querySelector(buttonpressed);
  activebutton.classList.remove("pressed");
}
