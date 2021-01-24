class Jquery{
    constructor(args){
        if(typeof args === "string"){
            //传入的id、class、标签选择器
            let selectDocument = document.querySelectorAll(args);
            this.addEles(selectDocument)
        }else{
            //如果是传入的方法
            window.addEventListener("DOMContentLoaded",args);
        }
    }

    //将选择器放到this中
    addEles(eles){
        eles.forEach((item,index)=>{
            this[index] = item
        })
        this.length = eles.length
    }

    //点击事件
    click(fn){
        Array.from(this).forEach(item=>{
            this.addEvents(item,"click",fn)
        })
        return this
    }

    //鼠标移入事件
    mouseOver(fn){
        Array.from(this).forEach(item=>{
            this.addEvents(item,"mouseover",fn)
        })
        return this
    }

    mouseMove(fn){
        Array.from(this).forEach(item=>{
            this.addEvents(item,"mousemove",fn)
        })
        return this
    }

    mouseOut(fn){
        Array.from(this).forEach(item=>{
            this.addEvents(item,"mouseout",fn)
        })
        return this
    }

    //选中里面的一个选择器
    eq(index){
        return new Jquery(this[index])
    }

    //使用原生js触发事件
    addEvents(ele,eventName,fn){
        ele.addEventListener(eventName,fn)
    }


    //显示元素
    show(){
        Array.from(this).forEach(ele=>{
            ele.style.display = "block"
        })
        return this
    }

    //隐藏元素
    hidden(){
        Array.from(this).forEach(ele=>{
            ele.style.display = "none"
        })
        return this
    }

    //css样式
    css(...args){
        if(args.length===1){//判断是否传的对象
            let keys = Object.keys(args[0])
            if(typeof args[0] === "object"){
                Array.from(this).forEach(ele=>{
                    keys.forEach(key=>{
                        this.setStyle(ele,key,args[0][key])
                    })
                })
            }else{
                return this.getStyle(this[0],args[0]);
            }
        }else{
            Array.from(this).forEach(ele=>{
                let keys = Object.keys(args[0])
                keys.forEach(key=>{
                    this.setStyle(ele,args[0],args[1])
                })
            })
            
        }
    }

    setStyle(ele,styleName,styleValue){//设置样式
        if(typeof styleValue === 'number'){
            styleValue = styleValue + "px";
        }
        ele.style[styleName] = styleValue;
    }
    getStyle(ele,styleName){//获取样式
        return getComputedStyle(ele,null)[styleName]
    }

    //获取元素宽度
    getWidth(){
        return this[0].offsetWidth
    }
    //获取元素高度
    getHeight(){
        return this[0].offsetHeight
    }

}

function $(args){
    return new Jquery(args)
}