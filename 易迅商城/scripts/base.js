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


function slideshowb() {
    var container = document.getElementById("b_container");
    var list = document.getElementById("b_list");
    var pics = list.getElementsByTagName("a");
    var buttons = document.getElementById("b_button").getElementsByTagName("span");
    var index = 1;
    var animated = false;
    var timer = null;
    function showButton() {
        for (var i=0; i<buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
                break;
            }
        }
        buttons[index-1].className = "on";
    }
    function animate(offset) {
        var newLeft = parseInt(list.style.left) + offset;
        var time = 700;
        var interval = 10;
        var speed = offset/(time/interval);
        animated = true;
        function go() {
            if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)){
                list.style.left = parseInt(list.style.left) + speed + "px";
                setTimeout(go, interval);
            }else {
                animated = false;
                list.style.left = newLeft + "px";
                if (newLeft > -190) {
                    list.style.left = -570 + "px";
                }
                if (newLeft < -570) {
                    list.style.left = -190 + "px";
                }
            }
        }
        go();
    }
    // function changePic(index) {
    //     if(index=2){
    //         index == 0;
    //     }else {
    //         index++;
    //     }
    //         animate(-190);
    //         showButton();
    //
    // }
    // function autoPlay() {
    //     if (++index >= pics.length) index = 0;
    //     changePic(index);
    // }
    // timer = setInterval(autoPlay,2000);
    // container.onmouseover = function () {
    //     clearInterval(timer);
    // }
    // container.onmouseout = function () {
    //     timer = setInterval(autoPlay,2000);
    // }




    for (var i=0; i<buttons.length; i++) {
        buttons[i].onclick = function () {
            // if (animated) {
            //     return;
            // }
            // if (this.className == "on") {
            //     return;
            // }
            var myIndex = parseInt(this.getAttribute("index"));
            var offset = -190*(myIndex-index);

            animate(offset);

            index = myIndex;
            showButton();
            debugger;
        }
    }









}
function slideshowa() {
    var container = document.getElementById("a_container");
    var list = document.getElementById("a_list");
    var pics = list.getElementsByTagName("a");
    var buttons = document.getElementById("a_button").getElementsByTagName("span");
    var index = 0;
    var animated = false;
    var timer = null;
    function showButton() {
        for (var i=0; i<buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
                break;
            }
        }
        buttons[index].className = "on";
    }
    function animate(offset) {
        var newLeft = parseInt(list.style.left) + offset;
        if (newLeft > -190) {
            list.style.left = -570 + "px";
        }
        if (newLeft < -570) {
            list.style.left = -190 + "px";
        }
        var time = 700;
        var interval = 10;
        var speed = offset/(time/interval);
        animated = true;
        function go() {
            if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)){
                list.style.left = parseInt(list.style.left) + speed + "px";
                setTimeout(go, interval);
            }else {
                animated = false;
                list.style.left = newLeft + "px";
            }
        }
        go();
    }




    for (var i=0; i<buttons.length; i++) {
        buttons[i].onclick = function () {
            var myIndex = parseInt(this.getAttribute("index"));
            var offset = -190*(myIndex-index);
            if (!animated) {
                animate(offset);
            }
            index = myIndex;
            showButton();
        }
    }
    function changePic(curindex) {
        for (var i=0; i<pics.length; i++) {
            pics[i].style.display = "none";
            buttons[i].className = "";
        }
        pics[curindex].style.display = "block";
        buttons[curindex].className = "on";
    }
    function autoPlay() {
        if (++index >= pics.length) index = 0;
        changePic(index);
    }
    // timer = setInterval(autoPlay,2000);
    // container.onmouseover = function () {
    //     clearInterval(timer);
    // }
    // container.onmouseout = function () {
    //     timer = setInterval(autoPlay,2000);
    // }

}

addLoadEvent(showNav);
addLoadEvent(showListwrap);
addLoadEvent(slideshowb);
addLoadEvent(slideshowa);