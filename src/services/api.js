const API_URL =
  "https://vistara.ark-kos.com/inventory/api";

export const getProductos = async () => {
  const response = await fetch(
    `${API_URL}/catalog/6/products/`
  );

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }

  return await response.json();
};