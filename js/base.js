$(function () {
    //导航全程课堂点击出现二级导航
    $('.hovernav .nav1>li').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.hovernav .nav2>li').removeClass('active');
        $('.hovernav .nav2>li').eq($(this).index()).addClass('active');
    });
    //点击头像出现二级选择
    $('.header-box .header .header-right .imgs').on('click',function () {
        $('.header-box .header .header-right .gerennav').toggleClass('active');
    })

    //关注我们
    $('.footer-right span').on('click',function () {
        $(this).find('div').toggle();
    })


    //点击登陆
    $('.login').on('click',function () {
        $('#login').show();
    })
    $('.register').on('click',function () {
        $('#login').hide();
        $('#iponelogin').hide();
        $('#register').show();
    })

    $('.iponelogin').on('click',function () {
        $('#login').hide();
        $('#register').hide();
        $('#iponelogin').show();
    })

    $('.close,.shadow').on('click',function () {
        $('.shade').hide();
    })
})