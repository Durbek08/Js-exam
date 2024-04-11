let nikk = document.querySelectorAll('nik')

nikk.forEach(function (item , index){
   item.addEventListener('click' , function(){
    nikk.forEach(function (element){
        element.classList.remove('active')
    })
    item.classList.add('active')
   })
})