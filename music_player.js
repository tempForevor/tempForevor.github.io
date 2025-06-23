// const { isNumeric } = require("jquery")

class Musics{
    constructor(){
        this.TYPE_LINK = 0
        this.TYPE_IFRAME = 1
        this.DIRECT_LINK = 2
        this.link = ""
    }
    set(arglink,argtype){
        if(argtype == this.TYPE_IFRAME){
            this.link="<meting-js server='netease' type='song' id='"+arglink+"'></meting-js>"
        }
        if(argtype == this.DIRECT_LINK){
            this.link=arglink
        }
        return this 
    }
    get_code(){
        return this.link
    }
}

var musics = []

function change_collapse(name){
    let t = document.getElementById("collapse_"+name)
    if(t.innerText==">>"){
        t.innerText="<<"
    }else{
        t.innerText=">>"
    }
}

function set_local(){
    let t = window.localStorage
    t.removeItem("LMmusics")
    t.setItem("LMmusics",JSON.stringify(musics))
}

function get_local(){
    musics = JSON.parse(window.localStorage.getItem("LMmusics"))
    if(musics == null){
        musics=[]
    }
    let l = musics.length
    for (let index = 0; index < l; index++) {
        musics.push(new Musics().set(musics.pop().link,2))
    }
}

function add_music(type="iframe"){
    if(type=="iframe"){
        musics.push((new Musics()).set(document.getElementById("music_link_iframe").value,1))
    }
    set_local()
}

function delete_music(id){
    musics.splice(id,1)
    set_local()
}

function load_musics(){
    let music_node = document.getElementById("musics")
    let t = 0
    musics.forEach(element => {
        music_node.innerHTML+="<br>"+element.link+"<button type='button' class='btn btn-primary' onclick='delete_music("+t.toString()+")'>Delete</button>"
        t++
    });    
}

addEventListener("load",(ev)=>{
    get_local()
    load_musics()
})