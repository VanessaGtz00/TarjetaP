document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const nombre = document.getElementById("txtNombre").value;
    const puesto = document.getElementById("txtPuesto").value;
    
    // Crear el contenido de la tarjeta
    const tarjetaHTML = `
        <div class="tarjeta">
            <h2>${nombre}</h2>
            <p>${puesto}</p>
        </div>
    `;

    // Mostrar la tarjeta en el contenedor 'recuperarDatos'
    document.getElementById("recuperarDatos").innerHTML = tarjetaHTML;
});