const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});
var fixed = document.querySelector(".fixed-image")
var elemC = document.querySelector(".elem-cont")
elemC.addEventListener("mouseenter", ()=>{
    alert("hehe")
})
elemC.addEventListener("mouseleave", ()=>{
    fixed.style.display = "none"
})