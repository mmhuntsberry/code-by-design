"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const users_1 = require("../controllers/users");
router.get("/", users_1.list);
router.get("/:id", users_1.show);
router.post("/", users_1.create);
router.put("/:id", users_1.update);
router.delete("/:id", users_1.remove);
exports.default = router;
