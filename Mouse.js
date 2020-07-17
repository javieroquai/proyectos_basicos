
var estado = 0;
var colorLinea = "black";
var x;
var y;

document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", dibujarMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

function dibujarMouse(evento)
{
  if (estado == 1)
  {
    var xFinal = evento.clientX - 8;
    var yFinal = evento.clientY - 80;
    dibujarLinea(colorLinea, x, y, xFinal, yFinal, papel);

  }
  x = evento.clientX - 8;
  y = evento.clientY - 80;

  }
function presionarMouse(evento)
{
  estado = 1;
}
function soltarMouse(evento)
{
  estado = 0;
}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.lineWidth = 3;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}
