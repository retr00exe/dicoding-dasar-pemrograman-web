const parallax = document.getElementById('parallax');

window.addEventListener("scroll", function (){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

window.addEventListener("scroll", function (){
    let menuArea = document.getElementsByTagName('nav')[0]
    console.log(window.pageYOffset)
    if(window.pageYOffset>180){
        menuArea.classList.add('navbar-color')
    }else{
        menuArea.classList.remove('navbar-color')
    }
});