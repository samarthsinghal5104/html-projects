var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var s1=document.querySelector("#s1");
var s2=document.querySelector("#s2");
var reset=document.querySelector("#reset");
var inp=document.querySelector("input");
var play=document.querySelector("#play");
var score1=0;
var score2=0;
var win=false;
var winscore=5;

p1.addEventListener("click",function(){
	if(!win){
		score1++;
		if(score1===winscore){
			win=true;
			s1.classList.add("winn");
		}
		s1.textContent=score1;
	}
});
p2.addEventListener("click",function(){
	if(!win){
		score2++;
		if(score2===winscore){
			win=true;
			s2.classList.add("winn");
		}
		s2.textContent=score2;
	}
});
reset.addEventListener("click",function(){
	res();
});
function res(){
	score1=0;
	score2=0;
	s1.classList.remove("winn");
	s2.classList.remove("winn");
	win=false;
	s1.textContent=score1;
	s2.textContent=score2;
}
inp.addEventListener("change",function(){
	winscore=Number(inp.value);
	play.textContent=inp.value;
	res();
});