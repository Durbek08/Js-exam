let nikk = document.querySelectorAll('nik')

nikk.forEach(function (item , index){
   item.addEventListener('click' , function(){
    nikk.forEach(function (element){
        element.classList.remove('active')
    })
    item.classList.add('active')
   })
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });