console.log("hello")
const navMenu = document.getElementById("nav-menu"),
toggleMenu = document.getElementById('toggle-menu'),
closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener("click", () =>{
    navMenu.classList.toggle('show');
})

closeMenu.addEventListener("click", () =>{
    navMenu.classList.remove('show');
})




//making navbar sticky
header = document.querySelector(".header")

window.onscroll = function(){
    var top =  window.scrollY;
    console.log(top);
    if (top >= 10){
        header.classList.add("sticky")
    }else{
        header.classList.remove("sticky")

    }
    //owl-carousel script
    
}

var counter = 1 ;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 5000);
  //homesection//
  var slides = document.querySelectorAll('.slide');
  var btns = document.querySelectorAll('.btn');
  let currentSlide = 1;


  var manualNav = function(manual){
    slides.forEach((slide) => {
      slide.classList.remove('active');

      btns.forEach((btn) => {
        btn.classList.remove('active');
      });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
  }

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      manualNav(i);
      currentSlide = i;
    });
  });


  var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
      setTimeout(function(){
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove('active');
        });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if(slides.length == i){
        i = 0;
      }
      if(i >= slides.length){
        return;
      }
      repeater();
    }, 10000);
    }
    repeater();
  }
  repeat();