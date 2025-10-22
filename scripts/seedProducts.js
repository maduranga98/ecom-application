/**
 * Firebase Product Seeding Script
 *
 * This script uploads products to Firebase Firestore
 * Run with: node scripts/seedProducts.js
 */

// Load environment variables
require("dotenv").config({ path: ".env.local" });

// Import Firebase modules
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

// Validate environment variables
const requiredEnvVars = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
  "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
  "NEXT_PUBLIC_FIREBASE_APP_ID",
];

console.log("🔍 Checking environment variables...\n");

const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);

if (missingVars.length > 0) {
  console.error("❌ Missing required environment variables:");
  missingVars.forEach((varName) => console.error(`   - ${varName}`));
  console.error(
    "\n💡 Make sure your .env.local file exists and contains all Firebase config values."
  );
  process.exit(1);
}

console.log("✅ All environment variables found!\n");

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
let app, db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("✅ Firebase initialized successfully!\n");
} catch (error) {
  console.error("❌ Failed to initialize Firebase:", error.message);
  process.exit(1);
}

// Products data
const products = [
  {
    name: "Ceramic Mug",
    price: 25.0,
    rating: 4.5,
    reviews: 65,
    featured: true,
    category: "Home Goods",
    images: [
      "https://images.unsplash.com/photo-1551893138-b53634b706c5?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1585499369066-646014b2d5d8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1610321212450-a9db10434293?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "A beautiful, handcrafted ceramic mug. Perfect for your morning coffee or tea. Each mug is unique, with slight variations in color and texture that add to its charm.",
    details: [
      "Hand-thrown on a potter's wheel",
      "Made from high-quality stoneware clay",
      "Dishwasher and microwave safe",
      "Holds 12 ounces of your favorite beverage",
    ],
  },
  {
    name: "Woven Basket",
    price: 45.0,
    rating: 4.8,
    reviews: 89,
    featured: true,
    category: "Home Goods",
    images: [
      "https://images.unsplash.com/photo-1600915868484-85885f8bd53e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1586793618688-939a8a81b379?q=80&w=2630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "A stylish and functional woven basket, great for storage or as a decorative piece. This basket is made from natural fibers and is perfect for holding blankets, toys, or magazines.",
    details: [
      "Handwoven from seagrass",
      "Features sturdy handles for easy carrying",
      "Adds a natural and rustic touch to any room",
      'Dimensions: 15" diameter, 12" height',
    ],
  },
  {
    name: "Knit Beanie",
    price: 35.0,
    rating: 4.9,
    reviews: 120,
    featured: true,
    category: "Apparel",
    images: [
      "https://images.unsplash.com/photo-1543261986-e525f435b861?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1522201949034-507737b95713?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "A cozy knit beanie to keep you warm in style. Made from a soft and comfortable wool blend, this beanie is perfect for chilly days.",
    details: [
      "Hand-knitted with a chunky yarn",
      "Features a classic ribbed design",
      "One size fits most",
      "Available in multiple colors",
    ],
  },
  {
    name: "Leather Wallet",
    price: 65.0,
    rating: 4.7,
    reviews: 95,
    featured: true,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1607632649692-9a6741368943?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1559563458-527920255c27?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "A high-quality leather wallet with a classic design. This wallet is made from full-grain leather and will develop a beautiful patina over time.",
    details: [
      "Hand-stitched for durability",
      "Features multiple card slots and a cash pocket",
      "Compact and slim design",
      "Ages beautifully with use",
    ],
  },
  {
    name: "Wooden Bowl",
    price: 30.0,
    rating: 4.6,
    reviews: 75,
    featured: false,
    category: "Home Goods",
    images: [
      "https://images.unsplash.com/photo-1597315598282-3c1626476166?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516876437184-593fda40c7c4?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "A beautiful wooden bowl, perfect for serving salads or as a decorative centerpiece. Each bowl is carved from a single piece of wood, showcasing the natural grain and character of the material.",
    details: [
      "Hand-carved from sustainably sourced wood",
      "Finished with a food-safe oil",
      "Easy to clean and maintain",
      "A unique and rustic addition to your kitchen",
    ],
  },
  {
    name: "Linen Throw Pillow",
    price: 40.0,
    rating: 4.9,
    reviews: 110,
    featured: false,
    category: "Home Goods",
    images: [
      "https://www.heveya.sg/products/linen-throw-pillow-bundle?srsltid=AfmBOopGmBFIQq07uGOaIs8DpneH4FFIzvvZASgZjxmtRkxUXi2x9V2V",
      "https://www.bellanottelinens.com/products/linen-throw-pillow?srsltid=AfmBOooejKp7AxCViqg2yRN3kNMlqn3ud-2OpXnDvo8F-EhvgNx2niwX",
    ],
    description:
      "A comfortable and stylish linen throw pillow to add a touch of elegance to your home. Made from high-quality linen, this pillow is both soft and durable.",
    details: [
      "Made from 100% natural linen",
      "Includes a hypoallergenic insert",
      "Features a hidden zipper closure",
      "Machine washable for easy care",
    ],
  },
];

/**
 * Main function to seed products to Firestore
 */
async function seedProducts() {
  console.log("📦 Starting to seed products to Firestore...\n");
  console.log(`📊 Total products to add: ${products.length}\n`);

  let successCount = 0;
  let failCount = 0;

  try {
    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      try {
        const docRef = await addDoc(collection(db, "products"), {
          ...product,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });

        successCount++;
        console.log(`✅ [${i + 1}/${products.length}] Added: ${product.name}`);
        console.log(`   📝 Document ID: ${docRef.id}\n`);
      } catch (error) {
        failCount++;
        console.error(
          `❌ [${i + 1}/${products.length}] Failed to add: ${product.name}`
        );
        console.error(`   Error: ${error.message}\n`);
      }
    }

    // Summary
    console.log("═══════════════════════════════════════════════════════");
    console.log("📊 SEEDING SUMMARY");
    console.log("═══════════════════════════════════════════════════════");
    console.log(`✅ Successfully added: ${successCount} products`);
    if (failCount > 0) {
      console.log(`❌ Failed to add: ${failCount} products`);
    }
    console.log("═══════════════════════════════════════════════════════\n");

    if (failCount === 0) {
      console.log("🎉 All products seeded successfully!\n");
      console.log("Next steps:");
      console.log("1. Check Firebase Console → Firestore Database");
      console.log("2. Run your app: npm run dev");
      console.log("3. Visit http://localhost:3000\n");
    } else {
      console.log(
        "⚠️  Some products failed to upload. Check the errors above.\n"
      );
    }

    process.exit(failCount > 0 ? 1 : 0);
  } catch (error) {
    console.error("❌ Fatal error during seeding:", error);
    console.error("\nTroubleshooting:");
    console.error("1. Check your Firebase credentials in .env.local");
    console.error("2. Ensure Firestore is enabled in Firebase Console");
    console.error("3. Check Firestore security rules allow write access");
    console.error("4. Verify your internet connection\n");
    process.exit(1);
  }
}

// Run the seeding function
console.log("🚀 Firebase Product Seeder\n");
seedProducts();
