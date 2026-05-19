import { Router } from "express";
import { GrupoController } from "../controllers/grupo";
import { asyncHandler } from "../../utils/asyncHandler";

const grupoRouter = Router();
const controller = new GrupoController();

grupoRouter.post("/", asyncHandler(controller.create));
grupoRouter.get("/", asyncHandler(controller.findAll));
grupoRouter.get("/:id", asyncHandler(controller.findById));
grupoRouter.get("/:id/selecoes", asyncHandler(controller.findSelecoes));
grupoRouter.put("/:id", asyncHandler(controller.update));
grupoRouter.delete("/:id", asyncHandler(controller.delete));

export { grupoRouter };
