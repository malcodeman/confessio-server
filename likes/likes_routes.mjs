import express from "express";

import { create } from "./likes_controller.mjs";
import { requireAuthentication } from "../auth/auth_middleware.mjs";

const router = express.Router();

router.use(requireAuthentication);
router.post("/", create);

export default router;
