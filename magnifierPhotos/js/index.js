window.onload = function(){
    //选择器封装
    function $(name) {
        return document.querySelector(name); 
    };
    var small_pic = $(".small_pic"),   //左侧的图片
        slider = $(".slider"),    //滑块
        big_pic = $(".big_pic"),    //右侧BOX
        big_img  = $(".big_img");    //右侧大图
    //移入
    small_pic.onmousemove = function(event){   //event对象  事件的状态
        
        slider.style.display = 'block';
        big_pic.style.display = 'block';
        //event.clientX  当前移入点与X轴的坐标   slider.offsetWidth   滑块的宽度
        var left = event.clientX - slider.offsetWidth/2;
        var top = event.clientY - slider.offsetHeight/2;
        var w = small_pic.offsetWidth - slider.offsetWidth;
        var h = small_pic.offsetHeight - slider.offsetHeight;
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
        slider.style.left = left +'px';
        slider.style.top = top +'px';
        big_img.style.left = -(left*2) +'px';   //右侧大图的距离
        big_img.style.top = -(top*2) +'px';
        //alert(left)
    };
    //移出
    small_pic.onmouseout= function(){
        slider.style.display = 'none';
        big_pic.style.display = 'none';
    };
}