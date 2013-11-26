(function() {
var canvas = document.getElementByID("airplane-canvas"),
ctx=canvas.getContext("2d"),  
function Airplane(x,y, speed){
	this.x=x;
    this.y=y;
   this.draw=function(ctx){
   }
   	ctx.beginPath();
   	ctx.moveTo(this.x, this.y);
   	ctx.lineTo(this.x, this.y - 30 ); 
   	ctx.lineTo(this.x + 20 , (2*this.y - 3) /2)
   	ctx.lineTo(this.x +  35, (2*this.y - 3)/2)

   	ctx.moveTo(this.x +35, (2*this.y - 30) /2+15)
    ctx.moveTo(this.x +45, (2*this.y - 30) /2+15)

   }
}
