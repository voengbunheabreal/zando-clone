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


 document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.remove('opacity-0');
        scrollToTopBtn.classList.add('opacity-100');
      } else {
        scrollToTopBtn.classList.remove('opacity-100');
        scrollToTopBtn.classList.add('opacity-0');
      }
    });
    
    // Add pulse effect on hover
    scrollToTopBtn.addEventListener('mouseenter', function() {
      this.classList.add('animate-pulse');
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
      this.classList.remove('animate-pulse');
    });
    
    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
      // Add click effect
      this.classList.add('bg-green-500');
      setTimeout(() => {
        this.classList.remove('bg-green-500');
      }, 300);
      
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Add mouse wheel functionality
    scrollToTopBtn.addEventListener('wheel', function(event) {
      event.preventDefault();
      
      // Calculate scroll amount based on wheel delta
      const scrollStep = event.deltaY > 0 ? 200 : -200;
      
      // Flash effect to indicate scroll direction
      if (event.deltaY < 0) {
        this.classList.add('bg-green-500');
        setTimeout(() => {
          this.classList.remove('bg-green-500');
        }, 200);
      } else {
        this.classList.add('bg-red-500');
        setTimeout(() => {
          this.classList.remove('bg-red-500');
        }, 200);
      }
      
      // Perform scroll
      window.scrollBy({
        top: scrollStep,
        behavior: 'smooth'
      });
    });
  });