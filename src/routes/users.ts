import { Router } from "express";
const router = Router();

import { list, show, create, update, remove } from "../controllers/users";

router.get("/", list);
router.get("/:id", show);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
