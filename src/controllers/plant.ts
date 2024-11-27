import { Request, Response } from "express";
import { Plant } from "../interfaces/plant";
import { deleteById, findAll, insert, update } from "../services/plant";
import { insertPlant } from "../models/plant";

// Obtener todos los alumnos
export const getPlant = async (req: Request, res: Response) => {
  try {
    // Obtener parámetros de paginación con valores por defecto
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    // Calcular offset
    const offset = (page - 1) * limit;
    const plants = await findAll(limit, offset);

    res.status(200).json(plants);
  } catch (error) {
    res.status(400).json({ message: "Error al obtener planta", error });
  }
};
export const createPlant = async (req: Request, res: Response) => {
  try {
    const plant: Plant = req.body;
    await insertPlant(plant);
    const newPlant = await insert(plant);
    // Emit event via WebSocket
    const io = req.app.get("io");
    io.emit("newPlantData", newPlant);
    res.status(201).json({ message: "Planta creado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al crear planta", error });
  }
};
export const updatePlant = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    const plant: Plant = req.body;
    await update(id, plant);
    res.status(201).json({ message: "Curso actualizado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar la planta", error });
  }
};
export const deletePlant = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    await deleteById(id);
    res.status(201).json({ message: "Planta eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar la planta", error });
  }
};
