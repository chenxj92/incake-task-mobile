/// <reference path="jq.min.js" />
//立即购买
$(function () {
    $("#buynow").click(function () {
        var _data = {
            Action: "ShopCart",
            pang: $(".goods_btn").find(".price_on").attr("value"), //所选磅数
            qiefen: $("#isQiefen").val(), //切分
            cid: $("#cid").val(), //商品编号
            cname: $(this).attr("data-cname"), //商品名称
            price: $(".goods_btn").find(".price_on").attr("data-price"), //价格
            cweight: $(this).attr("data-cweight"), //单位
            pic: $(this).attr("data-pic"), //图片
            danwei: $(this).attr("data-danwei"),
            iscake: "1",
            showcanju: $(this).attr("data-showfive")
        };
        $.ajax({
            url: "/ICake/cookie/CookieManage.aspx", type: "post", dataType: "json",
            data: _data,
            success: function (data) {
                if (data.errcode == "0") {
                    location.href = "/ICake/order/ShopCart.aspx";
                } else {
                    modal_dialog("show");
                    $(".modal-dialog .modal-body p").html("网络错误,请稍后重试！");
                    $(".modal-dialog .modal-footer").html("<a href=\"javascript:modal_dialog('hide');\" class=\"btn btn-primary b_go\">确定</a>");
                }
            }
        });
    });
    //加入购物车
    $("#addcart").bind("click", function () {
        var _data = {
            Action: "ShopCart",
            pang: $(".goods_btn").find(".price_on").attr("value"), //所选磅数
            qiefen: $(this).attr("data-quefen"), //切分
            cid: $(this).attr("data-cid"), //商品编号
            cname: $(this).attr("data-cname"), //商品名称
            price: $(".goods_btn").find(".price_on").attr("data-price"), //价格
            cweight: $(this).attr("data-cweight"), //单位
            pic: $(this).attr("data-pic"), //图片
            danwei: $(this).attr("data-danwei"),
            iscake: "1",
            showcanju: $(this).attr("data-showfive")
        };
        $.ajax({
            url: "/ICake/cookie/CookieManage.aspx", type: "post", dataType: "json",
            data: _data,
            success: function (data) {
                modal_dialog("show");
                if (data.errcode == "0") {
                    $(".modal-dialog .modal-body p").html("加入购物车成功,是否去结算？");
                    $(".modal-dialog .modal-footer").html("<a href=\"/ICake/order/ShopCart.aspx\" rel=\"external\"  class=\"btn btn-default b_ok\">去结算</a><a href=\"javascript:modal_dialog('hide');ShowCartNum();\" class=\"btn btn-primary b_go\">继续购物</a>");

                } else {
                    $(".modal-dialog .modal-body p").html("加入购物车失败！");
                    $(".modal-dialog .modal-footer").html("<a href=\"javascript:modal_dialog('hide');\" class=\"btn btn-primary b_go\">确定</a>");
                }
            }
        });

    });


    //闪电购
    $(".shan_gou.ui-link").bind("click", function () {
        var jsonData = "[";
        jsonData += "{";
        jsonData += "\"ProductID\":\"" + $(this).attr("data-cid") + "\",";
        jsonData += "\"GuiGe\":\"" + $(".goods_btn").find(".price_on").attr("value") + "\",";
        jsonData += "\"Num\":\"1\",";
        jsonData += "\"QueFen\":\"0\"}";
        jsonData += "]";
        $.ajax({
            url: "/ICake/cookie/CookieManage.aspx", type: "post", dataType: "json",
            data: { "Action": "FirmCode", "FirmValue": jsonData },
            success: function (data) {
                if (data.errcode == "0") {
                    location.href = "/ICake/order/SpeedOrder.aspx";
                }
            }, error: function () {
                modal_dialog("show");
                $(".modal-dialog .modal-body p").html("网络错误,请稍后重试！");
                $(".modal-dialog .modal-footer").html("<a href=\"javascript:modal_dialog('hide');\" class=\"btn btn-primary b_go\">确定</a>");
            }
        });
    });
});
var ShowCartNum = function () {
    $.ajax({
        url: "/Icake/Cookie/cookieManage.aspx", type: "post", dataType: "json",
        data: { "Action": "CartNum" },
        success: function (data) {
            $(".btn.nav_line .num").text(data.errmsg);
        }
    });
}