const gridItems = [
        { 
            src: "./asset/content/lifetsyle.w.png",
            alt: "Lifestyle",
            link: "/lifestyle", // optional
            class: "hover:bg-gray-300 transition" // optional
        },
        { 
            src: "./asset/content/sportlife.w.png",
            alt: "Sportlife",
            link: "/sportlife"
        },
        { 
            src: "./asset/content/8-1.png",
            alt: "Collection",
            link: "/collection"
        },
        { 
            src: "./asset/content/lifestyle.m.png",
            alt: "Collection",
            link: "/collection"
        },
        { 
            src: "./asset/content/sportlife.m.png",
            alt: "Collection",
            link: "/collection"
        },
        { 
            src: "./asset/content/7-1.png",
            alt: "Collection",
            link: "/collection"
        },
        // Add more items as needed
    ];

    // Get the container element
    const container = document.getElementById('grid-container');

    // Create grid items
    gridItems.forEach(item => {
        const anchor = document.createElement('a');
        anchor.href = item.link || "#";
        anchor.className = item.class || ""; // Add any additional classes
        
        const div = document.createElement('div');
        div.className = "bg-gray-200 h-auto flex items-center rounded-lg  justify-center text-xl font-bold";
        
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.className = "max-h-full max-w-full object-contain rounded-lg ";
        
        div.appendChild(img);
        anchor.appendChild(div);
        container.appendChild(anchor);
    });