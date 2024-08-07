var texts = [
    "祝愿老师能平平安安心想事成,生活美满，感恩老师的尊尊教诲(ﾉ´▽｀)ﾉ♪。老师您见证了我的一段成长历程，常常想送出什么东西或准备什么东西，可都没有做成(；′⌒`)。今天终于能做出来一个纪念页面了(ﾉ´▽｀)ﾉ♪愿以后常联系<pre><br>＃〓§〓〓〓〓〓§〓〓〓〓〓〓§〓〓〓〓〓§〓＃<br>    ↓      ↓     ↓      ↓<br>  ☆★☆ ☆★☆ ☆★☆ ☆★☆<br>  ☆祝☆ ☆你☆ ☆幸☆ ☆福☆<br>  ☆★☆ ☆★☆ ☆★☆ ☆★☆<br>    ↓      ↓     ↓      ↓<br>   ※     ※    ※     ※<br></pre>",
    "我最亲爱的老师！喜欢你认真给我们讲课的样子，喜欢你念叨我们要努力的样子，喜欢你宠我们的样子。愿你生活如诗，岁月静好，开心快乐每一天！",
    "亲爱的严老师:<br>你好！！(^_^)ノ很高兴能遇见你！！<br>我刚上初一的时候很不适应，课程和作息对我来说都太陌生了，同学们也都很厉害，天天晚上回家都要躲在被窝里偷偷哭。找到你倾诉你也很耐心的开解我，我当时就在想，初中好像也没这么可怕，老师还是挺温柔的₍˄·͈༝·͈˄*₎◞ ̑̑两年来你始终都对我很耐心，即使我很容易被自己的情绪左右，你也从来不会去批评我什么，一遍又一遍治愈我。我数学成绩不是太好，也谢谢你没有放弃我。ƪ(˘⌣˘)ʃ即使我没有那么优秀完美，只要有一些方面稍微做的好一点，你就会夸我，我每次都会很开心。<br>总之，谢谢你！！我真的特别特别幸运可以遇见你(ง •̀_•́)我们以后会一直联系的！！",
    
    
    
    
    "面对讲台，背靠黑板，在时光长河里，老师是您把一个个45分钟，用辛劳汗水和智慧编织成无数耀眼的光环　将来,无论我会成为挺拔的乔木,还是低矮的灌木,老师,我都将以生命的翠绿向您致敬!让阳光送去美好的期待，让清风送去我们深深的祝福，让白云和蓝天永远点缀你的饿生活，愿你的生活充满快乐!",
    "一只粉笔两袖清风，三尺讲台四季耕耘，五天忙碌六七不休，八思久想十分用心，百般教诲千言万语，滴滴汗水浇灌桃李遍天下",
    "高山不移，碧水常流，我师恩泽，在心永留!",
    "悦耳的铃声，艳丽的鲜花，都受时间的限制。只有我的祝福永恒，永远永远祝福您，给我智慧之泉的老师！",
    "讲台上，寒来暑往，春夏秋冬，撒下心血点点；花园里，扶残助弱，风霜雨雪，育出新蕊亭亭。谢谢您，亲爱的严老师！！(˃ ⌑ ˂ഃ )",
    "我歌颂粉笔。它给予我学问，勾勒我的灵魂，指点我的前程，那美丽的粉笔不正是您的化身吗？谢谢您，老师!",
    "您送我进入一个彩色的天地，您将我带入一个无限的世界……老师，我的心在喊着您，在向您敬礼。",
    "您就像一位辛勤的园丁，我们就像您培植的小树，我们愿在冬天为您抵挡寒冷，春天带给您绿意，夏天带给您凉爽，秋天带给您硕果！",
    "轻轻的一声回侯，不想惊扰您！只想真切知道您的一切是否安好，不管工作有多么的繁忙，只要记得我时刻都在远方关望您、祝福您就好。",
    "您谆谆的教诲，化作我脑中的智慧，胸中的热血，行为的规范……我感谢您，感谢您对我的精心培育。",
    "拨动真诚的`心弦，铭记成长的辛酸，成功的道路上永远离不开您，亲爱的老师，祝您永远幸福!"
]
var authors = [
    "马骏骋",
    "徐静萱",
    "葛婧琪",




    "沈皓阳",
    "马睿婕",
    "张鉴漪",
    "丁语彤",
    "王可欣",
    "朱筱雨",
    "宋鸣浩",
    "於子超",
    "陈静瑶",
    "苏忠杰",
    "姜金伶"
]
addEventListener("load",()=>{
    for (let index = 0; index < texts.length; index++) {
        let t = texts[index];
        let a = authors[index];
        document.querySelector("#messages > div > div > div").innerHTML += "<p>&#10024" + t + " --by <strong>" + a + "&#10024</strong></p><br>"
    }  
})

var req

function getTexts(){
    req = new XMLHttpRequest()
    req.open("GET","https://tempforevor.pythonanywhere.com/all-texts/")
    function handleEvent(e){
        console.log(`${e.type}: ${e.loaded} bytes transferred\n`);
    }
    req.addEventListener("loadstart", handleEvent);
    req.addEventListener("load", handleEvent);
    req.addEventListener("loadend", handleEvent);
    req.addEventListener("progress", handleEvent);
    req.addEventListener("error", handleEvent);
    req.addEventListener("abort", handleEvent);
    console.log("Got text successfully.",req.statusText)
}
//addEventListener("load",getTexts)

function setAnimation(max_animation_cnt,class_selecter,action){
    var cnt = 0
    function animation_cancel(){
        document.querySelectorAll("."+class_selecter+cnt.toString()).forEach((v,i,l)=>{v.getAnimations().forEach((ani,index,arr)=>{
            ani.cancel()
        });action(v)})
        
        //document.querySelector("#"+id_selecter+cnt.toString()).style = style
        cnt+=1
        if(cnt>max_animation_cnt)cnt=0
    }
    return animation_cancel
}
var opp_animation = setAnimation(6,"appear",(v)=>{
    v.style.opacity = 1
})
addEventListener("click",()=>{
    opp_animation()
    
})