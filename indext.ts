class loader {
    public window : Window
    public canvas : HTMLCanvasElement
    public event : Event
    constructor(win:Window,ev:Event) {
        this.window = win
        this.event = ev
        this.canvas = this.window.document.createElement("canvas")
        this.window.document.appendChild(this.canvas)
        this.canvas.appendChild(this.window.document.createTextNode("Hello world!"))
    }
}
var load : loader|null = null
function Onload(this:Window,ev:Event) : any|null{
    load = new loader(this,ev)
}
onload = Onload