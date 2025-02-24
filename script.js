document.addEventListener("DOMContentLoaded", () => {

    // Order form submission
    const orderForm = document.getElementById("orderForm");
    if (orderForm) {
        orderForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const cakeType = document.getElementById("cakeType").value;
            const quantity = document.getElementById("quantity").value;
            if (quantity > 0) {
                showNotification(`New Order: ${quantity} x ${cakeType}`);
            }
        });
    }

    // Review submission
    const reviewForm = document.getElementById("reviewForm");
    const reviewList = document.getElementById("reviewList");

    if (reviewForm) {
        reviewForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const reviewText = document.getElementById("reviewText").value;
            if (reviewText) {
                const newReview = document.createElement("li");
                newReview.textContent = reviewText;
                reviewList.appendChild(newReview);
                document.getElementById("reviewText").value = "";
            }
        });
    }

});

// Show notification for new orders
function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.remove("hidden");

    setTimeout(() => {
        notification.classList.add("hidden");
    }, 3000);
}
document.addEventListener("DOMContentLoaded", () => {
    
    // Lightbox functionality for gallery images
    const images = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.getElementById("close-lightbox");

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.classList.remove("hidden");
        });
    });

    closeLightbox.addEventListener("click", () => {
        lightbox.classList.add("hidden");
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target !== lightboxImg) {
            lightbox.classList.add("hidden");
        }
    });

});
document.addEventListener("DOMContentLoaded", () => {

    // 🎡 Carousel Functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-img");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);

    // 🔍 Search & Filter Cakes
    const searchBox = document.getElementById("searchBox");
    const galleryImages = document.querySelectorAll(".gallery-img");

    searchBox.addEventListener("input", () => {
        const query = searchBox.value.toLowerCase();
        galleryImages.forEach(img => {
            const cakeName = img.getAttribute("data-name");
            if (cakeName.includes(query)) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    });

});
document.addEventListener("DOMContentLoaded", () => {

    // 🎡 Auto-Sliding Carousel
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-img");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    showSlide(currentSlide);

    // Auto slide every 3 seconds
    let autoSlide = setInterval(nextSlide, 3000);

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3000);
    }

    // 🔍 Search & Filter Cakes
    const searchBox = document.getElementById("searchBox");
    const galleryImages = document.querySelectorAll(".gallery-img");

    searchBox.addEventListener("input", () => {
        const query = searchBox.value.toLowerCase();
        galleryImages.forEach(img => {
            const cakeName = img.getAttribute("data-name");
            if (cakeName.includes(query)) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    });


});

document.addEventListener("DOMContentLoaded", () => {

    // 📞 Contact Form Submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        if (name && email && phone && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            this.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });

});

const text = document.querySelector(".multi-color-text");
const colors = ['Red', 'blue', 'green', 'white','orange', 'purple', ];

text.innerHTML  = text.textContent.split('').map(letter =>
      `<span style ="color: ${colors [Math.floor(Math.random()  *  colors.length)]};">${letter}</span>`
).join('');