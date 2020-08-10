(function () {
    var chart = echarts.init(document.querySelector('.contentC .contentC-right'));
    var option = {
        title: {
            left:"center",
            text: "柱状图数据展示",
            subtext: "商品数"
        },
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: '15%',
            left: '6%',
            right: '8%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                },
                //定制坐标轴的字体，颜色
                axisLabel: {

                },
                axisLine: {
                    show: false
                }
            }

        ],
        yAxis: {
           
            
        },
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '35%',
                data: [10, 11, 12, 13, 14, 15, 11],
                itemStyle: {
                    barBorderRadius: 5,
                }
            }
        ]
    };
    chart.setOption(option);
    //缩放适配
    window.addEventListener("resize",function(){
        window.resize();
    });

})();
// 饼状图
(function () {
    var chart = echarts.init(document.querySelector('.contentC .contentC-left'));
    var option = {
        title: {
            text: '饼状图数据展示',
            left: 'center',
            top: 10,
            textStyle: {
                color: '#202124'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 10, name: 'Mon'},
                        {value: 11, name: 'Tue'},
                        {value: 12, name: 'Wed'},
                        {value: 13, name: 'Thu'},
                        {value: 14, name: 'Fri'},
                        {value: 15, name: 'Sat'},
                        {value: 11, name: 'Sun'},
                ]
            }
        ]
    };
    
    chart.setOption(option);
})();
// 折现图
(function(){
    var chart = echarts.init(document.querySelector('.contentB'));
    var option = {
        color: ['#3398DB'],
        title: {
            left:'center',
            text: '曲线图曲线图展示'
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            axisTick:{
                // 去除刻度线
                show: false
            },
            axisLine:{
            // 去除轴线
                show:false
            },
            boundaryGap: false,
            data: ['07/12', '07/13', '07/14', '07/15', '07/16', '07/15', '07/16','07/17','07/18','07/19','07/20','07/21','07/22','07/23','07/24','07/25','07/26','07/27','07/28','07/29','07/30','07/31','08/01','08/02','08/03','08/04','08/05','08/06','08/07','08/08','08/09','08/20']
        },
        yAxis: {
            axisTick:{
                // 去除刻度线
                show: false
            },
            axisLine:{
                // 去除轴线
                    show:false
                },
            type: 'value'
        },
        series: [
        
            {
                areaStyle:{
                    color:"skyblue"
                },
                // 让曲线圆滑
                smooth:true,
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [3587, 9582, 3921, 7458, 1266, 6564, 6427, 1673, 8534, 3639, 6346, 8934, 1378, 7200, 2668, 7181, 3634, 4419, 4946, 6117, 6248, 7429, 7451, 9812, 2394, 4325, 7395, 2500, 2641, 5181]
            },
        ]
    };
    chart.setOption(option);
})()

