const target = document.querySelectorAll('[data-anime]');


function animateScroll(){
    const windowTop = window.scrollY + window.innerHeight * 3 / 4;
    target.forEach(element => {
    
        if(windowTop > element.offsetTop){
            element.classList.add('animate');
        }
    });
}

window.addEventListener("scroll", e => {
 animateScroll();
});