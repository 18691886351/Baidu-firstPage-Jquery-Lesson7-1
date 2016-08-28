var nav_setting = document.getElementById("setting");
var nav_setting_menu = document.getElementById("setting_menu");

var products = document.getElementById("products");
var products_menu = document.getElementById("products_menu");

var custom_nav_menus = document.querySelectorAll(".custom .custom-nav .menu");


/*nav_setting.onmouseover = function() {
    nav_setting_menu.style.display = "block"
}
nav_setting.onmouseout = function() {
    nav_setting_menu.style.display = "none"
}
*/
/*products.onmouseover = function() {
    products_menu.style.display = "block"
}
products.onmouseout = function() {
    products_menu.style.display = "none"
}
*/

/*
实现了搜索栏获得焦点后改变其父级元素的边框颜色,失去焦点还原
*/
/*function changeInputParentBorderColor() {
    if (document.getElementById("input_div").className == "text_span") {
        document.getElementById("input_div").className = "text_span_focus"
    } else {
        document.getElementById("input_div").className = "text_span"
    }
}
*/

/*
实现了导航栏目中“百度一下”的鼠标moveover以及moveout事件
*/
/*function baiduBntOnmouseoverOrOut() {
    if (document.getElementById("baidu_bnt").className == "baidu_bnt_onmouseout") {
        document.getElementById("baidu_bnt").className = "baidu_bnt_onmouseover"
    } else {
        document.getElementById("baidu_bnt").className = "baidu_bnt_onmouseout"
    }
}*/


/*
实现了导航栏目中“搜索栏camera”的鼠标moveover以及moveout事件
*/
/*function cameramouseoverOrOut() {
    if (document.getElementById("camera").className == "camera_onmouseout") {
        document.getElementById("camera").className = "camera_onmouseover"
    } else {
        document.getElementById("camera").className = "camera_onmouseout"
    }
}
*/
$(document).ready(function() {
    /*实现了导航栏目中“搜索栏camera”的鼠标moveover以及moveout事件*/
    $("#camera").mouseover(function() {
        $(this).removeClass("camera_onmouseout");
        $(this).addClass("camera_onmouseover");
    })

    $("#camera").mouseout(function() {
        $(this).removeClass("camera_onmouseover");
        $(this).addClass("camera_onmouseout");
    })

    /*
    实现了按钮“百度一下”的鼠标moveover以及moveout事件
    */
    $("#baidu_bnt").mouseover(function() {
        $(this).removeClass("baidu_bnt_onmouseout");
        $(this).addClass("baidu_bnt_onmouseover");
    })

    $("#baidu_bnt").mouseout(function() {
        $(this).removeClass("baidu_bnt_onmouseover");
        $(this).addClass("baidu_bnt_onmouseout");
    })

    /*
    实现了搜索栏获得焦点后改变其父级元素的边框颜色,失去焦点还原
    */
    $("#baidu_text").focus(function() {
        $(this).parent().addClass("text_span_focus");
    })
    $("#baidu_text").blur(function() {
        $(this).parent().removeClass("text_span_focus");
    })

    /*导航栏的设置按钮mouseover与mouserout*/
    $("#setting").mouseover(function() {
        $("#setting_menu").show();
    })

    $("#setting").mouseout(function() {
        $("#setting_menu").hide();
    })

    /*导航栏的"更多产品"按钮mouseover与mouserout*/
    $("#products").mouseover(function() {
        $("#products_menu").show();
    })

    $("#products").mouseout(function() {
        $("#products_menu").hide();
    })

    $(".custom .custom-nav .menu").click(function() {
        var menu_name = $(this).attr("name");
        $("#" + menu_name).show();
        $("#" + menu_name).siblings().hide();
        $(this).css({ "background-color": "gray" })
        $(this).siblings().css({ "background-color": "white" });
        $(this).children(".name").css({ "color": "white", "font-weight": "bold" });
        $(this).siblings().children(".name").css({ "color": "black", "font-weight": "normal" });
    })
})
