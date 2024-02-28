// Obtener la lista de alumnos almacenada en localStorage al cargar la página
const listaAlumnos = JSON.parse(localStorage.getItem('listaAlumnos')) || [];

// Función para buscar un alumno y mostrar su información
function buscarAlumno() {
  const nombre = document.getElementById('nombre-buscar').value;
  const apellidos = document.getElementById('apellidos-buscar').value;

  const alumnoEncontrado = listaAlumnos.find(alumno => alumno.nombre === nombre && alumno.apellidos === apellidos);
  if (alumnoEncontrado) {
    const resultadoBusqueda = document.getElementById('resultado-busqueda');
    resultadoBusqueda.innerHTML = `
      <h3>Información del Alumno</h3>
      <p><strong>Nombre:</strong> ${alumnoEncontrado.nombre} ${alumnoEncontrado.apellidos}</p>
      <p><strong>Edad:</strong> ${alumnoEncontrado.edad}</p>
      <p><strong>Materias Inscritas:</strong> ${alumnoEncontrado.materiasInscritas.join(', ')}</p>
      <p><strong>Calificaciones:</strong></p>
      <ul>
        ${alumnoEncontrado.materiasInscritas.map(materia => `<li>${materia}: ${alumnoEncontrado.calificaciones[materia].join(', ')}</li>`).join('')}
      </ul>
    `;
  } else {
    const resultadoBusqueda = document.getElementById('resultado-busqueda');
    resultadoBusqueda.innerHTML = '<p>Alumno no encontrado.</p>';
  }
}
