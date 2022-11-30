var sumar = function(){
    
    var Num1,Num2,suma,text;  
    Num1 = document.getElementById("num1").value;  
    Num2 = document.getElementById("num2").value;  
    if (isNaN(Num1) || isNaN(Num2)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y  
      suma=parseFloat(Num1)+parseFloat(Num2);  
      text= suma;  
    }  
    document.getElementById("resultado").innerHTML = text;  


    limpiar();
}

var Restar = function(){
    
    var Num1,Num2,suma,text;  
    Num1 = document.getElementById("num1").value;  
    Num2 = document.getElementById("num2").value;  
    if (isNaN(Num1) || isNaN(Num2)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y  
      suma=parseFloat(Num1)-parseFloat(Num2);  
      text= suma;  
    }  
    
    document.getElementById("resultado").innerHTML = text;  


    limpiar();
}

var Multiplicar = function(){
    
    var Num1,Num2,suma,text;  
    Num1 = document.getElementById("num1").value;  
    Num2 = document.getElementById("num2").value;  
    if (isNaN(Num1) || isNaN(Num2)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y  
      suma=parseFloat(Num1)*parseFloat(Num2);  
      text= suma;  
    }  
    document.getElementById("resultado").innerHTML = text;  


    limpiar();
}

var Dividir = function(){
    
    var Num1,Num2,suma,text;  
    Num1 = document.getElementById("num1").value;  
    Num2 = document.getElementById("num2").value;  
    if (isNaN(Num1) || isNaN(Num2)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y  
      suma=parseFloat(Num1)/parseFloat(Num2);  
      text= suma;  
    }  
    document.getElementById("resultado").innerHTML = text;  


    limpiar();
}
var limpiar = function(){
    document.getElementById("num1").value=""
    document.getElementById("num2").value=""
}

