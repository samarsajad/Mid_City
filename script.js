let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    slideIndex += direction;
    showSlide(slideIndex);
}

function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
    setTimeout(autoSlide, 3000); 
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    autoSlide();
});
document.addEventListener("DOMContentLoaded", function() {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach((link) => {
        link.addEventListener('click', function() {
            const text = link.previousElementSibling;
            text.classList.toggle('expanded');
            link.textContent = text.classList.contains('expanded') ? 'Read Less' : 'Read More';
        });
    });
});


