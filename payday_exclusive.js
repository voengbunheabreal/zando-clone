const products = [
    {
        image: "./payday/ZANDO270320259456-cr-450x672.jpg",
        title: "Regular T-Shirt With Printed",
        oldPrice: "US $13.95",
        newPrice: "US $9.77",
        discount: "-30%",
        colors: ["bg-blue-300", "bg-white-border-2"]
    },
    {
        image: "./payday/ZANDO20MAR20255434-cr-450x672.jpg",
        title: "Regular Fitted Vest",
        oldPrice: "US $17.59",
        newPrice: "US $12.31",
        discount: "-30%",
        colors: ["bg-yellow-300", "bg-orange-200"]
    },
    {
        image: "./payday/ZANDO20MAR20255399-cr-450x672.jpg",
        title: "Cropped Fit T-Shirt",
        oldPrice: "US $12.95",
        newPrice: "US $9.06",
        discount: "-30%",
        colors: ["bg-gray-300", "bg-white border-2","bg-yellow-100"]
    },
    {
        image: "./payday/ZANDO240320258507-cr-450x672.jpg",
        title: "Cropped Fit T-Shirt",
        oldPrice: "US $12.95",
        newPrice: "US $9.06",
        discount: "-30%",
        colors: ["", ""]
        
    },
    {
        image: "./payday/10S25TSS003_White (1)-cr-450x672.jpg",
        title: "Regular Cotton T-Shirt",
        oldPrice: "US $16.95",
        newPrice: "US $11.87",
        discount: "-30%",
        colors: ["bg-black", "bg-white border-2" , "bg-yellow-800"]
        
    },
    {
        image: "./payday/AFTERNOON9260-cr-450x672.jpg",
        title: "Regular Stripe Pattern...",
        oldPrice: "US $16.95",
        newPrice: "US $13.01",
        discount: "-30%",
        colors: ["", ""]
        
    },
    {
        image: "./payday/AFTERNOON9249-cr-450x672.jpg",
        title: "Loose Fit Stipe Pattern...",
        oldPrice: "US $16.59",
        newPrice: "US $11.61",
        discount: "-30%",
        colors: ["", ""]
        
    },
    {
        image: "./payday/AFTERNOON9142-cr-450x672.jpg",
        title: "Regular Denim Shorts",
        oldPrice: "US $16.59",
        newPrice: "US $11.61",
        discount: "-30%",
        colors: ["", ""]
        
    }
    

];


function renderProducts() {
    const container = document.getElementById("product-list");
    container.innerHTML = products.map(product => `
        <div class="bg-white p-4 shadow-lg rounded-lg relative">
            <span class="absolute  bg-red-600 text-white text-xs px-2 py-1 rounded">${product.discount}</span>
            <img src="${product.image}" alt="${product.title}" class="w-full h-auto object-cover rounded">
            <div class="mt-3">
                <p class="text-red-600 font-bold">${product.newPrice} <span class="text-gray-400 line-through">${product.oldPrice}</span></p>
                <p class="text-gray-700">${product.title}</p>
                <div class="flex space-x-2 mt-2">
                    ${product.colors.map(color => `<span class="w-4 h-4 rounded-full ${color}"></span>`).join("")}
                </div>
            </div>
        </div>
    `).join("");
}

renderProducts();

const footwear_products = [
    {
        image: "./payday/footwear1.jpg",
        title: "Multifunctional Outdoor Sneakers",
        oldPrice: "US $48.59",
        newPrice: "US $34.01",
        discount: "-30%",
        colors: ["bg-white border-2", "bg-yellow-800"]
    },
    {
        image: "./payday/footwear2.jpg",
        title: "Regular Fitted Vest",
        oldPrice: "US $17.59",
        newPrice: "US $12.31",
        discount: "-30%",
        colors: ["", ""]
    },
    {
        image: "./payday/footwear3.jpg",
        title: "Cropped Fit T-Shirt",
        oldPrice: "US $12.95",
        newPrice: "US $9.06",
        discount: "-30%",
        colors: ["bg-blue-800", "bg-white border-2",]
    },
    {
        image: "./payday/footwear4.jpg",
        title: "Cropped Fit T-Shirt",
        oldPrice: "US $12.95",
        newPrice: "US $9.06",
        discount: "-30%",
        colors: ["bg-gray-200", "bg-black"]
        
    },    

];


function Products_footwear() {
    const container = document.getElementById("footwear-product-list");
    container.innerHTML = footwear_products.map(product => `
        <div class="bg-white p-4 shadow-lg rounded-lg relative">
            <span class="absolute  bg-red-600 text-white text-xs px-2 py-1 rounded">${product.discount}</span>
            <img src="${product.image}" alt="${product.title}" class="w-full h-auto object-cover rounded">
            <div class="mt-3">
                <p class="text-red-600 font-bold">${product.newPrice} <span class="text-gray-400 line-through">${product.oldPrice}</span></p>
                <p class="text-gray-700">${product.title}</p>
                <div class="flex space-x-2 mt-2">
                    ${product.colors.map(color => `<span class="w-4 h-4 rounded-full ${color}"></span>`).join("")}
                </div>
            </div>
        </div>
    `).join("");
}

Products_footwear();