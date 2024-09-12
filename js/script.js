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
        slidesToShow: 3,
        responsive: [
        {   
            breakpoint: 1500,
            settings: {
                centerPadding: '50px',
                slidesToShow: 2
            }
        },
        {   
            breakpoint: 768,
            settings: {
                centerPadding: '60px',
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

    //ハンバーガーメニュー
    $btnMenu = $("#js-btn-menu");/* 変数btnMenuの定義 */
    $gnav = $(".gnav");/* 変数gnavの定義 */

    $btnMenu.on("click", function () {/* ハンバーガーメニューのボタンが押されたとき */
        $btnMenu.toggleClass("open");/* btnMenuにactiveクラスの有無を確認し、なければ追加、あれば外す */
        $gnav.toggleClass("open");/* gnavにshowクラスの有無を確認し、なければ追加、あれば外す */
    });

})