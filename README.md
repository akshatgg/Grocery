# Ecobazar: Organic Food E-commerce Website

**Ecobazar-Grocery** is a modern and feature-rich React.js application designed to bring an organic food e-commerce website to life. It provides a seamless, engaging, and user-friendly shopping experience tailored for businesses in the organic and natural food industry.

---

## 🌱 Key Features

- **🌟 Intuitive & Elegant UI:** A visually appealing and user-friendly interface ensures a smooth and enjoyable shopping journey.
- **🔍 Advanced Product Filtering:** Effortlessly discover organic products with refined filtering options to meet specific customer needs.
- **🛒 Full E-commerce Functionality:** Includes essential pages like:
  - Shop
  - Product Detail
  - Shopping Cart
  - Checkout
  - Blog
  - User Dashboard
  - Order History
  - Order Details
  - Contact
  - FAQs

---

## 🚀 Getting Started

Follow these steps to set up and run the project:

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/akshatgg/Grocery.git
   ```
2. **Navigate to the project directory:**  
   ```bash
   cd Grocery
   ```
3. **Install dependencies:**  
   ```bash
   npm install
   ```
4. **Start the development server:**  
   ```bash
   npm run dev
   ```
5. **Open your browser and visit:**  
   ```
   http://localhost:5173
   ```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and insert:

```env
VITE_CLOUD_NAME=YOUR_CLOUDINARY_NAME
```
This is required for uploading items to Cloudinary and fetching them directly.

---

## 📂 Data Structure

The project includes two key data files:

1. **Product Data** (`src/components/AllProducts/ProductsData.jsx`)  
   - Stores all product details.
   - Ensure to paste the **Cloudinary Image ID** in the `photo_url` field for each product.

2. **Category Data** (`src/components/CategoryMeals/CategoriesData.jsx`)  
   - Stores all product category details displayed on the homepage.

---

## 🌍 Join the Organic Revolution!

Let's build a delightful and sustainable organic food e-commerce experience together with **Ecobazar**! 🌿✨

