// var modal = document.getElementById("myModal");
// var div = document.getElementById("myDiv");

// // Get the close button element
// var close = document.getElementsByClassName("close")[0];

// // When the user clicks the div, display the modal
// div.onclick = function() {
//   console.log('div1');
//   modal.style.display = "block";
// }

// // When the user clicks the close button, hide the modal
// close.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, hide it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     console.log(event.target,'event1');
//     modal.style.display = "none";
//   }
// }


// var modal1 = document.getElementById("myModal1");
// var div1 = document.getElementById("myDiv1");

// // Get the close button element
// var close = document.getElementsByClassName("close")[1];

// // When the user clicks the div, display the modal
// div1.onclick = function() {
//     console.log('div2');
//   modal.style.display = "block";
// }

// // When the user clicks the close button, hide the modal
// close.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, hide it
// window.onclick = function(event) {
//   console.log(event.target,'event 2' );
//   if (event.target == modal1) {
//     modal.style.display = "none";
//   }
// }

// // modal 3

// var modal2 = document.getElementById("myModal2");
// var div2 = document.getElementById("myDiv2");

// // Get the close button element
// var close = document.getElementsByClassName("close")[2];

// // When the user clicks the div, display the modal
// div2.onclick = function() {
//     console.log('div3');
//   modal.style.display = "block";
// }

// // When the user clicks the close button, hide the modal
// close.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, hide it
// window.onclick = function(event) {
//   console.log(event.target,'event 3');
//   if (event.target == modal2) {
//     modal.style.display = "none";
//   }
// }
var modal1 = document.getElementById("myModal1");
var div1 = document.getElementById("myDiv1");
var close1 = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById("myModal2");
var div2 = document.getElementById("myDiv2");
var close2 = document.getElementsByClassName("close")[1];

var modal3 = document.getElementById("myModal3");
var div3 = document.getElementById("myDiv3");
var close3 = document.getElementsByClassName("close")[2];

var modal4 = document.getElementById("myModal4");
var div4 = document.getElementById("myDiv4");
var close4 = document.getElementsByClassName("close")[3];

var modal5 = document.getElementById("myModal5");
var div5 = document.getElementById("myDiv5");
var close5 = document.getElementsByClassName("close")[4];

div1.onclick = function() {
  modal1.style.display = "block";
}

div2.onclick = function() {
  modal2.style.display = "block";
}
div3.onclick = function() {
  modal3.style.display = "block";
}

div4.onclick = function() {
  modal4.style.display = "block";
}

div5.onclick = function() {
  modal5.style.display = "block";
}

close1.onclick = function() {
  modal1.style.display = "none";
}

close2.onclick = function() {
  modal2.style.display = "none";
}
close3.onclick = function() {
  modal3.style.display = "none";
}
close4.onclick = function() {
  modal4.style.display = "none";
}
close5.onclick = function() {
  modal5.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

// dark mode


