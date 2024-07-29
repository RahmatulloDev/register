import express from "express";
import { create } from "express-handlebars";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file (if it exists)
dotenv.config();

const app = express();

// Configure Handlebars templating engine
const hbs = create({ defaultLayout: "main", extname: "hbs" });
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse incoming form data
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());

// Import and mount routes
import AuthRoutes from "./routes/auth.js";
import ProductsRoutes from "./routes/products.js";
app.use(AuthRoutes);
app.use(ProductsRoutes);

// Connect to MongoDB database (using environment variable)
const startApp = async () => {
  try {
    mongoose.set("strictQuery", false); // Optional, depending on Mongoose version
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("Mongo DB connected");

    const PORT = process.env.PORT || 4100;
    app.listen(PORT, () =>
      console.log("Server is running on port:", PORT)
    );
  } catch (error) {
    console.error(error);
  }
};

startApp();
