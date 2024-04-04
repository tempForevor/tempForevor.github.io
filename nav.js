fonload.add(()=>{
    var navblock = document.getElementsByClassName("nav-block")
    const add = (link,str)=>{
        if(str==file_name) navblock[0].innerHTML +=
                "\n<li class=\"nav disabled\"><span>"+str+"</a></li>"
        else navblock[0].innerHTML +=
                "\n<li class=\"nav\"><a href=\""+link+"\">"+str+"</a></li>"
    }
    add("https://tempforevor.github.io/","Main page")
    add("https://tempforevor.github.io/Timer/Timer.htm","Timer")
})