document.addEventListener("DOMContentLoaded", () => {
  const listaViajes = document.getElementById("lista-viajes");
  const botonRecargar = document.getElementById("boton-recargar");
  const formularioViaje = document.getElementById("formulario-viaje");
  const botonCancelar = document.getElementById("boton-cancelar");
  const mensajeOperacion = document.getElementById("mensaje-operacion");

  const campoIdViaje = document.getElementById("id_viaje");
  const campoIdUsuario = document.getElementById("id_usuario");
  const campoTitulo = document.getElementById("titulo");
  const campoDescripcion = document.getElementById("descripcion");
  const campoFechaInicio = document.getElementById("fecha_inicio");
  const campoFechaFin = document.getElementById("fecha_fin");
  const campoPresupuesto = document.getElementById("presupuesto");

  cargarViajes();

  botonRecargar.addEventListener("click", cargarViajes);

  formularioViaje.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const viaje = {
      id_usuario: Number(campoIdUsuario.value),
      titulo: campoTitulo.value.trim(),
      descripcion: campoDescripcion.value.trim(),
      fecha_inicio: campoFechaInicio.value,
      fecha_fin: campoFechaFin.value,
      presupuesto: Number(campoPresupuesto.value)
    };

    if (campoIdViaje.value === "") {
      crearViaje(viaje);
    } else {
      actualizarViaje(campoIdViaje.value, viaje);
    }
  });

  botonCancelar.addEventListener("click", () => {
    limpiarFormulario();
  });

  function cargarViajes() {
    fetch("/api/viajes")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Error al obtener los viajes");
        }
        return respuesta.json();
      })
      .then((viajes) => {
        mostrarViajes(viajes);
      })
      .catch((error) => {
        console.error("Error:", error);
        listaViajes.innerHTML = "<p>Error al cargar los viajes.</p>";
      });
  }

  function mostrarViajes(viajes) {
    listaViajes.innerHTML = "";

    if (viajes.length === 0) {
      listaViajes.innerHTML = "<p>No hay viajes disponibles.</p>";
      return;
    }

    viajes.forEach((viaje) => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta-viaje";

      tarjeta.innerHTML = `
        <h3>${viaje.titulo}</h3>
        <p><strong>Fechas:</strong> ${formatearFecha(viaje.fecha_inicio)} - ${formatearFecha(viaje.fecha_fin)}</p>
        <p><strong>Presupuesto:</strong> ${viaje.presupuesto} €</p>
        <p>${viaje.descripcion}</p>
        <button class="boton boton-pequeno boton-editar">Editar</button>
        <button class="boton boton-pequeno boton-eliminar">Eliminar</button>
      `;

      const botonEditar = tarjeta.querySelector(".boton-editar");
      const botonEliminar = tarjeta.querySelector(".boton-eliminar");

      botonEditar.addEventListener("click", () => {
        cargarFormularioEdicion(viaje);
      });

      botonEliminar.addEventListener("click", () => {
        eliminarViaje(viaje.id_viaje);
      });

      listaViajes.appendChild(tarjeta);
    });
  }

  function crearViaje(viaje) {
    fetch("/api/viajes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(viaje)
    })
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Error al crear el viaje");
        }
        return respuesta.json();
      })
      .then((datos) => {
        mensajeOperacion.textContent = datos.mensaje;
        limpiarFormulario();
        cargarViajes();
      })
      .catch((error) => {
        console.error("Error:", error);
        mensajeOperacion.textContent = "No se pudo crear el viaje.";
      });
  }

  function actualizarViaje(id, viaje) {
    fetch(`/api/viajes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(viaje)
    })
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Error al actualizar el viaje");
        }
        return respuesta.json();
      })
      .then((datos) => {
        mensajeOperacion.textContent = datos.mensaje;
        limpiarFormulario();
        cargarViajes();
      })
      .catch((error) => {
        console.error("Error:", error);
        mensajeOperacion.textContent = "No se pudo actualizar el viaje.";
      });
  }

  function eliminarViaje(id) {
    const confirmar = window.confirm("¿Seguro que quieres eliminar este viaje?");

    if (!confirmar) {
      return;
    }

    fetch(`/api/viajes/${id}`, {
      method: "DELETE"
    })
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Error al eliminar el viaje");
        }
        return respuesta.json();
      })
      .then((datos) => {
        mensajeOperacion.textContent = datos.mensaje;
        cargarViajes();
      })
      .catch((error) => {
        console.error("Error:", error);
        mensajeOperacion.textContent = "No se pudo eliminar el viaje.";
      });
  }

  function cargarFormularioEdicion(viaje) {
    campoIdViaje.value = viaje.id_viaje;
    campoIdUsuario.value = viaje.id_usuario;
    campoTitulo.value = viaje.titulo;
    campoDescripcion.value = viaje.descripcion;
    campoFechaInicio.value = obtenerFechaInput(viaje.fecha_inicio);
    campoFechaFin.value = obtenerFechaInput(viaje.fecha_fin);
    campoPresupuesto.value = viaje.presupuesto;

    botonCancelar.style.display = "inline-block";
    mensajeOperacion.textContent = "Estás editando un viaje.";
    window.location.hash = "nuevo-viaje";
  }

  function limpiarFormulario() {
    formularioViaje.reset();
    campoIdViaje.value = "";
    campoIdUsuario.value = "1";
    botonCancelar.style.display = "none";
    mensajeOperacion.textContent = "";
  }

  function formatearFecha(fecha) {
    if (!fecha) {
      return "";
    }

    return fecha.substring(0, 10).split("-").reverse().join("/");
  }

  function obtenerFechaInput(fecha) {
    if (!fecha) {
      return "";
    }

    return fecha.substring(0, 10);
  }
});