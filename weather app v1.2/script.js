const fahBtn = document.querySelector(".fah");
const celBtn = document.querySelector(".cel");
const belalim = document.querySelector(".fah-cel")
const fahCelBtn = document.querySelectorAll("#fah-cel span");
const FahToCel = document.querySelector(".middle-header h1");
const days = document.querySelectorAll(".days-val h5");
const info = document.querySelector("#info");
const infoEl = document.querySelector(".info");
const CelEl = document.querySelector(".middle-header sup")
const CelEls = document.querySelectorAll(".days-val p")

belalim.addEventListener("click", changeTheme)


function changeTheme(){
    const isCelActive = celBtn.classList.value.search("active")
    console.log(isCelActive)
    fahCelBtn.forEach(element => {
        element.classList.toggle("active")
    });
    if(isCelActive === -1){
        CelEl.innerHTML = "<sup>o</sup>C" 
        FahToCel.innerHTML = (((Number(FahToCel.innerHTML))-32) *5/9).toFixed(0)
        days.forEach(e => {
            e.innerHTML = (((Number(e.innerHTML))-32) *5/9).toFixed(0)
        })
        CelEls.forEach(e => {
            e.innerHTML = "C"
        })
    }else{
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
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 4,
    spaceBetween: 50,
  });