let inventario = [];

//Crear 4 productos como objetos (con nombre, precio, categoria) y agregarlos al array con .push().
inventario.push({
  nombre: "Playstation",
  precio: 1500000,
  categoria: "Electrónica",
});
inventario.push({ nombre: "Zapatillas", precio: 120000, categoria: "Calzado" });
inventario.push({
  nombre: "Television",
  precio: 800000,
  categoria: "Electrónica",
});
inventario.push({
  nombre: "camisetas",
  precio: 80000,
  categoria: "Indumentaria",
});

//Mostrar en consola todos los productos con forEach.
inventario.forEach((nombre, precio, categoria) =>
  console.log(nombre, precio, categoria)
);

//Filtrar productos de categoría "Electrónica" y mostrarlos
let electronica = inventario.filter(
  (producto) => producto.categoria === "Electrónica"
);
console.log("Categoria Electrónica:");
console.log(electronica);

//Crear un nuevo array con solo los nombres de los productos, y mostrarlo en consola.
// Paso 5: Crear un nuevo array con solo los nombres de los productos
let nombresProductos = inventario.map((producto) => producto.nombre);
console.log("Todos los nombres de los productos");
console.log(nombresProductos);
