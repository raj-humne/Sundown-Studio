// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true
// });
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
var mgn = document.querySelectorAll(".heading")
mgn.forEach((m)=>{
    m.addEventListener("click",()=> {
        m.classList.toggle("margin")
        if(m.style.color == "#504a45" || m.style.color == "rgb(80, 74, 69)"){
            m.style.color = "white"
        }
        else{
            m.style.color = "#504a45"
        }
    })
})