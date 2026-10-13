const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".navbar-list")

navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navList.classList.toggle("is-open", !isOpen);
})


const revealItems = document.querySelectorAll(
    ".menu-card, .about-image, .about-content, .testimonial-card" 
);

revealItems.forEach((item) => item.classList.add("reveal"));

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}