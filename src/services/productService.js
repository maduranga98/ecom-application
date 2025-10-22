import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../lib/firebase";

// Collection name
const PRODUCTS_COLLECTION = "products";

/**
 * Get all products from Firebase
 * @returns {Promise<Array>} Array of products
 */
export async function getAllProducts() {
  try {
    const productsRef = collection(db, PRODUCTS_COLLECTION);
    const querySnapshot = await getDocs(productsRef);

    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

/**
 * Get a single product by ID
 * @param {string} productId - The product ID
 * @returns {Promise<Object>} Product data
 */
export async function getProductById(productId) {
  try {
    const productRef = doc(db, PRODUCTS_COLLECTION, productId);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      return {
        id: productSnap.id,
        ...productSnap.data(),
      };
    } else {
      throw new Error("Product not found");
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}

/**
 * Get featured products (you can customize the query)
 * @param {number} limitCount - Number of products to fetch
 * @returns {Promise<Array>} Array of featured products
 */
export async function getFeaturedProducts(limitCount = 4) {
  try {
    const productsRef = collection(db, PRODUCTS_COLLECTION);
    const q = query(
      productsRef,
      where("featured", "==", true),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(q);

    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return products;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    // If no featured field exists, fall back to getting first N products
    return getAllProducts().then((products) => products.slice(0, limitCount));
  }
}

/**
 * Search products by name or category
 * @param {string} searchTerm - Search term
 * @returns {Promise<Array>} Array of matching products
 */
export async function searchProducts(searchTerm) {
  try {
    const products = await getAllProducts();

    // Client-side filtering (for simple search)
    // For more advanced search, consider using Algolia or Elasticsearch
    const filtered = products.filter(
      (product) =>
        product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered;
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
}

/**
 * Add a new product (Admin function)
 * @param {Object} productData - Product data
 * @returns {Promise<string>} New product ID
 */
export async function addProduct(productData) {
  try {
    const productsRef = collection(db, PRODUCTS_COLLECTION);
    const docRef = await addDoc(productsRef, {
      ...productData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return docRef.id;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
}

/**
 * Update a product (Admin function)
 * @param {string} productId - Product ID
 * @param {Object} productData - Updated product data
 * @returns {Promise<void>}
 */
export async function updateProduct(productId, productData) {
  try {
    const productRef = doc(db, PRODUCTS_COLLECTION, productId);
    await updateDoc(productRef, {
      ...productData,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}

/**
 * Delete a product (Admin function)
 * @param {string} productId - Product ID
 * @returns {Promise<void>}
 */
export async function deleteProduct(productId) {
  try {
    const productRef = doc(db, PRODUCTS_COLLECTION, productId);
    await deleteDoc(productRef);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}

/**
 * Get products by category
 * @param {string} category - Category name
 * @returns {Promise<Array>} Array of products in category
 */
export async function getProductsByCategory(category) {
  try {
    const productsRef = collection(db, PRODUCTS_COLLECTION);
    const q = query(productsRef, where("category", "==", category));

    const querySnapshot = await getDocs(q);

    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return products;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
}
