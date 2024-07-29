function filtrarMayoresDeEdad() {
    const personas = [
        { nombre: 'Ana', edad: 17 },
        { nombre: 'Luis', edad: 20 },
        { nombre: 'Carlos', edad: 15 },
        { nombre: 'María', edad: 22 }
    ];
    const mayoresDeEdad = personas.filter(persona => persona.edad >= 18);

    document.getElementById('resultado1').textContent = JSON.stringify(mayoresDeEdad);
  
}


function transformarYFiltrar() {
    const numeros = [1,2,3,4,10];
    const numerosCuadrado = numeros.map(numero => numero * numero);
    const mayoresDe20 = numerosCuadrado.filter(numero => numero > 20);

    document.getElementById('resultado2').textContent = JSON.stringify(mayoresDe20);
  
}

function obtenerUsuarios()
{
    fetch(`http://localhost:3003/usuario/`)
            .then(res => res.json())
            .then(res => {
                res.forEach(item => {
                    console.log(JSON.stringify(item, null, 2));

                }
            )   
        })
    .catch(err => console.error(err));
}


document.getElementById('agregar').addEventListener('click', () => {
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = 'Nuevo ítem';
    
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        nuevoItem.remove();
    });

    nuevoItem.appendChild(botonEliminar);
    document.getElementById('lista').appendChild(nuevoItem);
});

function obtenerUsuarios()
{
    fetch(`http://localhost:3003/usuario/`)
            .then(res => res.json())
            .then(res => {
                res.forEach(item => {
                    console.log(JSON.stringify(res, null, 2));
                    document.getElementById('resultado3').textContent = item.nombre;
                }
            )   
        })
    .catch(err => console.error(err));
}

function ordenarPorPropiedad() {
    const propiedad = document.getElementById('propiedad').value;
    const objetos = [
        { nombre: 'Ana', edad: 17 },
        { nombre: 'Luis', edad: 20 },
        { nombre: 'Carlos', edad: 15 },
        { nombre: 'María', edad: 22 }
    ];

    const objetosOrdenados = objetos.slice().sort((a, b) => {
        if (a[propiedad] < b[propiedad]) {
            return -1;
        }
        if (a[propiedad] > b[propiedad]) {
            return 1;
        }
        return 0;
    });

    document.getElementById('resultado5').textContent = JSON.stringify(objetosOrdenados);
}







