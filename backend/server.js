import express from "express";
import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./src/config/db.js";
import rateLimiter from "./src/middleware/rateLimiter.js";
import dotenv from "dotenv";

dotenv.config({ path: '.env.local', quiet: true });
console.log("MONGO_URI:", process.env.MONGO_URI);
const app = express();
const PORT = process.env.PORT || 5001;

/* connectDB(); */

app.use(express.json());
app.use(rateLimiter); // Apply rate limiter middleware to all routes    
app.use("/api/notes", notesRoutes);

/* app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
}); */

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});