import pool from "../db";
import { RowDataPacket, ResultSetHeader } from "mysql2/promise";
import { PaginatedPlant, Plant } from "../interfaces/plant";
//offset sirve para evaluar el limite desde el numero de offset en adelante, sin contar el offset

// Obtener todos los alumnos
export const findAllPlant = async (
  limit: number,
  offset: number,
): Promise<PaginatedPlant> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM plantas LIMIT ? OFFSET ?",
    [limit, offset],
  );

  // Consulta para obtener el total de registros
  const [totalRows] = (await pool.query(
    "SELECT COUNT(*) as count FROM plantas",
  )) as [{ count: number }[], unknown];
  const total = totalRows[0].count;

  // Calcular el total de páginas
  const totalPages = Math.ceil(total / limit);

  return {
    page: offset / limit + 1,
    limit,
    total,
    totalPages,
    data: rows as Plant[],
  };
};

export const insertPlant = async (plant: Plant): Promise<Plant> => {
  const {
    nombre,
    temp_ambiente_dia_min,
    temp_ambiente_dia_max,
    temp_ambiente_noche_min,
    temp_ambiente_noche_max,
    temp_suelo_min,
    temp_suelo_max,
  } = plant;
  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO  ( nombre, temp_ambiente_dia_min, temp_ambiente_dia_max, temp_ambiente_noche_min, temp_ambiente_noche_max, temp_suelo_min, temp_suelo_max) 
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      nombre,
      temp_ambiente_dia_min,
      temp_ambiente_dia_max,
      temp_ambiente_noche_min,
      temp_ambiente_noche_max,
      temp_suelo_min,
      temp_suelo_max,
    ],
  );
  const { insertId } = result;
  return { id: insertId, ...plant };
};

export const updatePlant = async (id: number, plant: Plant): Promise<Plant> => {
  const {
    nombre,
    temp_ambiente_dia_min,
    temp_ambiente_dia_max,
    temp_ambiente_noche_min,
    temp_ambiente_noche_max,
    temp_suelo_min,
    temp_suelo_max,
  } = plant;

  await pool.query<ResultSetHeader>(
    `UPDATE plantas
     SET 
         nombre = ?, 
         temp_ambiente_dia_min = ?, 
         temp_ambiente_dia_max = ?, 
         temp_ambiente_noche_min = ?, 
         temp_ambiente_noche_max  = ?, 
         temp_suelo_min = ?, 
         temp_suelo_max = ?

     WHERE id = ?;`,
    [
      nombre,
      temp_ambiente_dia_min,
      temp_ambiente_dia_max,
      temp_ambiente_noche_min,
      temp_ambiente_noche_max,
      temp_suelo_min,
      temp_suelo_max,
    ],
  );

  return { id, ...plant };
};
export const deletePlant = async (id: number): Promise<number> => {
  await pool.query<ResultSetHeader>(
    `DELETE FROM plantas WHERE id =
  ?`,
    [id],
  );
  return id;
};
