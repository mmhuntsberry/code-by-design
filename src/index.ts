import express from "express";
import type { Request, Response } from "express";
import userRoutes from "./routes/users";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use("/users", userRoutes);

// Base Route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the jungle!" });
});

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
