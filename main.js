 // Mobile Menu Toggle
 const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
 const closeMobileMenu = document.getElementById('close-mobile-menu');
 const mobileMenu = document.getElementById('mobile-menu');
 const mobileMenuContent = document.getElementById('mobile-menu-content');

 mobileMenuToggle.addEventListener('click', () => {
     mobileMenu.classList.remove('hidden');
     setTimeout(() => {
         mobileMenuContent.classList.add('translate-x-0');
     }, 10);
 });

 closeMobileMenu.addEventListener('click', () => {
     mobileMenuContent.classList.remove('translate-x-0');
     setTimeout(() => {
         mobileMenu.classList.add('hidden');
     }, 300);
 });

 // Carousel JavaScript (You would typically use Flowbite or similar library)
 const carousel = document.getElementById('default-carousel');
 const carouselItems = carousel.querySelectorAll('[data-carousel-item]');
 const carouselIndicators = carousel.querySelectorAll('[data-carousel-slide-to]');
 const prevButton = carousel.querySelector('[data-carousel-prev]');
 const nextButton = carousel.querySelector('[data-carousel-next]');

 let currentSlide = 0;

 function showSlide(index) {
     carouselItems.forEach(item => item.classList.add('hidden'));
     carouselIndicators.forEach(indicator => {
         indicator.classList.remove('opacity-100');
         indicator.classList.add('opacity-50');
     });

     carouselItems[index].classList.remove('hidden');
     carouselIndicators[index].classList.remove('opacity-50');
     carouselIndicators[index].classList.add('opacity-100');
 }

 prevButton.addEventListener('click', () => {
     currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
     showSlide(currentSlide);
 });

 nextButton.addEventListener('click', () => {
     currentSlide = (currentSlide + 1) % carouselItems.length;
     showSlide(currentSlide);
 });

 carouselIndicators.forEach((indicator, index) => {
     indicator.addEventListener('click', () => {
         currentSlide = index;
         showSlide(currentSlide);
     });
 });

 // Initialize first slide
 showSlide(0);


 