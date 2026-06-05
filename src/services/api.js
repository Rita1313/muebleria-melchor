const API_PRODUCTS =
  "https://vistara.ark-kos.com/inventory/api/catalog/2";

const API_CATEGORIES =
  "https://vistara.ark-kos.com/api/catalog/2";

// y esta de los Productos
export const getProductos = async () => {

  const response = await fetch(
    `${API_PRODUCTS}/products/`
  );

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }

  return await response.json();
};

// esta del Producto por ID
export const getProducto = async (id) => {

  const response = await fetch(
    `${API_PRODUCTS}/product/${id}/`
  );

  if (!response.ok) {
    throw new Error("Error al obtener producto");
  }

  return await response.json();
};

// esta de ñas Categorías
export const getCategorias = async () => {

  const response = await fetch(
    `${API_CATEGORIES}/categories/`
  );

  if (!response.ok) {
    throw new Error("Error al obtener categorías");
  }

  return await response.json();
};

// esta es de las Subcategorías
export const getSubcategorias = async (categoryId) => {

  const response = await fetch(
    `${API_CATEGORIES}/categories/${categoryId}/subcategories/`
  );

  if (!response.ok) {
    throw new Error(
      "Error al obtener subcategorías"
    );
  }

  return await response.json();
};

// esta es para crear pedido
export const crearPedido = async (pedido) => {

  const response = await fetch(
    "https://vistara.ark-kos.com/inventory/api/catalog/6/order/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    }
  );

  if (!response.ok) {
    throw new Error("Error al crear pedido");
  }

  return await response.json();
};