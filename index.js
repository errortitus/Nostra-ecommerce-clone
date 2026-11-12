// 1. Close Top Offer Banner
const offerBar = document.getElementById("offer-bar");
const offerClose = document.getElementById("offer-close");

if (offerClose && offerBar) {
    offerClose.addEventListener("click", () => {
        offerBar.style.display = "none";
    });
}

// 2. Mobile Side Navbar Toggle
const sideNavbar = document.getElementById("side-navbar");
const sideNavbarActivate = document.getElementById("side-navbar-activate");
const sideNavbarClose = document.getElementById("side-navbar-close");

if (sideNavbarActivate && sideNavbar) {
    sideNavbarActivate.addEventListener("click", () => {
        sideNavbar.style.marginLeft = "0px";
    });
}

if (sideNavbarClose && sideNavbar) {
    sideNavbarClose.addEventListener("click", () => {
        sideNavbar.style.marginLeft = "-60%";
    });
}

// 3. Hero Image Slider
const sliderLeftBtn = document.getElementById("slider-left-activate");
const sliderRightBtn = document.getElementById("slider-right-activate");
const sliderImages = document.getElementById("slider-images");
let sliderMargin = 0;

if (sliderRightBtn && sliderLeftBtn && sliderImages) {
    sliderRightBtn.addEventListener("click", () => {
        sliderMargin += 100;
        if (sliderMargin > 200) {
            sliderMargin = 0;
        }
        sliderImages.style.marginLeft = `-${sliderMargin}vw`;
    });

    sliderLeftBtn.addEventListener("click", () => {
        if (sliderMargin === 0) {
            sliderMargin = 200;
        } else {
            sliderMargin -= 100;
        }
        sliderImages.style.marginLeft = `-${sliderMargin}vw`;
    });
}

// 4. Most Wanted Heart / Like Toggle
const likeButtons = document.querySelectorAll(".like-button");
likeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("fa-regular")) {
            btn.classList.remove("fa-regular");
            btn.classList.add("fa-solid", "liked");
        } else {
            btn.classList.remove("fa-solid", "liked");
            btn.classList.add("fa-regular");
        }
    });
});

// 5. Collections Page Search & Checkbox Filter
const searchInput = document.getElementById("search-input");
const checkboxes = document.querySelectorAll('input[name="tags"]');
const products = document.querySelectorAll(".product");

function filterProducts() {
    const searchText = searchInput ? searchInput.value.toLowerCase() : "";
    const selectedTags = Array.from(checkboxes)
        .filter((cb) => cb.checked)
        .map((cb) => cb.value.toLowerCase());

    products.forEach((product) => {
        const title = product.querySelector("h1").textContent.toLowerCase();
        const productTags = product.getAttribute("data-tags").toLowerCase().split(",");

        const matchesSearch = title.includes(searchText);
        const matchesTags =
            selectedTags.length === 0 ||
            selectedTags.some((tag) => productTags.includes(tag));

        if (matchesSearch && matchesTags) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

if (searchInput) {
    searchInput.addEventListener("keyup", filterProducts);
}

if (checkboxes.length > 0) {
    checkboxes.forEach((cb) => cb.addEventListener("change", filterProducts));
}