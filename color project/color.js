var numcolor=6;
var colors=randomcolors(6);
var correctcolor;
var squares=document.querySelectorAll(".squares");
var rgb=document.querySelector("#rgb");
var play=document.querySelector("#play");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var level=document.querySelectorAll(".level");
reset.textContent="Change Color";
rgb.textContent=correctcolor;

init();
function init(){
	mode();
	squaregenerator();
	restart();
}
function mode(){
	for(var i=0;i<level.length;i++){
		level[i].addEventListener("click",function(){
			level[0].classList.remove("selected");
			level[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy"?numcolor=3:numcolor=6;
			restart();
		});
	}
}
function squaregenerator(){
	for(var i=0;i<colors.length;i++){
		squares[i].style.background=colors[i];
		squares[i].addEventListener("click",function(){
			if(this.style.background===correctcolor){
				change(correctcolor);
				play.textContent="Correct";
				h1.style.background=correctcolor;
				reset.textContent="Play Again";
			}
			else{
				this.style.background="#232323";
				play.textContent="Try Again";
			}
		});
	}
}
function restart(){
	colors=randomcolors(numcolor);
	reset.textContent="Change Color";
	correctcolor=random();
	rgb.textContent=correctcolor;
	for(var i=0;i<squares.length;i++){
		if(i<numcolor){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.background="steelblue";
	play.textContent="";
}
reset.addEventListener("click",function(){
	restart();
});

function change(color){
	for(var i=0;i<colors.length;i++){
		squares[i].style.background=color;
	}
}
function random(){
	return colors[Math.floor(Math.random()*colors.length)]
}
function randomcolors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(generator());
	}
	return arr;
}
function generator(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}