canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
img_width = 300;
img_height = 100;
var no="0"
var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			
			
		alphabetkey();}

	else if(keyPressed >=48 && keyPressed<=57){
		
		
			numberkey();}

	else if(keyPressed >=37 && keyPressed<=40){
		
		
			arrowkey();}
		
	else if((keyPressed == 17)|| (keyPressed == 18)|| (keyPressed == 27)){
		specialkey();
	}
	
	else if((keyPressed == 8)|| (keyPressed == 9)|| (keyPressed == 13)|| (keyPressed == 16)||(keyPressed == 20)||(keyPressed == 35)|| (keyPressed == 36)|| (keyPressed == 45)|| (keyPressed == 46)|| (keyPressed == 107)|| (keyPressed == 109)|| (keyPressed == 110)|| (keyPressed == 111)|| (keyPressed == 112)|| (keyPressed == 113)|| (keyPressed == 114)|| (keyPressed == 115)|| (keyPressed == 116)|| (keyPressed == 117)|| (keyPressed == 118)|| (keyPressed == 119)|| (keyPressed == 120)|| (keyPressed == 121)|| (keyPressed == 122)|| (keyPressed == 123)|| (keyPressed == 144)|| (keyPressed == 145)|| (keyPressed == 186)|| (keyPressed == 187)|| (keyPressed == 188)|| (keyPressed == 189)|| (keyPressed == 190)|| (keyPressed == 191)|| (keyPressed == 192)|| (keyPressed == 219)|| (keyPressed == 220)|| (keyPressed == 221)|| (keyPressed == 222)){
		otherkey();
	    }

    	
}

function alphabetkey()
{
    document.getElementById("d1").innerHTML="Alphabet Key"
    img_image="alpkey.png"
    add();
}
function numberkey()
{
	document.getElementById("d1").innerHMTL="Number Key"
	img_image="numkey.png"
	add();
}
function arrowkey()
{
	document.getElementById("d1").innerHMTL="Arrow Key"
	img_image="arrkey.png"
	add();
}
function specialkey()
{
	document.getElementById("d1").innerHMTL="Special Key"
	img_image="spkey.png"
	add();
	
}
function otherkey()
{
	document.getElementById("d1").innerHTML="Other Key"
    img_image="otherkey.png";
    add();
}
	
