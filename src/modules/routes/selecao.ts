import { Router } from "express";
import { SelecaoController } from "../controllers/selecao";
import { asyncHandler } from "../../utils/asyncHandler";

const selecaoRouter = Router();
const controller = new SelecaoController();

selecaoRouter.post("/", asyncHandler(controller.create));
selecaoRouter.get("/", asyncHandler(controller.findAll));
selecaoRouter.get("/:id", asyncHandler(controller.findById));
selecaoRouter.put("/:id", asyncHandler(controller.update));
selecaoRouter.delete("/:id", asyncHandler(controller.delete));

export { selecaoRouter };
