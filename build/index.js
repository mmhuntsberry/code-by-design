"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(express_1.default.json());
app.use("/users", users_1.default);
// Base Route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the jungle!" });
});
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
