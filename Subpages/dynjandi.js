// JavaScript for Header Navigation in Subpages
document.addEventListener("DOMContentLoaded", function () {
    // Discover Button: Navigate to "Explore the hidden treasures"
    const discoverButton = document.querySelector(".btn-discover");
    if (discoverButton) {
        discoverButton.addEventListener("click", function () {
            window.location.href = "../index.html#hidden-treasures";
        });
    }

    // Contact Button: Navigate to "Contact support" section
    const contactButton = document.querySelector(".btn-contact");
    if (contactButton) {
        contactButton.addEventListener("click", function () {
            window.location.href = "../index.html#contact-support";
        });
    }

    // Logo Button: Navigate to the top of the landing page
    const logoLink = document.querySelector(".logo-link");
    if (logoLink) {
        logoLink.addEventListener("click", function () {
            window.location.href = "../index.html#top";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([65.7325, -23.1978], 14); // Coordinates for Dynjandi

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker
    L.marker([65.7325, -23.1978]).addTo(map)
        .bindPopup("Dynjandi Waterfall")
        .openPopup();
});

// Photo Gallery Lightbox
let currentImageIndex = 0;
const galleryImages = [
    "dynjandi-gallery1.jpg",
    "dynjandi-gallery2.jpg",
    "dynjandi-gallery3.jpg",
    "dynjandi-gallery4.jpg"
];

// Open Lightbox
function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    updateLightboxImage();
}

// Close Lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Change Image
function changeImage(direction) {
    currentImageIndex += direction;

    // Wrap around images
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }

    updateLightboxImage();
}

// Update Lightbox Image
function updateLightboxImage() {
    const lightboxImage = document.getElementById("lightbox-img");
    lightboxImage.src = galleryImages[currentImageIndex];
}
