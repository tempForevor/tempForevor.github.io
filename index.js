const DOMGetter = () => {
	this.$ = (str) => {
		return document.querySelector(str)
	}
	return this
}
const dom = DOMGetter()

var global_timeSetter = 0
function timeSetter(){
	global_timeSetter = setInterval( ()=>{
		dom.$("#TimeSetter").innerText = new Date().toString()
	},1000)
}
function OnLoad(){
	timeSetter()
}

var canvas = dom.$("#canvas")

window.onload = OnLoad
