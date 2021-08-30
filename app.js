const burger = document.querySelector(".burger");

burger.addEventListener("click" , () => {
    const links = document.querySelector(".nav-links");
    burger.classList.toggle("active-burger");
    links.classList.toggle("active-burger-content");
    Array.from(links.children).forEach((element, index) => {
        element.style.animationDelay = `${index/5 + 0.5}s`;
    });
})