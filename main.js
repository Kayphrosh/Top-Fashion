const hamburger = document.querySelector(".hamburger"); 
const navLinks =  document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar li");


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link =>  {
        link.classList.toggle("fade");
        hamburger.classList.toggle('toggle');
    });

    
});
const timeTwo = gsap.timeline({defaults: { ease: "power1.out"} });

timeTwo.to('.text', {y: "0%", duration: 2, stagger: 0.25});
timeTwo.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5});
timeTwo.to(".intro", {y: "-100%", duration: 1}, "-=1");







