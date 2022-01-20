canvas= document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

color = "black";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=2;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

color = "red";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=2;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();

color = "yellow";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=2;
ctx.arc(350,300,40,0,2*Math.PI);
ctx.stroke();

color = "green";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=2;
ctx.arc(400,350,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("x="+mouse_x+",y="+mouse_y);
    circle(mouse_x,mouse_y);
}
