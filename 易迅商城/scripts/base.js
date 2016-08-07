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
function showNav() {
    var list = document.getElementById("navlist");
    var navs = list.getElementsByTagName("li");
    for (var i=0; i<navs.length; i++) {
        navs[i].onmouseover = function () {
            this.setAttribute("class","bg_navlist");
        }
        navs[i].onmouseout = function () {
            this.setAttribute("class","");
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
function slideshow() {
    var container = document.getElementById("b_container");
    var list = document.getElementById("b_list");
    var buttons = document.getElementById("b_button").getElementsByTagName("span");
    var index = 1;
    function showButton() {
        for (var i=0; i<buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
                break;
            }
        }
        buttons[index-1].className = "on";
        debugger;
    }
    function animate(offset) {
        var newLeft = parseInt(list.style.left);
        // if (newLeft > -190) {
        //     list.style.left = -570 + "px";
        // }
        // if (newLeft < -570) {
        //     list.style.left = -190 + "px";
        // }
        list.style.left = newLeft + offset + "px";
    }
    for (var i=0; i<buttons.length; i++) {
        buttons[i].onclick = function () {
           var myIndex = parseInt(this.getAttribute("index"));
            var offset = -190*(myIndex-index);
            animate(offset);
            index = myIndex;
            showButton();
        }
    }

}
addLoadEvent(showNav);
addLoadEvent(showListwrap);
addLoadEvent(slideshow);