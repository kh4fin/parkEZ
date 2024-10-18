const slider = document.querySelector(".btn-slider");
const sliderCircle = document.querySelector(".slider-circle");
const parkEZContent = document.querySelector(".parkez-content");
const ezGarageContent = document.querySelector(".ezgarage-content");

slider.addEventListener("click", function () {
  if (sliderCircle.style.left === "0px" || sliderCircle.style.left === "") {
    // EZGARAGE
    sliderCircle.style.left = "90px";
    sliderCircle.style.width = "120px";
    parkEZContent.style.display = "none";
    ezGarageContent.style.display = "block";
  } else {
    // parkEZ
    sliderCircle.style.left = "0px";
    sliderCircle.style.width = "90px";
    parkEZContent.style.display = "block";
    ezGarageContent.style.display = "none";
  }
});
