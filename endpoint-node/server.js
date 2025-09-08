import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

//GET
app.get("/", (req, res) => {
  res.send("Este es el primer endpoint hecho con express");
});

//endpoint con parametro
app.get("/api/user/:id", (req, res) => {
  //detructuracion
  const { id } = req.params;
  if (typeof id == "string") {
    const idInt = parseInt(id); //parseInt convierte de string a entero
    console.log(idInt);
  }

  res.json({ message: `Este es el id dado ${id}` });
});

//query params
app.get("/api/search", (req, res) => {
  const { name, lastname } = req.query; // destructuramos
  res.json({
    Name: name, //renombramos
    lastname, //reutilizamos
  });
  //https://localhost:PORT/api/search?name=Thiago&lastname=Gomez
});

//POST
app.post("/api/user", (req, res) => {
  const { name, email } = req.body;
  res.json({ message: "Usuario creado", data: { name, email } });
});
//UPDATE
//.PUT Envía una solicitud de actualización completa de datos
app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  res.json({
    message: `usuario con id ${id} actualizado`,
    updatedData: { name, email },
  });
});
// DELETE
//.DELETE: Elimina un recurso especificado
app.delete("/api/delete/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Usuario con id ${id} eliminado` });
});

//2 puntos

//Iniciar Server
app.listen(PORT, () => {
  console.log(`El servidor corriendo en ${PORT}`);
});
