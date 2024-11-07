document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el formulario y el botón
    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenimos el envío del formulario

        // Obtenemos los valores de los campos
        var sueldo = document.getElementById("sueldo").value;
        var mensualidad = document.querySelector('input[name="mensualidades"]:checked').value; // Obtenemos el valor del radio button seleccionado
        var hijos = document.getElementById("hijos").value;
        var contrato = document.getElementById("contrato").value;

        // Validamos si alguno de los campos está vacío
        if (sueldo === "" || mensualidad === "" || hijos === "" || contrato === "" || contrato === "opcion0") {
            alert("Por favor, rellene todos los campos.");
            return; // Salimos de la función si hay campos vacíos
        }

        // Convertimos el sueldo a número
        sueldo = parseFloat(sueldo);

        // Calculamos el sueldo mensual
        var sueldoNetoMes = sueldo / mensualidad;

        // Calculamos la retención según el número de hijos
        var retencion = (parseInt(hijos) >= 2) ? 0.08 : 0.12;
        var sueldoBrutoMes = sueldoNetoMes - (sueldoNetoMes * retencion);

        var mensaje= "Su sueldo mensual es: " + sueldoBrutoMes.toFixed(2) + " en " + mensualidad + " pagas. "
        + "Se ha selecionado el tipo contrato: " + (contrato ==="opcion1"? "Contrato Fijo" : contrato ==="opcion2"
            ? "Contrato Temporal":"Autónomo"); 

        var nuevoDiv = document.createElement("div"); 

        nuevoDiv.innerHTML= mensaje; 

        document.body.appendChild(nuevoDiv);

    });

});