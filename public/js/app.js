let bosilish = document.querySelector('.bosilish')
let qaytarilish = document.querySelector('.qaytarilish')
let rotate = document.querySelector('.rotate')
let yonbosh = document.querySelector('.yonbosh')

bosilish.addEventListener('click', function () {
    qaytarilish.classList.toggle('active')
    rotate.classList.toggle('rotatee')
    yonbosh.classList.toggle('yonboshh')
})



let bosilishh = document.querySelector('.bosilishh')
let qaytarilishh = document.querySelector('.qaytarilishh')
let rotatee = document.querySelector('.rotateee')
let yonboshh = document.querySelector('.yonboshhhh')

bosilishh.addEventListener('click', function () {
    qaytarilishh.classList.toggle('activee')
    rotatee.classList.toggle('rotateeee')
    yonboshh.classList.toggle('yonboshhhhh')
})


let bosilishhh = document.querySelector('.bosilishhh')
let qaytarilishhh = document.querySelector('.qaytarilishhh')
let rotateee = document.querySelector('.rotateeeee')
let yonboshhh = document.querySelector('.yonboshhhhhh')

bosilishhh.addEventListener('click', function () {
    qaytarilishhh.classList.toggle('activeee')
    rotateee.classList.toggle('rotateeeeee')
    yonboshhh.classList.toggle('yonboshhhhhhh')
})





let hamburgersection = document.querySelector('.hamburgersection')
let hamburger = document.querySelector('.hamburger')
let hamburgerex = document.querySelector('.hamburgerex')

hamburger.addEventListener('click', function () {
    hamburgersection.classList.toggle('bolmoq')
    hamburger.classList.add('yoqolish')
    hamburgerex.classList.add('paydobolishsda')
})

hamburgerex.addEventListener('click', function () {
    hamburgersection.classList.toggle('bolmoq')
    hamburger.classList.remove('yoqolish')
    hamburgerex.classList.remove('paydobolishsda')
})





let nik = document.querySelectorAll('.nik')

nik.forEach(function (item, index) {
    item.addEventListener('click', function () {
        nik.forEach(function (element) {
            element.classList.remove('nikkita')
        })
        item.classList.add('nikkita')
    })
})



