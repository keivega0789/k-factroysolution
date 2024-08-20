$(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
    var h = $(window).height();//ブラウザの高さを取得
    $(".splashbg").css({
    "border-width":h,//ボーダーの太さにブラウザの高さを代入
    "animation-name":"backBoxAnime"//animation-nameを定義
    }); 
    });
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    });

$(function () {
    /* pickupスライダー */
    $('.slick-area').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 4,
        responsive: [
        {   
            breakpoint: 1500,
            settings: {
                centerPadding: '50px',
                slidesToShow: 3
            }
        },
        {   
            breakpoint: 768,
            settings: {
                centerPadding: '50px',
                slidesToShow: 1
            }
        }
        ]
    });

    //ページトップへ戻る
    var $pageTop = $('.page-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $pageTop.fadeIn();
        } else {
            $pageTop.fadeOut();
        }
    });
    $pageTop.on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
})