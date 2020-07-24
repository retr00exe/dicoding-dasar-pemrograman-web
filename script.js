const parallax = document.getElementById('parallax');

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

window.addEventListener("scroll", function(){
    let menuArea = document.getElementsByTagName('nav')[0]
    if(window.pageYOffset>180){
        menuArea.classList.add('navbar-color');
    }else{
        menuArea.classList.remove('navbar-color');
    }
});

function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if(introPosition<screenPosition){
        introText.classList.add('text-appear');
    }
}

 window.addEventListener('scroll',scrollAppear);