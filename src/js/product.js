class Glass{
    constructor(){
        // 1. 获取遮罩
        this.mark = $('.mark');
        // 2. 获取滑块
        this.float = $('.float_layer');
        // 3. 获取大图盒子
        this.big_pic = $('.big_pic');
        // 4. 获取大图
        this.big_img = $('.big_pic img');
        //添加事件
        this.addEvent();
    }
    addEvent(){
        // 1. 移入
        //     滑块显示
        //     大图显示
        this.mark.onmouseenter = function(){
            this.float.style.display = 'block';
            this.big_pic.style.display = 'block';
        }.bind(this);
        // 2. 移出
        //     滑块消失
        //     大图消失
        this.mark.onmouseleave = function(){
            this.float.style.display = 'none';
            this.big_pic.style.display = 'none';
        }.bind(this);
        // 3. 移动
        //     滑块跟随--鼠标在滑块中间--边界

        //     //放大镜的核心：求比例
        //     let p_x = 滑块当前的left / (图片的宽度 - 滑块的宽）
        //     let p_y = 滑块当前的top / (图片的高度 - 滑块的高）

        //     //设置大图的位置
        //     大图.style.left = -p_x * (大图的宽度 - 大图所在盒子的宽) + 'px';
        //     大图.style.top = -p_y * (大图的高度 - 大图所在盒子的高) + 'px';
        this.mark.onmousemove = function(evt){
           
            let e = evt || window.event;
            let left = e.offsetX - this.float.offsetWidth /2;
            let top = e.offsetY - this.float.offsetHeight /2;
            //边界
            if(left <= 0){
                left = 0;
            }else if(left >= this.mark.offsetWidth - this.float.offsetWidth){
                left = this.mark.offsetWidth - this.float.offsetWidth;
            }
            if(top <= 0){
                top = 0;
            }else if(top >= this.mark.offsetHeight - this.float.offsetHeight){
                top = this.mark.offsetHeight - this.float.offsetHeight;
            }
            this.float.style.left = left + 'px';
            this.float.style.top = top + 'px';

            //放大镜的核心：求比例
             //     let p_x = 滑块当前的left / (图片的宽度 - 滑块的宽）
        //     let p_y = 滑块当前的top / (图片的高度 - 滑块的高）
            let p_x = left*3 / (this.mark.offsetWidth - this.float.offsetWidth);
            let p_y = top / (this.mark.offsetHeight - this.float.offsetHeight);

            //     //设置大图的位置
            //     大图.style.left = p_x * (大图的宽度 - 大图所在盒子的宽) + 'px';
            //     大图.style.top = p_y * (大图的高度 - 大图所在盒子的高) + 'px';
            this.big_img.style.left = p_x * (this.big_img.offsetWidth - this.big_pic.offsetWidth) + 'px';
            this.big_img.style.top = p_y * (this.big_img.offsetHeight - this.big_pic.offsetHeight) + 'px';
        }.bind(this);
    }
}

function $(selector){
    return document.querySelector(selector);
}
new Glass();

window.onscroll= function(){
	//变量t是滚动条滚动时，距离顶部的距离
	var t = document.documentElement.scrollTop||document.body.scrollTop;
	var xiding = document.getElementById('xiding');
	//当滚动到距离顶部200px时，返回顶部的锚点显示
	if(t>=1150){
		xiding.style.display="block";
	}else{          //恢复正常
		xiding.style.display="none";
    }
    var scrollup = document.getElementById('scrollup');
	//当滚动到距离顶部200px时，返回顶部的锚点显示
	if(t>=1000){
		scrollup.style.display="block";
	}else{          //恢复正常
		scrollup.style.display="none";
	}
};



   
