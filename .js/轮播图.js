 // 获取图片标签
        var img=document.getElementById("imglist").getElementsByTagName("li")
        // 获取列表
        var icon=document.getElementById("iconlist").getElementsByTagName("li")
        // 初始化图片位置
        var left=0;
        imglist.style.marginLeft=left+"px";
        // 设置一个定时器
        var time
        // 自调用产生随机时间
        run()
        function run() {
            if(left<=-2193){
            imglist.style.marginLeft="0px";
            left=0;
            }
            var n=(left%537==0)? 1000:10000;
            change();
            var m=Math.floor(-left/537);
            changeicon(m);
            left-=537;
            // 使用setTimeout
            time=setTimeout(run,n);
            
        }
        // 图片移动
        function change() {
            imglist.style.marginLeft=left+"px";
        }
        function changeicon(m){
            for(var i=0;i<icon.length;i++){ 
                icon[i].style.backgroundColor="";
            }
            icon[m].style.backgroundColor="red";
        }
        // 绑定图片
        for(var i=0;i<img.length;i++){
            (function(i) {img[i].onmousemove=function() {
                clearTimeout(time);
                left=-i*537
                change();
                changeicon(i)
                img[i].onmouseout=function(){
                    run();
                }
            }
            })(i)
            for(var i=0;i<icon.length;i++){
                (function(i) {icon[i].onmousemove=function() {
                    clearTimeout(time);
                    left=-i*537
                    change();
                    changeicon(i)
                    icon[i].onmouseout=function(){
                        run();
                    }
                }
                })(i)
        }

        }