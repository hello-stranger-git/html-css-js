$(window).load(function(){
    waterFall();
});
function waterFall(){
    var img = $('.box');
    //求出列数
    //每个图片的宽度 jquery方法outerWidth() 方法返回第一个匹配元素的外部宽度。该方法包含 padding 和 border。提示：如需包含 margin，请使用 outerWidth(true)
    var imgWidth = img.outerWidth(true);
    var screenWidth = $(window).width();//屏幕宽度
    var cols = parseInt(screenWidth/imgWidth);//几列图片
    //创建一个数组，用于存放高度值
    var heightArr=[];
    //遍历所有图片，目的定位图片的位置
    $.each(img,function(index,item){//jquery方法each
        //判断是否是第一行，第一行取到高度值，追加到heightArr
        var imgHeight = $(item).outerHeight(true);
        if(index<cols){
            heightArr[index]=imgHeight;
        }else{
            var minH = Math.min(...heightArr);//最小高度
            var mIndex = heightArr.findIndex(item=>minH===item)//最小高度索引
            $(item).css({
                position:'absolute',
                top:minH+'px',//最小高度
                left:mIndex*imgWidth+'px',//最小高度索引*宽度
            });
            //更新最小高度
            heightArr[mIndex]+=imgHeight;
        }
    })
}



function creatElm(item){
    var fragment = document.createDocumentFragment();
    var ul = document.getElementById('ul')
    item.forEach(node => {
        var li = document.createElement('li')
        li.innerText = node.name
        fragment.appendChild(li)
        if(node.child){
            creatElm(node.child)
        }
    });
    ul.appendChild(fragment)
}

var ws = new WebSocket("ws://139.196.42.209:8090");
ws.onopen=function(){
    alert("链接成功");
};
ws.onerror = function(){
    alert("链接失败");
}
ws.onmessage = function(MessageEvent){
    console.log(MessageEvent.data)
}