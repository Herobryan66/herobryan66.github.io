
	//Draw Image
	ctx.drawImage(charImage,currX,currY,CHAR_WIDTH,CHAR_HEIGHT,
					charX,charY,CHAR_WIDTH,CHAR_HEIGHT);
var charImage = new 	 
charImage.ready = false;
charImage.onload = setAssetReady;
charImage.src = PATH_CHAR;
 
function setAssetReady()
{
	this.ready = true;
}
 
//Display Preloading
ctx.fillRect(0,0,stage.width,stage.height);
ctx.fillStyle = "#000";
ctx.fillText(TEXT_PRELOADING, TEXT_PRELOADING_X, TEXT_PRELOADING_Y);
var preloader = setInterval(preloading, TIME_PER_FRAME);

function preloading()
{	
	if (charImage.ready)
	{
		clearInterval(preloader);
		
		//Initialise game
		facing = "E"; //N = North, E = East, S = South, W = West
		isMoving = false;
		
		gameloop = setInterval(update, TIME_PER_FRAME);			
		document.addEventListener("keydown",keyDownHandler, false);	
		document.addEventListener("keyup",keyUpHandler, false);	
	}
}

function keyDownHandler(event)
{
	var keyPressed = String.fromCharCode(event.keyCode);
 
	if (keyPressed == "W")
	{		
		facing = "N";
		isMoving = true;
	}
	else if (keyPressed == "D")
	{	
		facing = "E";
		isMoving = true;		
	}
	else if (keyPressed == "S")
	{	
		facing = "S";
		isMoving = true;		
	}
	else if (keyPressed == "A")
	{	
		facing = "W";
		isMoving = true;		
	}
}

function keyUpHandler(event)
{
	var keyPressed = String.fromCharCode(event.keyCode);
	
	if ((keyPressed == "W") || (keyPressed == "A") || 
		(keyPressed == "S") || (keyPressed == "D"))
	{
		isMoving = false;
	}
}

if (isMoving)
	{
		if (facing == "N")
		{
			charY -= CHAR_SPEED;
			currY = IMAGE_START_NORTH_Y;
		}
		else if (facing == "E")
		{
			charX += CHAR_SPEED;
			currY = IMAGE_START_EAST_Y;
		}
		else if (facing == "S")
		{
			charY += CHAR_SPEED;
			currY = IMAGE_START_SOUTH_Y;
		}
		else if (facing == "W")
		{
			charX -= CHAR_SPEED;
			currY = IMAGE_START_WEST_Y;
		}
		
		currX += CHAR_WIDTH;
		
		if (currX >= SPRITE_WIDTH)
			currX = 0;
	}



	function preloading()
{	
	if (charImage.ready)
	{
		clearInterval(preloader);
		
		//Initialise game
		facing = "E"; //N = North, E = East, S = South, W = West
		isMoving = false;
		
		gameloop = setInterval(update, TIME_PER_FRAME);			
		document.addEventListener("keydown",keyDownHandler, false);	
		document.addEventListener("keyup",keyUpHandler, false);	
	}

 function keyDownHandler(event){

if (keypressed = "W") "#up"=true

else if (keypressed = "A") "#left"=true

else if (keypressed = "D") "#right"=true

else if (keypressed = "S") "#bottom"=true
});

}

