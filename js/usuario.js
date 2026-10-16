const inscripciones = new Map();

const cursos = [
    { nombre: "Fundamentos de programación", profesor: "Laura Gómez", dias: "Lunes y miércoles", horario: "8:00 a. m. - 10:00 a. m.", cupos: 20 },
    { nombre: "Desarrollo web con HTML y CSS", profesor: "Carlos Ramírez", dias: "Martes y jueves", horario: "8:00 a. m. - 10:00 a. m.", cupos: 20 },
    { nombre: "JavaScript y desarrollo frontend", profesor: "Andrea Torres", dias: "Lunes y miércoles", horario: "2:00 p. m. - 4:00 p. m.", cupos: 20 },
    { nombre: "Programación orientada a objetos", profesor: "Diego Martínez", dias: "Martes y jueves", horario: "6:00 p. m. - 8:00 p. m.", cupos: 15 },
    { nombre: "Bases de datos SQL", profesor: "Paula Restrepo", dias: "Miércoles y viernes", horario: "8:00 a. m. - 10:00 a. m.", cupos: 15 },
    { nombre: "Desarrollo backend con Python", profesor: "Santiago Pérez", dias: "Martes y jueves", horario: "2:00 p. m. - 4:00 p. m.", cupos: 15 },
    { nombre: "Control de versiones con Git", profesor: "Mariana López", dias: "Viernes", horario: "6:00 p. m. - 8:00 p. m.", cupos: 25 }
];

const selectCurso = document.getElementById("curso");

for (let i = 0; i < cursos.length; i++) {
    const opcion = document.createElement("option");
    opcion.value = cursos[i].nombre;
    opcion.textContent = cursos[i].nombre;
    selectCurso.appendChild(opcion);
}

function registrar() {
    const nombre = document.getElementById("nombreCompleto").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const curso = document.getElementById("curso").value;

    const datos = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        curso: curso
    };

    if (inscripciones.has(datos.email)) {
        alert("Este correo ya está inscrito.");
        return;
    }

    inscripciones.set(datos.email, datos);

    alert("¡Inscripción registrada con éxito!");
    document.getElementById("formInscripcion").reset();
}