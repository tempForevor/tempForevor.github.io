fonload.add(()=>{
    var navblock = document.getElementsByClassName("nav-block")
    const add = (link,str,special="")=>{
        if(!RegExp(special).test(file_name))return
        if(str==file_name) navblock[0].innerHTML +=
                "\n<li class=\"nav disabled\"><span>"+str+"</span></li>"
        else navblock[0].innerHTML +=
                "\n<li class=\"nav\"><a href=\""+link+"\">"+str+"</a></li>"
    }
    add("https://tempforevor.github.io/","Main page")
    add("https://tempforevor.github.io/Timer/Timer.htm","Timer")
    add("https://tempforevor.github.io/Game/GameManager.htm","Games")
    add("#about","about","Main page")
    add("https://tempforevor.github.io/TingHuNewDistrictMiddleSchool2025Class9\private.htm","Private2025Class9QQ")
})