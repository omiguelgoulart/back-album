import { Router } from "express";
import { FigurinhaController } from "../controllers/figurinha";
import { asyncHandler } from "../../utils/asyncHandler";

const figurinhaRouter = Router();
const controller = new FigurinhaController();

figurinhaRouter.post("/", asyncHandler(controller.create));
figurinhaRouter.get("/", asyncHandler(controller.findAll));
figurinhaRouter.get("/selecao/:selecao_id", asyncHandler(controller.findBySelecaoId));
figurinhaRouter.get("/:id", asyncHandler(controller.findById));
figurinhaRouter.put("/:id", asyncHandler(controller.update));
figurinhaRouter.delete("/:id", asyncHandler(controller.delete));

export { figurinhaRouter };
