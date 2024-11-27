// routes/usuarios.ts
import { Router } from "express";
import {
  createPlant,
  deletePlant,
  getPlant,
  updatePlant,
} from "../controllers/plant";
import validate from "../middlewares/validate";
import { PlantSchema } from "../schemas/plant";

const router = Router();

// Regresa todas las plantas en la base de datos
router.get("/", getPlant);

// Crea una planta en la BD
router.post("/", validate(PlantSchema), createPlant);

// Actualiza los datos de una planta en la BD
router.put("/:id", validate(PlantSchema), updatePlant);

// Borra los datos de una planta en la BD
router.delete("/:id", deletePlant);

export default router;
