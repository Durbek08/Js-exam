let bosilish = document.querySelector('.bosilish')
let qaytarilish = document.querySelector('.qaytarilish')

bosilish.addEventListener('click' , function(){
    qaytarilish.classList.toggle('active')
})



let  bgas = document.querySelector('.loader')
window.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    bgas.style.display = "none"
  }, 2000)
})


