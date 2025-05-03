// DOM Elements
const sizeChartBtn = document.querySelector('.size-chart-btn');
const sizeChartModal = document.getElementById('sizeChartModal');
const modalClose = document.querySelector('.modal-close');
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');
const quantityInput = document.querySelector('.quantity-input');
const quantityBtns = document.querySelectorAll('.quantity-btn');
const sizeBtns = document.querySelectorAll('.size-btn');
const wishlistBtn = document.querySelector('.wishlist-btn');
const addToCartBtn = document.getElementById('addToCart');
const buyNowBtn = document.getElementById('buyNow');
const relatedProductsContainer = document.querySelector('.related-products-grid');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

// Related products data
const relatedProducts = [
    {
        id: 'retro-graphic-tee',
        name: 'Retro Graphic Tee',
        price: 999.99,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    {
        id: 'vintage-logo-shirt',
        name: 'Vintage Logo Shirt',
        price: 1099.99, 
        // originalPrice: 1399.99,
        image: 'https://images.unsplash.com/photo-1625910513394-ea511bed44ca?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 'summer-vibes-tee',
        name: 'Summer Vibes Tee',
        price: 899.99,
        image: 'https://images.unsplash.com/photo-1624124959947-5fa0f8886507?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 'color-block-tshirt',
        name: 'Color Block T-shirt',
        price: 1299.99,
        image: 'https://images.unsplash.com/photo-1628071645679-101ea5fad26f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    {
        id: 'essential-cotton-tee',
        name: 'Essential Cotton Tee',
        price: 799.99,
        image: 'https://images.unsplash.com/photo-1716951884284-4d138f2c42b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 'statement-print-tshirt',
        name: 'Statement Print T-shirt',
        price: 1199.99,
        image: 'https://images.unsplash.com/photo-1674968806993-e75baaad9d4b?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 'premium-jersey-tee',
        name: 'Premium Jersey Tee',
        price: 1499.99,
        image: 'https://images.unsplash.com/photo-1572627286668-91c19b41b891?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 'urban-graphic-tshirt',
        name: 'Urban Graphic T-shirt',
        price: 1099.99,
        image: 'https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

// Initialize related products
function initRelatedProducts() {
    relatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-card-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.originalPrice ? '<div class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">SALE</div>' : ''}
            </div>
            <div class="mt-3">
                <h3 class="text-gray-800 font-medium">${product.name}</h3>
                <div class="flex items-center mt-1">
                    <p class="font-medium">Rs. ${product.price.toLocaleString()}</p>
                    ${product.originalPrice ? `<p class="ml-2 text-gray-500 line-through text-sm">Rs. ${product.originalPrice.toLocaleString()}</p>` : ''}
                </div>
            </div>
        `;
        relatedProductsContainer.appendChild(productCard);
    });
}

// Size Chart Modal
function toggleModal() {
    sizeChartModal.classList.toggle('active');
    document.body.style.overflow = sizeChartModal.classList.contains('active') ? 'hidden' : '';
}

// Product Image Gallery
function updateMainImage(thumbnail) {
    const newImage = thumbnail.dataset.image;
    mainImage.src = newImage;
    thumbnails.forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Quantity Selector
function updateQuantity(action) {
    let currentValue = parseInt(quantityInput.value);
    if (action === 'increase') {
        quantityInput.value = currentValue + 1;
    } else if (action === 'decrease' && currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

// Size Selection
function updateSize(btn) {
    sizeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// Wishlist Toggle
function toggleWishlist() {
    wishlistBtn.classList.toggle('active');
    wishlistBtn.querySelector('svg').style.fill = wishlistBtn.classList.contains('active') ? 'currentColor' : 'none';
}

// Scroll Related Products
function scrollProducts(direction) {
    const container = document.querySelector('.related-products-scroll');
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initRelatedProducts();
    
    sizeChartBtn.addEventListener('click', toggleModal);
    modalClose.addEventListener('click', toggleModal);
    sizeChartModal.addEventListener('click', (e) => {
        if (e.target === sizeChartModal) toggleModal();
    });
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => updateMainImage(thumbnail));
    });
    
    quantityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            updateQuantity(btn.classList.contains('plus') ? 'increase' : 'decrease');
        });
    });
    
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => updateSize(btn));
    });
    
    wishlistBtn.addEventListener('click', toggleWishlist);
    
    scrollLeftBtn?.addEventListener('click', () => scrollProducts('left'));
    scrollRightBtn?.addEventListener('click', () => scrollProducts('right'));
    
    addToCartBtn.addEventListener('click', () => {
        const selectedSize = document.querySelector('.size-btn.active').dataset.size;
        const quantity = parseInt(quantityInput.value);
        console.log('Added to cart:', { size: selectedSize, quantity });
    });
    
    buyNowBtn.addEventListener('click', () => {
        const selectedSize = document.querySelector('.size-btn.active').dataset.size;
        const quantity = parseInt(quantityInput.value);
        console.log('Buy now:', { size: selectedSize, quantity });
    });
});