// Datos de los clientes almacenados en un array de objetos
clientes = [
    {
        usuario: "Karol Diaz",
        contraseña: "8910",
        nombre: "Karol Jesus",
        apellido: "Diaz Laverde",
        numeroCuenta: "1012358025",
        saldo: 100000000,
        transferencias: [],
    },
    {
        usuario: "mayitoqc",
        contraseña: "8910",
        nombre: "Mayerly",
        apellido: "Quiroga Caro",
        numeroCuenta: "1073679337",
        saldo: 5000000,
        transferencias: [],
    },
    {
        usuario: "k",
        contraseña: "1",
        nombre: "Bruno Diaz",
        apellido: "Diaz",
        numeroCuenta: "1073610079337",
        saldo: 5000000,
        transferencias: [],
    },
    {
        usuario: "Julian",
        contraseña: "1234",
        nombre: "Julain",
        apellido: "Florez",
        numeroCuenta: "45645575768578",
        saldo: 70000000,
        transferencias: [],
    },
];

// Solicitar el usuario
usuarioIngresado = prompt("Ingrese su usuario");

cliente = null; // Inicializamos la variable cliente como null

for (i = 0; i < clientes.length; i++) {
    if (clientes[i].usuario === usuarioIngresado) {
        cliente = clientes[i]; // Si coincide, asignamos el cliente encontrado
        break; // Salimos del bucle una vez encontrado
    }
}

// ...código existente...

if (!cliente) {
    alert("Usuario incorrecto");
    window.location = "index.html";
} else {
    // Solicitar contraseña
    contraseñaIngresada = prompt("Ingrese su contraseña");
    if (cliente.contraseña !== contraseñaIngresada) {
        alert("Contraseña incorrecta");
        window.location = "index.html";
    } else {
        alert(`Bienvenido, ${cliente.nombre} ${cliente.apellido}`);

        // Actualizar el valor del input con el nombre del usuario
        document.f1.nomUser.value = `${cliente.nombre} ${cliente.apellido}`;
        // Actualizar total de la cuenta
        document.f1.nCuenta.value = `\n\t${cliente.numeroCuenta}`;
        // Actualizar saldo
        // Formatear el saldo con separadores de miles para mostrarlo
        document.f1.saldo.value = `\n\t${cliente.saldo.toLocaleString('es-ES')}`;


        // Informacion desplegada en la caja modal de contactos:
        document.addEventListener("DOMContentLoaded", function () {
            // Obtener el elemento de la lista
            listaUsuarios = document.getElementById("listaUsuarios");

            // Llenar la lista de usuarios usando un bucle for
            for (i = 0; i < clientes.length; i++) {
                cliente = clientes[i];
                li = document.createElement("li");
                li.textContent = `${cliente.nombre} ${cliente.apellido} (${cliente.usuario})`;
                li.classList.add("list-group-item");
                listaUsuarios.appendChild(li);
            }
        });
    }
}


// Función para realizar transferencia
