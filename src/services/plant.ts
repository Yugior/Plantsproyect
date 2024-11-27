import {
  deletePlant,
  findAllPlant,
  insertPlant,
  updatePlant,
} from "../models/plant";
import { Plant } from "../interfaces/plant";
// Obtener todos los alumnos
export const findAll = async (limit: number, offset: number) => {
  return await findAllPlant(limit, offset);
};
export const update = async (id: number, plant: Plant) => {
  return await updatePlant(id, plant);
};
export const insert = async (plant: Plant) => {
  return await insertPlant(plant);
};
export const deleteById = async (id: number) => {
  return await deletePlant(id);
};
