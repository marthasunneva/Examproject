document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll to "Explore the hidden treasures"
    document.getElementById("discover-btn").addEventListener("click", () => {
        document.getElementById("hidden-treasures").scrollIntoView({
            behavior: "smooth", // Smooth scrolling
            block: "start"      // Scroll to the top of the target section
        });
    });

    // Smooth scroll to "Contact Support"
    document.getElementById("contact-btn").addEventListener("click", () => {
        document.getElementById("contact-support").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Redirects for cards
    document.getElementById("dynjandi-card").addEventListener("click", () => {
        window.location.href = "dynjandi.html"; // Page for Dynjandi Waterfall
    });

    document.getElementById("hot-spring-card").addEventListener("click", () => {
        window.location.href = "hot-spring.html"; // Page for Hot Spring
    });

    document.getElementById("hvestusandur-card").addEventListener("click", () => {
        window.location.href = "hvestusandur.html"; // Page for Hvestusandur Beach
    });

    // Redirects for "Read more" buttons
    document.getElementById("dynjandi-btn").addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the card click event
        window.location.href = "subpages/dynjandi.html";
    });

    document.getElementById("hot-spring-btn").addEventListener("click", (event) => {
        event.stopPropagation();
        window.location.href = "hot-spring.html";
    });

    document.getElementById("hvestusandur-btn").addEventListener("click", (event) => {
        event.stopPropagation();
        window.location.href = "hvestusandur.html";
    });
});

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

