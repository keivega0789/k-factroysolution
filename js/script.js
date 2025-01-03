$(window).on('load', function () {
	$('#splash')
		.delay(1500)
		.fadeOut('slow', function () {
			//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
			$('body').addClass('appear'); //フェードアウト後bodyにappearクラス付与
			var h = $(window).height(); //ブラウザの高さを取得
			$('.splashbg').css({
				'border-width': h, //ボーダーの太さにブラウザの高さを代入
				'animation-name': 'backBoxAnime', //animation-nameを定義
			});
		});
	$('#splash-logo').delay(1200).fadeOut('slow'); //ロゴを1.2秒でフェードアウトする記述
	$('body').removeClass('fadeout');
});

$(function () {
	// ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
	$('a:not([href^="#"]):not([target])').on('click', function (e) {
		e.preventDefault(); // ナビゲートをキャンセル
		url = $(this).attr('href'); // 遷移先のURLを取得
		if (url !== '') {
			$('body').addClass('fadeout'); // bodyに class="fadeout"を挿入
			setTimeout(function () {
				window.location = url; // 0.8秒後に取得したURLに遷移
			}, 800);
		}
		return false;
	});
});

$(function () {
	/* pickupスライダー */
	$('.slick-area').slick({
		arrows: true,
		centerMode: true,
		centerPadding: '100px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					centerPadding: '50px',
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					centerPadding: '30px',
					slidesToShow: 1,
				},
			},
		],
		prevArrow:
			'<span class="btn-prev material-icons-round">chevron_left</span>',
		nextArrow:
			'<span class="btn-next material-icons-round">chevron_right</span>',
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
		$('body,html').animate(
			{
				scrollTop: 0,
			},
			500
		);
		return false;
	});

	//ハンバーガーメニュー
	$btnMenu = $('#js-btn-menu'); /* 変数btnMenuの定義 */
	$gnav = $('.gnav'); /* 変数gnavの定義 */

	$btnMenu.on('click', function () {
		/* ハンバーガーメニューのボタンが押されたとき */ $btnMenu.toggleClass(
			'open'
		); /* btnMenuにactiveクラスの有無を確認し、なければ追加、あれば外す */
		$gnav.toggleClass(
			'open'
		); /* gnavにshowクラスの有無を確認し、なければ追加、あれば外す */
	});
});

// スクロール時に要素がフェードイン
const fadeInElements = document.querySelectorAll(
	'.product-list-item, .facilities-item'
);

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('fade-in');
		}
	});
});

fadeInElements.forEach((el) => observer.observe(el));
