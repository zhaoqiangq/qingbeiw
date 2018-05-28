$(function () {
    //轮播
    $('.hiSlider1').hiSlider({
        isFlexllScreen:true,
        isFlexible: true,
        isShowControls:false,
        isAuto:true,
        mode: 'move',
        isSupportTouch: false,
        isShowTitle: false,
        isShowPage: true,
        intervalTime:3000,
        titleAttr: function(curIdx){
            return $('img', this).attr('alt');
        }
    });
    //走马灯
    $(".box").superSlider({
        prevBtn: 	 ".next",//左按钮
        nextBtn: 	 ".prev",//右按钮
        listCont:    "#roll",//滚动列表外层
        scrollWhere: "prev",//自动滚动方向next
        delayTime: 	 1000,//自动轮播时间间隔
        speed: 		 600,//滚动速度
        amount: 	 1,//单次滚动数量
        showNum: 	 6,//显示数量
        autoPlay: 	 true//自动播放
    });


})
