// Tipo para representar un Profesor
export interface Plant {
  id?: number;
  nombre: string;
  temp_ambiente_dia_min: string;
  temp_ambiente_dia_max: string;
  temp_ambiente_noche_min: string;
  temp_ambiente_noche_max: string;
  temp_suelo_min: string;
  temp_suelo_max: string;
}

export interface PaginatedPlant {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Plant[];
}
