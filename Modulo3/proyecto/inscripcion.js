// Obtener la lista de alumnos almacenada en localStorage al cargar la página
let listaAlumnos = JSON.parse(localStorage.getItem('listaAlumnos')) || [];

function darDeAlta() {
  // Obtener los valores de los campos de entrada
  var nombre = document.getElementById('nombre').value;
  var apellidos = document.getElementById('apellidos').value;
  var edad = document.getElementById('edad').value;
  
  // Validar que los campos no estén vacíos
  if (nombre.trim() === '' || apellidos.trim() === '' || edad.trim() === '') {
      alert('Por favor, completa todos los campos.');
  } else {
      // Si todos los campos están completos, mostrar un mensaje de confirmación
      alert('¡Alumno dado de alta con éxito!\n\nNombre: ' + nombre + '\nApellidos: ' + apellidos + '\nEdad: ' + edad);
  }
}

// Función para inscribir un alumno a una clase y asignarle calificaciones
function inscribirAlumno() {
  const nombre = document.getElementById('nombre').value;
  const apellidos = document.getElementById('apellidos').value;
  const edad = document.getElementById('edad').value;
  const materia = document.getElementById('materia').value;
  const calificaciones = document.getElementById('calificaciones').value.split(',').map(parseFloat);

  // Verificar si el alumno ya está inscrito
  const alumnoExistente = listaAlumnos.find(alumno => alumno.nombre === nombre && alumno.apellidos === apellidos);
  if (alumnoExistente) {
    // Verificar si ya está inscrito en la materia
    if (alumnoExistente.materiasInscritas.includes(materia)) {
      console.log(`El alumno ${nombre} ${apellidos} ya está inscrito en la materia ${materia}.`);
      return;
    }
    // Inscribir al alumno en la materia y asignar calificaciones
    alumnoExistente.materiasInscritas.push(materia);
    alumnoExistente.calificaciones[materia] = calificaciones;
    console.log(`El alumno ${nombre} ${apellidos} ha sido inscrito a la materia ${materia} con calificaciones: ${calificaciones}.`);
  } else {
    // Crear un nuevo alumno y agregarlo a la lista
    const nuevoAlumno = {
      nombre: nombre,
      apellidos: apellidos,
      edad: edad,
      materiasInscritas: [materia],
      calificaciones: {}
    };
    nuevoAlumno.calificaciones[materia] = calificaciones;
    listaAlumnos.push(nuevoAlumno);
    console.log(`Nuevo alumno ${nombre} ${apellidos} inscrito a la materia ${materia} con calificaciones: ${calificaciones}.`);
  }

  // Guardar lista de alumnos en localStorage
  localStorage.setItem('listaAlumnos', JSON.stringify(listaAlumnos));
}
