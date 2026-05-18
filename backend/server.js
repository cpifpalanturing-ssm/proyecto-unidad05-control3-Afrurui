const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../src")));

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

app.get("/api/viajes", (req, res) => {
  const sql = "SELECT * FROM viajes";

  db.query(sql, (error, resultados) => {
    if (error) {
      console.error("Error en la consulta:", error);
      return res.status(500).json({ error: "Error al obtener los viajes" });
    }

    res.json(resultados);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});