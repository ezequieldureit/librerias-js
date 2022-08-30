const solicitar = document.getElementById('solicitar');
const container_id = document.getElementById('container_id');
const cerrar = document.getElementById('cerrar');

solicitar.addEventListener('click', () => {

    swal({
        title: "Plan Número 1-Low Carb!",
        text: "La dieta baja en carbohidratos (o Low carb, como se la conoce en inglés) restringe los carbohidratos. Los carbohidratos se encuentran mayormente en los alimentos azucarados, la pasta y el pan. En su lugar se consume comida a base de ingredientes naturales, enfocándose en proteínas y verduras y grasas naturales.",
        icon: "success",
    });

});




let nombre = document.getElementById("nombre").value;
let edad = document.getElementById("edad").value;
let peso = document.getElementById("peso").value;
let text = document.getElementById("resultado");

text.innerHTML = "Hola " + nombre + "este es el plan alimenticio";

