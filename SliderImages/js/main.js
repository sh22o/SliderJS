// select items from html 
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots[i].classList.toggle('active', i === currentIndex);
    });
}

nextButton.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});


// Auto-slide functionality 
let autoSlide = setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
}, 1000);


// function for  Pause auto-slide on hover 
document.querySelector('.slider').addEventListener('mouseover', () => {
    clearInterval(autoSlide);
});

// return Auto when mouse out 
document.querySelector('.slider').addEventListener('mouseout', () => {
    autoSlide = setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, 1000);
});

showSlide(currentIndex); 
