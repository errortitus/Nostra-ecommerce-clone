# Nostra — Responsive E-Commerce Web Application

Nostra is a modern, responsive multi-page fashion e-commerce frontend built using **HTML5**, **CSS3**, and **Vanilla JavaScript**. It replicates a complete online storefront experience with interactive UI components, dynamic product filtering, and mobile-first responsiveness.

## Live Features

- **Dismissible Top Offer Banner:** Promotional announcement bar at the top of the page that users can close dynamically.
- **Responsive Navigation & Mobile Drawer:** Sticky desktop navigation bar with smooth section scrolling (`#new-arrival`, `#most-wanted`) and a slide-out side drawer for mobile screens.
- **Interactive Hero Image Slider:** Full-width banner carousel with previous/next controls and seamless slide looping.
- **Product Showcases:**
  - **Brands & Customer Experience:** Clean flexbox/grid highlights for partner brands and store guarantees.
  - **New Arrivals:** 4-column product grid with hover/overlay action buttons.
  - **Most Wanted:** Horizontally scrollable product strip with `Sale` badges and interactive heart/wishlist toggles.
- **Live Search & Multi-Tag Filtering (`collections.html`):** Real-time product filtering by keyword search and checkboxes across **Occasion** (*Summer, Party, Beach*), **Colors** (*Red, Blue, White, Green*), and **Arrivals** (*New, Old*).
- **Contact Page (`contactus.html`):** Clean, styled customer inquiry form with validation.

## Tech Stack

- **HTML5:** Semantic multi-page structure (`index.html`, `collections.html`, `contactus.html`)
- **CSS3:** Custom styling, Flexbox, CSS Grid, sticky positioning, transitions, and responsive media queries (`style.css`)
- **JavaScript (ES6):** DOM manipulation for slider controls, mobile drawer toggling, wishlist state, and real-time search/checkbox filtering (`index.js`)
- **Icons & Fonts:** Font Awesome 6 & Google Fonts (*Poppins*)

## Project Structure

```text
├── index.html          # Main landing page
├── collections.html    # Product catalog with search and filters
├── contactus.html      # Contact form page
├── style.css           # Global styles and responsive breakpoints
├── index.js            # Interactive functionality across all pages
└── README.md           # Project documentation
