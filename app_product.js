const info = document.querySelector(".info");
const pop = document.querySelector(".pop");

var $info = $(".info");
var offset = $info.offset();
var width = $info.width();
var height = $info.height();

var centerXinfo = offset.left + width / 2;
var centerYinfo = offset.top + height / 2;

info.addEventListener("mousemove", (e) => {
 let xAxis = (centerXinfo - e.pageX) / 10;
 let yAxis = (centerYinfo - e.pageY) / 10;
 info.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

info.addEventListener("mouseenter", (e) => {
  info.style.transition = "none";
  //Popout
  pop.style.transform = "translateZ(150px)";
});

info.addEventListener("mouseleave", (e) => {
  info.style.transition = "all 0.5s ease";
  info.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  pop.style.transform = "translateZ(0px)";
});