//This is in RGB since it's the one I'm most used to
function FontColor(r,g,b,textHolder){
	textHolder.style.color = "rgb("+r+","+g+","+b+")"
}

//This will make the font color of the "text" box yellow
const text = document.getElementById("TextHolder")
FontColor(255,255,0,text)