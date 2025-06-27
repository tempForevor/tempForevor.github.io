// const { isNumeric } = require("jquery")

var MTypes = {
    TYPE_LINK : 0,
    TYPE_IFRAME : 1,
    DIRECT_LINK : 2,
    BILIBILI : 3
}

class Musics{
    constructor(){
        this.link = ""
    }
    set(arglink,argtype){
        switch (argtype) {
            case MTypes.TYPE_IFRAME:
                this.link="<meting-js server='netease' type='song' id='"+arglink+"'></meting-js>"
                break;
            case MTypes.DIRECT_LINK:
                this.link=arglink
                break;
            case MTypes.BILIBILI:
                this.link='<iframe class="Bilibili" src="https://player.bilibili.com/player.html?isOutside=true&aid='+arglink[0]+'&bvid='+arglink[1]+'&cid='+arglink[2]+'&p=1&high_quality=1&poster=1" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>'
            default:
                break;
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
        musics.push(new Musics().set(musics.pop().link,MTypes.DIRECT_LINK))
    }
}

function add_music(type='iframe'){
    if(type=='iframe'){
        musics.push((new Musics()).set(document.getElementById("music_link_iframe").value,MTypes.TYPE_IFRAME))
    }
    if(type=='bilibili'){
        musics.push((new Musics()).set(document.getElementById("music_link_bilibili").value.split(" "),MTypes.BILIBILI))
    }
    if(type=='direct'){
        musics.push((new Musics()).set(document.getElementById("music_link_direct").value,MTypes.DIRECT_LINK))
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

function post_load_musics(){
    let ae = document.getElementsByClassName("Bilibili")
    for (let index = 0; index < ae.length; index++) {
        const element = array[index];
        element.contentWindow.player.setLoop(true)
    }
    "114745017375877 BV14RKSznE89 30697586867"
}

addEventListener("load",(ev)=>{
    get_local()
    load_musics()
    post_load_musics()
})