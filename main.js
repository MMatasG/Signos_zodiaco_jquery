URL = '';
$(document).ready(function(){

let ur1 = "https://aztro.sameerkumar.website?sign=";
let ur2 = "";
let ur3 = "&day=today";
const data = {}

$("a").click(function(){
    let ur1 = "https://aztro.sameerkumar.website?sign=",
    ur2 = $(this).children("img").attr("alt"),
    ur3 = "&day=today",
    enlace = ur1 + ur2 + ur3
    console.log(data);
    $.ajax({
        type:'POST',
        url:enlace,
        success:function(data){
        console.log(data);
        escribir_datos(ur2, data.color, data.description, data.compatibility, data.mood, data.current_date, data.lucky_number, data.lucky_time);
    }})});

var div = document.getElementById("div_signos");
var div2 = document.getElementById("div_signos2");
var texto = '';

function escribir_datos(signo, color, descripcion, compatibilidad, estado_animo, fecha_hoy, numero_suerte, hora_suerte){
    $("#escoger").remove();
    $("#div_signos").remove();
    $("#div_signos2").remove();
    
    const datos = `
   <img src="images/${signo}.png">
    <p class="titulo">${fecha_hoy} </p> 
        
    <p id="descripcion">
        ${descripcion} </p> 
    <p class="titulo >Estado de animo </p> 
        ${estado_animo} 
    <p class="titulo">Color </p> 
        ${color} 
    <p class="titulo">Compatibility </p> 
        ${compatibilidad} 
    <p class="titulo">Lucky number </p> 
        ${numero_suerte} 
    <p class="titulo">Lucky hour </p> 
        ${hora_suerte} 
       <br> <br> <br> <a href="index.html">Volver al inicio</a>
    `;
    $('#div_Datos').css('alignItems', 'center');
    
    jQuery('<div>', {
        id: 'div_Datos',
        class: 'resultados',
        title: 'div_datos'
    }).appendTo('body');

    $( "#div_Datos" ).html( datos);
    
}
});

/*
                 *       +
           '                  |
       ()    .-.,="``"=.    - o -
             '=/_       \     |
          *   |  '=._    |
               \     `=./`,        '
            .   '=.__.=' `='      *
   +                         +
        O      *        '       .
                    .
*/