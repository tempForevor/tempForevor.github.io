var tr = 4
var td = 4
var muilt = false
var table = []
var max=2

function generate(){
    table = []
    for (let i = 0; i < tr; i++) {
        table[i] = []
        for (let j = 0; j < td; j++) {
            table[i][j] = 0
        }
    }
}
function clearTable(){
    dom.$("#\\32 048block").innerHTML = ""
}
function generateTable(){
    table.forEach(element => {
        dom.$("#\\32 048block").innerHTML += "<tr class=\"radius-border\">\n"
        element.forEach(ele => {
            dom.$("#\\32 048block").innerHTML += "<td class=\"radius-border block\">"+ele.toString()+"</td>"
        })
        dom.$("#\\32 048block").innerHTML += "</tr><br>\n"
    });
}
function addTable(){
    var generated = 0
    if(max==2){
        generated = muilt?2:1
    }
    else{
        generated = Math.round(Math.random()*max)
    }
    var x=Math.round(Math.random()*tr)%tr
    var y=Math.round(Math.random()*td)%td
    var cnt=0
    while(table[x][y]!=0){
        if(cnt>=tr*td)return
        cnt++
        x=Math.round(Math.random()*tr)%tr
        y=Math.round(Math.random()*td)%td
    }
    console.log([x,y,generated])
    table[x][y]=generated
}

function moveUp(){
    for (let i = 0; i < td; i++) {
        for (let j = 1; j < tr; j++) {
            
        }
    }
}

fonload.add(
    ()=>{
        generate()
        clearTable()
        generateTable()
        console.log("Initalized successfully!")
    }
)
onkeydown = (ev) => {
    if(ev.key=="w"){
        addTable()
        moveUp()
    }
    clearTable()
    generateTable()
}