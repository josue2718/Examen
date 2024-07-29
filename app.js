function filtrarMayoresDeEdad(personas) {
    return personas.filter(persona => persona.edad >= 18);
}


const personas = [
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 20 },
    { nombre: 'Carlos', edad: 15 },
    { nombre: 'María', edad: 22 }
];

const mayoresDeEdad = filtrarMayoresDeEdad(personas);
console.log(mayoresDeEdad); // [{ nombre: 'Luis', edad: 20 }, { nombre: 'María', edad: 22 }]
