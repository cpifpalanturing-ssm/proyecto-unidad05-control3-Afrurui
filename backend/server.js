const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// ===============================
// CONFIGURACIÓN GENERAL
// ===============================
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../src")));

// ===============================
// CONEXIÓN A MYSQL
// ===============================
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "maletasviajeras"
});

db.connect((error) => {
  if (error) {
    console.error("Error al conectar con MySQL:", error);
    return;
  }
  console.log("Conexión correcta a MySQL");
});

// ===============================
// RUTAS API - VIAJES
// CRUD completo sobre la entidad viajes
// ===============================

// GET - Obtener todos los viajes
app.get("/api/viajes", (req, res) => {
  const sql = "SELECT * FROM viajes";

  db.query(sql, (error, resultados) => {
    if (error) {
      console.error("Error al obtener los viajes:", error);
      return res.status(500).json({ error: "Error al obtener los viajes" });
    }

    res.json(resultados);
  });
});

// POST - Insertar un nuevo viaje
app.post("/api/viajes", (req, res) => {
  const {
    id_usuario,
    titulo,
    descripcion,
    fecha_inicio,
    fecha_fin,
    presupuesto
  } = req.body;

  const sql = `
    INSERT INTO viajes (id_usuario, titulo, descripcion, fecha_inicio, fecha_fin, presupuesto)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [id_usuario, titulo, descripcion, fecha_inicio, fecha_fin, presupuesto],
    (error, resultado) => {
      if (error) {
        console.error("Error al insertar el viaje:", error);
        return res.status(500).json({ error: "Error al insertar el viaje" });
      }

      res.json({
        mensaje: "Viaje insertado correctamente",
        id_viaje: resultado.insertId
      });
    }
  );
});

// PUT - Modificar un viaje existente
app.put("/api/viajes/:id", (req, res) => {
  const id = req.params.id;

  const {
    id_usuario,
    titulo,
    descripcion,
    fecha_inicio,
    fecha_fin,
    presupuesto
  } = req.body;

  const sql = `
    UPDATE viajes
    SET id_usuario = ?, titulo = ?, descripcion = ?, fecha_inicio = ?, fecha_fin = ?, presupuesto = ?
    WHERE id_viaje = ?
  `;

  db.query(
    sql,
    [id_usuario, titulo, descripcion, fecha_inicio, fecha_fin, presupuesto, id],
    (error) => {
      if (error) {
        console.error("Error al modificar el viaje:", error);
        return res.status(500).json({ error: "Error al modificar el viaje" });
      }

      res.json({ mensaje: "Viaje modificado correctamente" });
    }
  );
});

// DELETE - Eliminar un viaje
app.delete("/api/viajes/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM viajes WHERE id_viaje = ?";

  db.query(sql, [id], (error) => {
    if (error) {
      console.error("Error al eliminar el viaje:", error);
      return res.status(500).json({ error: "Error al eliminar el viaje" });
    }

    res.json({ mensaje: "Viaje eliminado correctamente" });
  });
});

// ===============================
// ARRANQUE DEL SERVIDOR
// ===============================
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});