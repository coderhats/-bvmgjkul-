canvas=document.getElementById('myCanvas');
ctx= canvas.getContext('2d');

ctx.beginPath();
ctx.strokestyle="grey";
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokestyle="Blue";
ctx.lineWidth =5;
ctx.arc(250,215,50,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokestyle="Black";
ctx.lineWidth =5;
ctx.arc(360,215,50,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokestyle="Red";
ctx.lineWidth =5;
ctx.arc(460,215,50,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokestyle="Yellow";
ctx.lineWidth =5;
ctx.arc(310,250,50,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokestyle="Green";
ctx.lineWidth =5;
ctx.arc(410,250,50,0,2*Math.PI)
ctx.stroke();