var global_timeSetter = 0
function timeSetter(){
	global_timeSetter = setInterval( ()=>{
		document.getElementById("TimeSetter").innerText = new Date().toString()
	},1)
}
function OnLoad(){
	timeSetter()
}
