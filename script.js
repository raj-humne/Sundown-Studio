const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});
var fixed = document.querySelector(".fixed-image")
var elems = document.querySelectorAll(".elem")
elems.forEach(function(elem){
    elem.addEventListener("mouseenter", ()=>{
        fixed.style.display = "block"
    })
    elem.addEventListener("mouseleave", ()=>{
        fixed.style.display = "none"
    })
})
var elems = document.querySelectorAll(".elem")
elems.forEach((e)=>{
    e.addEventListener("mouseenter", ()=>{
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})
var items = document.querySelectorAll(".heading")
items[0].classList.add("active")
items.forEach(item=>{
    item.addEventListener("click",()=> {
       items.forEach(item => item.classList.remove("active"))
       item.classList.add("active")
        
    })
})
function swiperAnimation(){
     var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}
swiperAnimation();