$(function(){
    let small_pic = $(".small_pic"),   //左侧的图片
        slider = $(".slider"),    //滑块
        big_pic = $(".big_pic"),    //右侧BOX
        big_img  = $(".big_img");    //右侧大图
    this.magnifier(small_pic,slider,big_pic,big_img)    
})
function magnifier(small_pic,slider,big_pic,big_img){
    //鼠标移入
    small_pic.mouseMove(function(e){
        // console.log(this)
        slider.show()
        big_pic.show()
        let left = e.clientX - slider.getWidth()/2;
        let top = e.clientY - slider.getHeight()/2;
        let w = small_pic.getWidth() - slider.getWidth();
        let h = small_pic.getHeight() - slider.getHeight();

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
        slider.css({"left":left+"px","top":top})
        big_img.css({"left":-(left*2),"top":-(top*2)})
    }).mouseOut(()=>{
        slider.hidden()
        big_pic.hidden()
    })
}