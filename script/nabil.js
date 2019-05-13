var parallaxNode1 = document.getElementsByClassName('parallax1');
let heading = parallaxNode1[0].children[0];
 let speed = parallaxNode1[0].getAttribute('data-speed');
window.addEventListener('scroll', function (e) {
    parallaxNode1[0].style.backgroundPosition = '0px '+ (window.scrollY * speed) + 'px';  
  heading.style.transform = 'translateY('+ window.scrollY*.75 +'px)';
});