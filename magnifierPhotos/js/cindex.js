
function $(selector){//选择器
    return document.querySelector(selector);
}
var magnifier = {
    mousemove:function(){
        arguments[0].onmousemove = (e)=>{
            arguments[1].forEach(item => {
                item.style.display = "block"
            });
            let top = e.clientY-arguments[1][0].offsetHeight/2;
            let left = e.clientX-arguments[1][0].offsetWidth/2;
            var w = arguments[0].offsetWidth - arguments[1][0].offsetWidth;
            var h = arguments[0].offsetHeight - arguments[1][0].offsetHeight;
            //移动范围
            if(left <0) {
                left = 0;
            }else if(left > w) {
                left = w;
            };
            if(top <0) {
                top = 0;
            }else if(top > h) {
                top = h;
            };  

            arguments[1][0].style.left = left +'px';
            arguments[1][0].style.top = top +'px';
            arguments[1][2].style.left = -(left*2) +'px';   //右侧大图的距离
            arguments[1][2].style.top = -(top*2) +'px';
        }
    },
    mouseout:function(){
        arguments[0].onmouseout = ()=>{
            arguments[1].forEach(item => {
                item.style.display = "none"
            });
        }
    }
}
window.onload = function(){
    var small_pic = $(".small_pic"),   //左侧的图片
        slider = $(".slider"),    //滑块
        big_pic = $(".big_pic"),    //右侧BOX
        big_img  = $(".big_img");    //右侧大图
    magnifier.mousemove(small_pic,[slider,big_pic,big_img]);
    magnifier.mouseout(small_pic,[slider,big_pic]);
}