const brands = [
    {
        src: "./branding/zando-3.png",
        alt: "Zando Logo",
        name: "ZANDO",
        bgColor: "bg-white",
        textColor: "text-gray-800",
        link: "#zando",
        height: "h-40 md:h-48 lg:h-56"
    },
    {
        src: "./branding/TEN11.png",
        alt: "TEN11 Logo",
        name: "TEN11",
        bgColor: "bg-white",
        textColor: "text-gray-800",
        link: "#ten11",
        height: "h-40 md:h-48 lg:h-56"
    },
    {
        src: "./branding/gatoni.png",
        alt: "Gatoni Logo",
        name: "GATONI",
        bgColor: "bg-white",
        textColor: "text-gray-800",
        link: "#gatoni",
        height: "h-40 md:h-48 lg:h-56"
    },
    {
        src: "./branding/routine.png",
        alt: "Routine Logo",
        name: "ROUTINE",
        bgColor: "bg-white",
        textColor: "text-gray-800",
        link: "#routine",
        height: "h-40 md:h-48 lg:h-56"
    },
    {
        src: "./branding/361.png",
        alt: "361 Degrees Logo",
        name: "361°",
        bgColor: "bg-white",
        textColor: "text-gray-800",
        link: "#361",
        height: "h-40 md:h-48 lg:h-56"
    }
];

// Get the grid container
const gridContainer = document.getElementById('branding-grid');

// Function to create responsive brand element
function createBrandElement(brand) {
    const container = document.createElement('a');
    container.href = brand.link || '#';
    
    const imgContainer = document.createElement('div');
    imgContainer.className = "w-full flex-1 flex items-center justify-center p-1 md:p-2";
    
    const img = document.createElement('img');
    img.src = brand.src;
    img.alt = brand.alt || 'Brand logo';
    img.className = "max-h-full max-w-full object-contain";
    img.loading = "lazy"; // Lazy loading for better performance
    img.onerror = function() {
        this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23eee'/%3E%3Ctext x='50%' y='50%' font-family='sans-serif' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23666'%3EImage not found%3C/text%3E%3C/svg%3E";
    };
    
    const nameTag = document.createElement('div');
   
    imgContainer.appendChild(img);
    container.appendChild(imgContainer);
    container.appendChild(nameTag);
    
    return container;
}

// Load all brands with responsive handling
brands.forEach(brand => {
    gridContainer.appendChild(createBrandElement(brand));
});

// Handle window resize for additional responsiveness
window.addEventListener('resize', function() {
    // You could add additional responsive logic here if needed
});