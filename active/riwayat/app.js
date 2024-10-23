const slider = document.querySelector(".btn-slider");
const sliderCircle = document.querySelector(".slider-circle");
// const parkEZContent = document.querySelector(".thumb-parkez");
// const ezGarageContent = document.querySelector(".thumb-ezgarage");
const transaksi = document.getElementById("transaksi");
const parkir = document.getElementById("parkir");

slider.addEventListener("click", function () {
  if (sliderCircle.style.left === "0px" || sliderCircle.style.left === "") {
    // EZGARAGE
    sliderCircle.style.left = "110px";
    sliderCircle.style.width = "130px";
    parkir.style.display = "flex";
    transaksi.style.display = "none";
  } else {
    // parkEZ
    sliderCircle.style.left = "0px";
    sliderCircle.style.width = "100px";
    parkir.style.display = "none";
    transaksi.style.display = "flex";
  }
});
