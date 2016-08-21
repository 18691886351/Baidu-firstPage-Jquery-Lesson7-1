var nav_setting = document.getElementById("setting");
var nav_setting_menu = document.getElementById("setting_menu");

var products = document.getElementById("products");
var products_menu = document.getElementById("products_menu");


nav_setting.onmouseover = function() {

    nav_setting_menu.style.display = "block"

}
nav_setting.onmouseout = function() {

    nav_setting_menu.style.display = "none"
}

products.onmouseover = function() {

    products_menu.style.display = "block"

}
products.onmouseout = function() {

    products_menu.style.display = "none"
}



/*
实现了搜索栏获得焦点后改变其父级元素的边框颜色,失去焦点还原
*/
function changeInputParentBorderColor() {
    if (document.getElementById("input_div").className == "text_span") {
        document.getElementById("input_div").className = "text_span_focus"
    } else {
        document.getElementById("input_div").className = "text_span"
    }
}


/*
实现了导航栏目中“百度一下”的鼠标moveover以及moveout事件
*/
function baiduBntOnmouseoverOrOut() {
    if (document.getElementById("baidu_bnt").className == "baidu_bnt_onmouseout") {
        document.getElementById("baidu_bnt").className = "baidu_bnt_onmouseover"
    } else {
        document.getElementById("baidu_bnt").className = "baidu_bnt_onmouseout"
    }
}


/*
实现了导航栏目中“搜索栏camera”的鼠标moveover以及moveout事件
*/
function cameramouseoverOrOut() {
    if (document.getElementById("camera").className == "camera_onmouseout") {
        document.getElementById("camera").className = "camera_onmouseover"
    } else {
        document.getElementById("camera").className = "camera_onmouseout"
    }
}
