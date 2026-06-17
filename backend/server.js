import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./src/config/db.js";

dotenv.config({ path: ".env.local", quiet: true });
const app = express();
const PORT = process.env.PORT || 5001;

/* connectDB(); */

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use("/api/notes", notesRoutes);

/* app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
}); */

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
