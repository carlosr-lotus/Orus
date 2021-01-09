// This code is related to the carousel on each product page, so the user can see other pictures of the product.

// Get nodeList containing all carousel items(all photos)
const slides = document.querySelectorAll('[data-js="carousel-item"]');

// Get previous/next carousel buttons
const prevSlide = document.querySelector('[data-js="carousel_arrow-prev"]');
const nextSlide = document.querySelector('[data-js="carousel_arrow-next"]');

// Variable to get slides nodeList current index
let slideIndex = 0;

prevSlide.addEventListener('click', () => {
    slideIndex--;

    // Removes the class that displays current carrousel image
    slides.forEach(slide => {
        slide.classList.remove('carousel-photo--visible');
    });

    // Check if 'slideIndex' is less than 0, in which case, 'slideIndex' receives var/let 'slides' last index as value
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Add the class that displays current carrousel image
    slides[slideIndex].classList.add('carousel-photo--visible');
})

nextSlide.addEventListener('click', () => {
    slideIndex++;

    slides.forEach(slide => {
        slide.classList.remove('carousel-photo--visible');
    });

    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }

    slides[slideIndex].classList.add('carousel-photo--visible'); 
});