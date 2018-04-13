function mensaje(){
    alert('Hello word');
}
window.onload=hacerclic;
function suma(){
    var n1= document.getElementById("numero1").value;
    var n2= document.getElementById("numero2").value;
    var result= parseInt(n1) + parseInt(n2);
    document.getElementById("resultado").innerHTML=result;
    }
function mostrartexto(){
    var elem=document.getElementById("parrafo1");//comentario javascript
    elem.innerHTML = "Texto cambiado<strong>con negrita</strong>";
}
function concatenanombre(){
    var nombre=document.getElementById("nombre").innerHTML;
    var apellido=document.getElementById("apellido").innerHTML;

document.getElementById("nombrecompleto").innerHTML=nombre + " " + apellido
}
function resta(){
    var n1= document.getElementById("numero1").value;
    var n2= document.getElementById("numero2").value;
    var result= parseInt(n1) - parseInt(n2);
    document.getElementById("resultado").innerHTML= result;
}
function multiplica(){
    var n1= document.getElementById("numero1").value;
    var n2= document.getElementById("numero2").value;
    var result= parseInt(n1) * parseInt(n2);
    document.getElementById("resultado").innerHTML= result;
}
function division(){
    var n1= document.getElementById("numero1").value;
    var n2= document.getElementById("numero2").value;
    var result= parseInt(n1) / parseInt(n2);
    document.getElementById("resultado").innerHTML= result;
}
function potencia(){
    var n1= document.getElementById("numero1").value;
    var n2= document.getElementById("numero2").value;
    var result= parseInt(n1) ** parseInt(n2);
    document.getElementById("resultado").innerHTML= result;
}
function pares(){
    var n1= document.getElementById("numero1").value;
    var n2= document.getElementById("numero2").value;
    if(n1%2===0 && n2%2===0){
       result= "ES PAR!";
    }
    else{
        result= "Ni de coña";
    }
    document.getElementById("resultado").innerHTML= result;
}

function muestracoches(){
    var coches= ["Renault", "Ford", "Ferrari","Citroen", "Peugeot"];
    var texto="<ul>";
    for(i=0;i<coches.length;i++){
        texto +="<li>" +coches[i] + "</li>";
    }
    texto +="</ul>";
    document.getElementById("listadocoches").innerHTML= texto;
}

function muestrapeso(){
    var peso=[80,100,73,67,93,89,81];
    var compara=0;
    for(i=0;i<peso.length;i++){
        if(peso[i]>=80){
            compara++;
        }
    }
    document.getElementById("pesos").innerHTML= compara;
}

function muestranotas(){
    var notas=[3,8,7,5,4.5,9,8,7,3.8,6,10,7,7.5];
    var compara=[0,0,0,0,0,0];
    for(i=0;i<notas.length;i++){
        if(notas[i]<5){
            compara[0]++;
        }else if(notas[i]>=5 && notas[i]<=6){
            compara[1]++;
        }else if(notas[i]==6 && notas[i]<=7){
            compara[2]++;
        }else if(notas[i]==7 && notas[i]<=9){
            compara[3]++;
        }
        else if(notas[i]==9&& notas[i]<=10){
            compara[4]++;
        }
        else if(notas[i]==10){
            compara[5]++;
        }
    }
    document.getElementById("Resultados notas").innerHTML= "Suspenso" + compara[0] + "<br>" + "Apto" + compara[1] + "<br>" + "Bien" + compara[2] +
    "<br>" + "Notable" + compara[3] + "<br>" + "Sobresaliente" + compara[4] + "<br>" + "Matricula" + compara[5];
}
function datosgenerales(operacion){
    var empleado=[{nombre: "Marta", sueldo: "1000", horas: "50"},
                  {nombre: "Javi", sueldo: "3500", horas: "100"},
                  {nombre: "Pepe", sueldo: "800", horas: "100"},
                  {nombre: "Sandra", sueldo: "950", horas: "95"},
                  {nombre: "Teresa", sueldo: "1700", horas: "90"}];
    if(operacion=="menoscobra"){
    empleado.sort(function(a,b){return a.sueldo - b.sueldo});
    //empleado[sueldo](function(a.sueldo,b.sueldo){return a.sueldo - b.sueldo});
    document.getElementById("menoscobra").innerHTML=empleado[0].nombre;
    }
    else if(operacion=="mashoras"){
    empleado.sort(function(a, b){return a.horas - b.horas});
   document.getElementById("mashoras").innerHTML=empleado[0].nombre;
   }
   else{
    alert("Eres un cafre");
    
   }
}
//


//

function rellenartabla(){
    $(document).ready(function() {
    $('dataset').DataTable( {
        data: dataSet,
        columns: [
            { title: "Nombre" },
            { title: "Posición" },
            { title: "Horas" }
        ]
    } );
} );
    
}