# Handmade Haven Blueprint

## Overview

Handmade Haven is an online marketplace designed to connect artisans and craftspeople with customers seeking unique, handcrafted goods. The platform provides a beautiful and intuitive user experience for discovering products, managing a shopping cart and wishlist, and learning more about the company and its mission.

## Project Structure

- **/app**: Main application directory using Next.js App Router.
  - `page.jsx`: The application's home page.
  - **/products**:
    - `page.jsx`: The main product listing page.
    - **/[productId]**:
      - `page.jsx`: The detailed view for a single product.
  - **/wishlist**:
    - `page.jsx`: Displays the user's wishlist.
  - **/cart**:
    - `page.jsx`: Displays the user's shopping cart.
  - **/about**:
    - `page.jsx`: The "About Us" page.
  - **/contact**:
    - `page.jsx`: The "Contact Us" page.
  - `layout.jsx`: The root layout containing the Header and Footer.
- **/components**: Reusable React components.
  - `Header.jsx`: The site-wide header, including navigation and icons.
  - `Footer.jsx`: The site-wide footer.
  - `ProductCard.jsx`: A card component to display product information.
- **/context**: React context providers for global state management.
  - `CartContext.jsx`: Manages the state of the shopping cart.
  - `WishlistContext.jsx`: Manages the state of the wishlist.
- **/data**: Static data for the application.
  - `products.js`: An array of product objects.
- **/public**: Static assets like images.
- **tailwind.config.js**: Configuration for the Tailwind CSS framework.
- **blueprint.md**: This document.

## Design and Styling

- **Framework**: Tailwind CSS for utility-first styling.
- **Aesthetics**: Modern, clean, and visually engaging. The design uses a combination of high-quality imagery, balanced layouts, and polished styles to create a premium feel.
- **Color Palette**:
  - **Primary**: Slate (`bg-slate-800`, `bg-slate-900`).
  - **Accent**: Red for wishlist items (`text-red-500`) and yellow for star ratings (`text-yellow-400`).
  - **Backgrounds**: A mix of `bg-white`, `bg-gray-50`, and `bg-gray-100` to create visual separation between sections.
- **Typography**: Uses Tailwind's default font stack. Font sizes and weights are varied to create a clear visual hierarchy (e.g., large hero text, bold section titles).
- **Iconography**: `lucide-react` is used for all icons, providing a consistent and modern set of visuals for actions like add-to-cart, wishlist, search, etc.
- **Visual Effects**:
  - **Shadows**: Soft, deep drop shadows on cards and buttons to create a "lifted" 3D effect.
  - **Transitions & Animations**: Subtle animations on button hover, page load (`fade-in-down`, `fade-in-up`), and an `animate-pulse` on the wishlist notification.
  - **Backdrop Blur**: The sticky header uses a semi-transparent background with a backdrop blur for a modern, frosted-glass effect.

## Features Implemented

- **Home Page**:
  - **Animated Hero Section**: A full-width hero image with an overlay, featuring animated text and a bouncing "Shop Now" button.
  - **Featured Products**: A curated section of products displayed using the `ProductCard` component.
  - **Why Choose Us**: A section highlighting key value propositions with icons (Quality, Uniqueness, Shipping).
  - **Shop by Category**: A visually-driven section with linked images for different product categories.
  - **Testimonials**: A section displaying customer quotes with star ratings to build trust.

- **Product System**:
  - **Product Data**: Centralized product data in `src/data/products.js`, including arrays for multiple `images`, `details`, `rating`, and `reviews`.
  - **Product Card**: A modern product card that displays the primary image, name, star rating, price, and buttons for adding to the cart and wishlist.
  - **Product Detail Page**: A comprehensive page featuring an image gallery with thumbnails, detailed description, feature list, and a "You Might Also Like" section for related products.

- **E-Commerce Functionality**:
  - **Shopping Cart**: Fully functional client-side cart managed with React Context. The header icon updates with the total quantity of items.
  - **Wishlist**: A client-side wishlist managed with React Context. The header icon updates with the number of items, and products can be added or removed from any product card or detail page.

- **Navigation & Layout**:
  - **Modern Header**: A sticky, responsive header with a blurred background effect. It includes primary navigation, a search bar, and dynamic icons for the cart and wishlist. Features a slide-out menu for mobile devices.
  - **Comprehensive Footer**: An expanded footer with quick links, legal information, a newsletter subscription form, and social media icons.

- **Content Pages**:
  - **About Page**: A dedicated page explaining the company's story and values, and introducing the team with images and roles.
  - **Contact Page**: A professional contact page with a contact form, direct contact information (email, phone, address), and an embedded Google Map.

## Current State Summary

The initial development and styling phase is complete. The application is fully featured with a modern, responsive design and core e-commerce functionality (product browsing, cart, wishlist). All planned pages and UI components have been implemented and styled according to the design guidelines. The codebase is organized and leverages modern Next.js features like the App Router and client-side state management with Context.
