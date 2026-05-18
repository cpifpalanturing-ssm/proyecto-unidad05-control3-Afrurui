document.addEventListener("DOMContentLoaded", () => {
  const contenedorViajes = document.querySelector(".lista-viajes");

  obtenerViajes();

  function obtenerViajes() {
    fetch("/api/viajes")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudieron obtener los viajes");
        }
        return respuesta.json();
      })
      .then((viajes) => {
        mostrarViajes(viajes);
      })
      .catch((error) => {
        console.error("Error:", error);
        contenedorViajes.innerHTML = "<p>Error al cargar los viajes.</p>";
      });
  }

  function mostrarViajes(viajes) {
    contenedorViajes.innerHTML = "";

    if (viajes.length === 0) {
      contenedorViajes.innerHTML = "<p>No hay viajes disponibles.</p>";
      return;
    }

    viajes.forEach((viaje) => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta-viaje";

      const fechaInicio = formatearFecha(viaje.fecha_inicio);
      const fechaFin = formatearFecha(viaje.fecha_fin);

      tarjeta.innerHTML = `
        <h3>${viaje.titulo}</h3>
        <p><strong>Fechas:</strong> ${fechaInicio} - ${fechaFin}</p>
        <p><strong>Presupuesto:</strong> ${viaje.presupuesto} €</p>
        <p>${viaje.descripcion}</p>
        <button class="boton boton-pequeno">Ver detalle</button>
      `;

      contenedorViajes.appendChild(tarjeta);
    });
  }

  function formatearFecha(fecha) {
    if (!fecha) {
      return "";
    }

    return fecha.substring(0, 10).split("-").reverse().join("/");
  }
});