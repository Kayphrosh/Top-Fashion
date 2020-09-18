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
