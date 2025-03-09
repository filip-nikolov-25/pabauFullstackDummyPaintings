import { query } from "../db.js";

export const newPainting = async (postData) => {
  const result = await query(
    "INSERT INTO paintings (name, price, description, image) VALUES ($1, $2, $3, $4) RETURNING *",
    [postData.name, postData.price, postData.description, postData.image]
  );
  return result.rows[0];
};

export const getFullListOfPaintings = async () => {
  const result = await query("SELECT * FROM paintings");
  return result.rows;
};

export const getPaintingById = async (id) => {
  const result = await query("SELECT * FROM paintings WHERE id = $1", [id]);
  return result.rows[0]; 
};

export const removePaintingById = async (id) => {
  const result = await query("DELETE FROM paintings WHERE id = $1 RETURNING *", [
    id,
  ]);
  return result.rows[0];
};
