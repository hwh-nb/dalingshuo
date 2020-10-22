
window.onscroll= function(){
    //变量t是滚动条滚动时，距离顶部的距离
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    var scrollup = document.getElementById('gotop');
    var box = document.getElementById('kychz');
    //当滚动到距离顶部200px时，返回顶部的锚点显示
    if(t>=200){
        scrollup.style.height="50px";
        scrollup.style.opacity="1";
        box.style.opacity="0";
    }else{          //恢复正常
        scrollup.style.height="o";
        scrollup.style.opacity="0";
        box.style.opacity="1";
    }
}
