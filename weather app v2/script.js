const fahBtn = document.querySelector("#fahBtn");
const FahToCel = document.querySelector(".middle-header h1");
const days = document.querySelectorAll(".days-val h5");
const info = document.querySelector("#info");
const infoEl = document.querySelector(".info");
const CelEl = document.querySelector(".middle-header sup")
const CelEls = document.querySelectorAll(".days-val p")

fahBtn.addEventListener("click", changeTheme )

console.log(Number(FahToCel.innerHTML))

let leftside = false;

function changeTheme(){
    if(leftside == true){
        fahBtn.style.left = "40px";
        leftside = false;
        CelEl.innerHTML = "<sup>o</sup>C"
        FahToCel.innerHTML = (((Number(FahToCel.innerHTML))-32) *5/9).toFixed(0)
        days.forEach(e => {
            e.innerHTML = (((Number(e.innerHTML))-32) *5/9).toFixed(0)
        })
        CelEls.forEach(e => {
            e.innerHTML = "C"
        })

    }else{
        fahBtn.style.left="5px";
        leftside = true;
        FahToCel.innerHTML = ((Number(FahToCel.innerHTML))*1.8 + 32).toFixed(0)
        CelEl.innerHTML = "<sup>o</sup>F"
        days.forEach(e => {
            e.innerHTML = ((Number(e.innerHTML))*1.8 + 32).toFixed(0)
        })
        CelEls.forEach(e => {
            e.innerHTML = "F"
        })
        
    }
};

info.addEventListener("mouseover" , ()=>{
    infoEl.classList.remove("none")
});

info.addEventListener("mouseout", ()=> {
    infoEl.classList.add("none")
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    freeMode: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });