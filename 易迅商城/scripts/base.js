/**
 * Created by lixiaolei on 16/8/6.
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func();
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
function showListwrap() {
    var list = document.getElementById("listwrap");
    var itemswrap = document.getElementById("itemswrap");
    var items = itemswrap.getElementsByTagName("dl");
    for (var i=0; i<items.length; i++) {
        items[i].onmouseover = function () {
            list.setAttribute("class","");
        }
        items[i].onmouseout = function () {
            list.setAttribute("class","hide");
        }
    }
}

addLoadEvent(showListwrap);