function Onloads() {
    this.arr = []
    this.add = (func) => {
        this.arr.push(func)
    }
    return this
}
const DOMGetter = () => {
	this.$ = (str) => {
		return document.querySelector(str)
	}
	return this
}

const dom = DOMGetter()

const fonload = Onloads()

var file_name = ""
if(dom.$("body > file")!=null){
    file_name = dom.$("body > file").innerText
}

onload = ()=>{
    fonload.arr.forEach(element => {
        try {
            element()
        } catch (error) {
            if(error instanceof TypeError){
                console.error(error.message)
            }
            else{
                console.error(error.message)
            }
        }
    });
}