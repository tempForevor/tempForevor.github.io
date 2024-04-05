var global_timeSetter = 0
function timeSetter(){
	dom.$("#TimeSetter").innerText = new Date().toString()
	global_timeSetter = setInterval( ()=>{
		dom.$("#TimeSetter").innerText = new Date().toString()
	},1000)
}
function OnLoad(){
	timeSetter()
}

fonload.add(OnLoad)