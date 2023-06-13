
    // var bigimage = $("#big");
    // var thumbs = $("#thumbs");
    // var syncedSecondary = true;
    // bigimage
    //   .owlCarousel({
    //   items: 1,
    //   autoplay: true,
    //   loop: true,
    //   responsiveRefreshRate: 200,
     
    // })
    //   .on("changed.owl.carousel", syncPosition);
  
    // thumbs
    //   .on("initialized.owl.carousel", function() {
    //   thumbs
    //     .find(".owl-item")
    //     .eq(0)
    //     .addClass("current");
    // })
    //   .owlCarousel({
    //   items:10,
    //   smartSpeed: 300,
    //   slideSpeed: 800,
    //   slideBy: 3,
    //   responsiveRefreshRate: 100
    // })
    //   .on("changed.owl.carousel", syncPosition2);
  
    // function syncPosition(el) {
    //   //if loop is set to false, then you have to uncomment the next line
    //   //var current = el.item.index;
  
    //   //to disable loop, comment this block
    //   var count = el.item.count - 1;
    //   var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
  
    //   if (current < 0) {
    //     current = count;
    //   }
    //   if (current > count) {
    //     current = 0;
    //   }
    //   //to this
    //   thumbs
    //     .find(".owl-item")
    //     .removeClass("current")
    //     .eq(current)
    //     .addClass("current");
    //   var onscreen = thumbs.find(".owl-item.active").length - 1;
    //   var start = thumbs
    //   .find(".owl-item.active")
    //   .first()
    //   .index();
    //   var end = thumbs
    //   .find(".owl-item.active")
    //   .last()
    //   .index();
  
    //   if (current > end) {
    //     thumbs.data("owl.carousel").to(current, 100, true);
    //   }
    //   if (current < start) {
    //     thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    //   }
    // }
  
    // function syncPosition2(el) {
    //   if (syncedSecondary) {
    //     var number = el.item.index;
    //     bigimage.data("owl.carousel").to(number, 100, true);
    //   }
    // }
  
    // thumbs.on("click", ".owl-item", function(e) {
    //   e.preventDefault();
    //   var number = $(this).index();
    //   bigimage.data("owl.carousel").to(number, 300, true);
    // });
    

//     var lastScrollTop = 0;
//   window.addEventListener("scroll", function(){
//    var st = window.pageYOffset || document.documentElement.scrollTop;
//     console.log(st,'scrol top before');
//    if (st < lastScrollTop){
//     console.log(st,'scroll top');
//       document.querySelector(".floating-social").classList.add("show");
//    } else {

//       document.querySelector(".floating-social").classList.remove("show");
//    }
//    lastScrollTop = st <= 0 ? 0 : st;
// }, false);

// new condition
// const sticky = floating.offsetTop;
// console.log(sticky,'stickyy');

// var lastScrollTop = 0;
// window.addEventListener("scroll", function(){
//  var st = window.pageYOffset || document.documentElement.scrollTop;
//   console.log(window.pageYOffset,'scrol top before');
//  if (st < lastScrollTop){
//   console.log(st,'scroll top');
//     document.querySelector(".floating-social").classList.remove("show");
//  } else if(st > lastScrollTop) {
//     document.querySelector(".floating-social").classList.remove("show");
//  }else{
//   document.querySelector(".floating-social").classList.add("show");
//  }
//  lastScrollTop = st <= 0 ? 0 : st;
// }, false);
// new logic

// var prevScrollpos = window.pageYOffset;
// var floatingSocial = document.querySelector('.floating-social');
// var isFloatingSocialVisible = true;

// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     // scrolling up
//     if (isFloatingSocialVisible) {
//       floatingSocial.classList.add('hide');
//       isFloatingSocialVisible = false;
//     }
//   } else if (prevScrollpos < currentScrollPos) {
//     // scrolling down
//     if (isFloatingSocialVisible) {
//       floatingSocial.classList.add('hide');
//       isFloatingSocialVisible = false;
//     }
//   } else {
//     // not scrolling
//     if (!isFloatingSocialVisible) {
//       floatingSocial.classList.remove('hide');
//       isFloatingSocialVisible = true;
//     }
//   }

//   prevScrollpos = currentScrollPos;
// }
var prevScrollpos = window.pageYOffset;
var floatingSocial = document.querySelector('.floating-social');
var isFloatingSocialVisible = true;
var scrollTimer;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    // scrolling up
    if (isFloatingSocialVisible) {
      floatingSocial.classList.add('hide');
      isFloatingSocialVisible = false;
    }
  } else if (prevScrollpos < currentScrollPos) {
    // scrolling down
    if (isFloatingSocialVisible) {
      floatingSocial.classList.add('hide');
      isFloatingSocialVisible = false;
    }
  }

  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(function() {
    // not scrolling
    if (!isFloatingSocialVisible) {
      floatingSocial.classList.remove('hide');
      isFloatingSocialVisible = true;
    }
  }, 200);

  prevScrollpos = currentScrollPos;
}



// var prevScrollpos = window.pageYOffset;
// console.log(prevScrollpos,'prevscroll');
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   console.log(currentScrollPos,'curentcroll');
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector('.floating-social').classList.remove('hide');
//   } else {
//     document.querySelector('.floating-social').classList.add('hide');
//   }
//   prevScrollpos = currentScrollPos;
// }

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector('.floating-social').classList.remove('hide');
//   } else {
//     document.querySelector('.floating-social').classList.add('hide');
//   }
//   prevScrollpos = currentScrollPos;
// }


// var lastScrollTop = 0;
// window.addEventListener("scroll", function(){
//    var st = window.pageYOffset || document.documentElement.scrollTop;
//    if (st > lastScrollTop){
//       // Downscroll code
//       document.querySelector(".floating-social").classList.add("hide");
//    } else if(st < lastScrollTop){
//       // Upscroll code
//       document.querySelector(".floating-social").classList.remove("hide");
//    } else{
//     document.querySelector(".floating-social").classList.remove("show");

//    }
//    lastScrollTop = st <= 0 ? 0 : st;
// }, false);




    // var lastScrollTop = 0;
    // window.addEventListener("scroll", function(){
    //    var st = window.pageYOffset || document.documentElement.scrollTop;
    //    if (st > lastScrollTop){
    //       document.querySelector(".floating-social").classList.remove("show");
    //    } else {
    //       document.querySelector(".floating-social").classList.add("show");
    //    }
    //    lastScrollTop = st <= 0 ? 0 : st;
    // }, false);


// var lastScrollTop = 0;
// var floatingSocial = document.querySelector(".floating-social");
// window.addEventListener("scroll", function(){
//    var st = window.pageYOffset || document.documentElement.scrollTop;
//    if (st > lastScrollTop){
//       // Downscroll code
//       floatingSocial.classList.add("hide");
//    } else {
//       // Upscroll code
//       floatingSocial.classList.add("hide");
//    }
//    lastScrollTop = st <= 0 ? 0 : st;
// }, false);


    // font size increase decrease
    const toggleBtn = document.getElementById('toggle-btn');
    const body = document.body;
    const header = document.querySelector('header');
   const section = document.querySelector('section');

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        section.classList.toggle('dark-mode');
        
    });



