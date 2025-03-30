const products = [
    {
        image: "./payday/ZANDO270320259456-cr-450x672.jpg",
        title: "Regular T-Shirt With Printed",
        oldPrice: "$13.95",
        newPrice: "$9.77",
        discount: "-30%",
        colors: ["bg-blue-300", "bg-gray-300"]
    },
    {
        image: "./payday/ZANDO20MAR20255434-cr-450x672.jpg",
        title: "Regular Fitted Vest",
        oldPrice: "$17.59",
        newPrice: "$12.31",
        discount: "-30%",
        colors: ["bg-yellow-300", "bg-brown-300"]
    },
    {
        image: "./payday/ZANDO20MAR20255399-cr-450x672.jpg",
        title: "Cropped Fit T-Shirt",
        oldPrice: "$12.95",
        newPrice: "$9.06",
        discount: "-30%",
        colors: ["bg-gray-300", "bg-black"]
    },
    {
        image: "./payday/ZANDO240320258507-cr-450x672.jpg",
        title: "Cropped Fit T-Shirt",
        oldPrice: "$12.95",
        newPrice: "$9.06",
        discount: "-30%",
        colors: ["bg-gray-300", "bg-black"]
    }
];


function renderProducts() {
    const container = document.getElementById("product-list");
    container.innerHTML = products.map(product => `
        <div class="bg-white p-4 shadow-lg rounded-lg relative">
            <span class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">${product.discount}</span>
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