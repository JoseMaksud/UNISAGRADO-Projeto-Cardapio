document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".carousel-slider");
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".carousel-dots");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (!slider) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;

    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        slider.style.transform = `translateX(-${index * 100 / totalSlides}%)`;
        currentIndex = index;
        updateDots();
    }

    function createDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            dot.addEventListener("click", () => {
                goToSlide(i);
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 3000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    prevBtn.addEventListener("click", () => {
        goToSlide(currentIndex - 1);
        resetAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
        goToSlide(currentIndex + 1);
        resetAutoSlide();
    });
    
    function init() {
        createDots();
        goToSlide(0);
        startAutoSlide();
    }

    init();
});

const filterButtons = document.querySelectorAll(".filterButtons button");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("btnActive"));
        button.classList.add("btnActive");
    });
});
