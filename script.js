const imgScale = document.querySelector(".img");
const imgBig = document.querySelector(".imgSizeUp");

//adding picture by picture to see if the fourth attempt may work, even this attempt will be a lot of code and there must be several simpler ways to do this...
const fox = document.querySelector("#fox");
const para = document.querySelector("#para");
const pluto = document.querySelector("#pluto");
const cleo = document.querySelector("#cleo");
const paris = document.querySelector("#paris");
const grand = document.querySelector("#grand");


// First attempt is the method I believe to be most likely to work.

//First attempt
  function sizeUp() {
    //fjern if - else og addEvent
    //   if (imgScale === true) {
    //   let imgScale = document.getElementsByClassName(".img");
      fox.classList.toggle("imgSizeUp");
    //   para.classList.toggle("imgSizeUp");
    //   pluto.classList.toggle("imgSizeUp");
    //   cleo.classList.toggle("imgSizeUp");
    //   paris.classList.toggle("imgSizeUp");
    //   grand.classList.toggle("imgSizeUp");

    //   imgScale.addEventListener("click", imgBig);
    //   } else {
    //       let imgBig = document.getElementsByClassName(".imgSizeUp");
    //       imgBig.addEventListener("click", imgScale);
    //   };
  }
fox.addEventListener("click", sizeUp);
// para.addEventListener("click", sizeUp);
// pluto.addEventListener("click", sizeUp);
// cleo.addEventListener("click", sizeUp);
// paris.addEventListener("click", sizeUp);
// grand.addEventListener("click", sizeUp);


//consclusion: make separate functions for each picture.
function sizeUpTwo() {
    para.classList.toggle("imgSizeUp");
}
para.addEventListener("click", sizeUpTwo);

function sizeUpThree() {
    pluto.classList.toggle("imgSizeUp");
}

//Notes from Julie:
// const fox = document.querySelector("#fox);
// fox.addEventListener("click", () => {
// fox.classList.toggle("imgScaleBig")
// }
//put functions for each or make for-loop? Have different names for each function, can reuse class name.



//Second attempt
// function sizeUp() {
//     let imgScale = document.querySelector(".img");
//     sizeUp.addEventlistener("click", imgBig);
// }

//Third attempt...//
//  function sizeUp() {
//      imgScale.style.transform = "scale (1.5)";
//      imgScale.style.transition = "transform 0.3s ease";
//      imgScale.addEventListener("click");
//  }

//Fourth attempt
// function sizeUp() {
//     fox.style.transform = 'scale (1.5)';
//     fox.style.transition = 'transform 0.5 ease';
//     fox.addEventListener("click");
// }

// function sizeUp() {
//     para.style.transform = "scale (1.5)";
//     para.style.trasition = "transform 0.5 ease";
//     imgScale.addEventListener("click");
// }






//Nope, nothing works and I don't know what I'm doing wrong because I don't know what I'm supposed to do in the first place. 
//Do not give me the "Use ChatGPT" speech, I would if it worked, but the page has just collapsed EVERY TIME I try to use it. 
//Besides what's the point in trying to learn coding if we're just supposed to use ChatPGT before we even understand js coding??

// I'm done 