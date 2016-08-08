/**
 * Created by lixiaolei on 16/8/8.
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
function showItemswrap() {
	var allitem = document.getElementById("allitem");
	var itemswrap = document.getElementById("itemswrap");
	var listwrap = document.getElementById("listwrap");
	allitem.onmouseover = function () {
		itemswrap.setAttribute("class", "");
	}

	itemswrap.onmouseout = function () {
		itemswrap.setAttribute("class", "hide");
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

addLoadEvent(showNav);
addLoadEvent(showItemswrap);
addLoadEvent(showListwrap);

