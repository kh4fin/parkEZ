const slider = document.querySelector(".btn-slider");
const sliderCircle = document.querySelector(".slider-circle");
const parkEZContent = document.querySelector(".thumb-parkez");
const ezGarageContent = document.querySelector(".thumb-ezgarage");
const ezgarage = document.getElementById("ezgarage");
const parkez = document.getElementById("parkez");

slider.addEventListener("click", function () {
  if (sliderCircle.style.left === "0px" || sliderCircle.style.left === "") {
    // EZGARAGE
    sliderCircle.style.left = "80px";
    sliderCircle.style.width = "130px";
    parkEZContent.style.display = "none";
    ezGarageContent.style.display = "block";
    ezgarage.style.display = "block";
    parkez.style.display = "none";
  } else {
    // parkEZ
    sliderCircle.style.left = "0px";
    sliderCircle.style.width = "90px";
    parkEZContent.style.display = "block";
    ezGarageContent.style.display = "none";
    ezgarage.style.display = "none";
    parkez.style.display = "block";
  }
});
