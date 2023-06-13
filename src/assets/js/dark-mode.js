const modeSwitch = document.getElementById('mode-switch');
const bodyElement = document.body;
modeSwitch.addEventListener('click', () => {
  bodyElement.classList.toggle('dark-mode');
  if (bodyElement.classList.contains('dark-mode')) {

  } else {

  }
});

var elements = document.getElementsByClassName("change-font-size");
var increaseBtn = document.getElementById("increaseBtn");
var decreaseBtn = document.getElementById("decreaseBtn");
var defaultBtn = document.getElementById("defaultBtn");
var defaultFontSize = 16;
var fontSize = 12;

increaseBtn.addEventListener("click", function() {
  if (fontSize < 18) {
    fontSize += 1;
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = fontSize + "px";
    }
  }
});

decreaseBtn.addEventListener("click", function() {
  if (fontSize > 10) {
    fontSize -= 1;
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = fontSize + "px";
    }
  }
  defaultBtn.addEventListener("click", function() {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = defaultFontSize + "px";
    }
    fontSize = defaultFontSize;
  });
});

