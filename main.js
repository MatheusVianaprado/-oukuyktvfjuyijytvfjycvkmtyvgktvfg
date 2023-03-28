
var playerObject= ""; 
var blockImageObject= "";
var canvas=new fabric.Canvas("myCanvas")
blockImageWidth=30
blockImageHeight=30 
playerX=10
playerY=10
function playerUpdate(){
fabric.Image.fromURL("player.png",function(Img){
playerObject=Img
playerObject.scaleToWidth(150)
playerObject.scaleToHeight(150)
playerObject.set({
    top:playerY,
        left:playerX
})
canvas.add(playerObject)
})

}
function newImage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
    blockImageObject=Img
    blockImageObject.scaleToWidth(blockImageWidth)
    blockImageObject.scaleToHeight(blockImageHeight)
    blockImageObject.set({
        top:playerY,
            left:playerX
    })
    canvas.add(blockImageObject)
    })
    }
    window.addEventListener("keyDown",myKeyDown)
    function myKeyDown(e){
        keyPressed=e.keyCode
        if(e.shiftKey==true && keyPressed=="80"){
            blockImageWidth+=10
            blockImageHeight+=10
            document.getElementById("currentWidth").innerHTML=blockImageWidth
            document.getElementById("currentHeight").innerHTML=blockImageHeight
        }
        if(e.shiftKey==true && keyPressed=="77"){
            blockImageWidth-=10
            blockImageHeight-=10
            document.getElementById("currentWidth").innerHTML=blockImageWidth
            document.getElementById("currentHeight").innerHTML=blockImageHeight
        }

        if(keyPressed=="87"){
           newImage("wall.jpg")
        }
        if(keyPressed=="71"){
            newImage("ground.png")
         }
         if(keyPressed=="84"){
            newImage("trunk.jpg")
         }
         if(keyPressed=="82"){
            newImage("roof.jpg")
         }
         if(keyPressed=="68"){
            newImage("dark_green.png")
         }
         if(keyPressed=="89"){
            newImage("yellow_wall.png")
         }
         if(keyPressed=="85"){
            newImage("unique.png")
         }
         if(keyPressed=="67"){
            newImage("cloud.jpg")
         }
         if(keyPressed == '38')
         {
             up();
             console.log("cima");
         }
         if(keyPressed == '40')
         {
             down();
             console.log("baixo");
         }
         if(keyPressed == '37')
         {
             left();
             console.log("esquerda");
         }
         if(keyPressed == '39')
         {
             right();
             console.log("direita");
         }
     
    }
    function up()
{
	if(playerY >=0)
	{
		playerY = playerY - blockImageHeight;
		console.log("autura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional Cima for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function down()
{
	if(playerY <=500)
	{
		playerY = playerY + blockImageHeight;
		console.log("altura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional Baixo for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function left()
{
	if(playerX >0)
	{
		playerX = playerX - blockImageWidth;
		console.log("largura da imagem do bloco = " + blockImageWidth);
		console.log("Quando a tecla direcional Esquerda for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function right()
{
	if(playerX <=850)
	{
		playerX = playerX + blockImageWidth;
		console.log("largura da imagem do bloco = " + blockImageWidth);
		console.log("Quando a tecla direcional Direita for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}
