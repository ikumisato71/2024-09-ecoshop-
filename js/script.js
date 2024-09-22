// ページトップボタンの要素を取得
const pageTopButton = document.getElementById("js-page-top");

// クリックイベントをアロー関数で設定
pageTopButton.addEventListener("click", () => {
  // ページの一番上へスムーズにスクロール
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// $(".mv-photo-big").slick({
//   dots: true,
// });

$(".single-item").slick({
  autoplay: true, // 自動再生
  fade: true, // スライドをフェードイン・フェードアウト
  cssEase: "linear", // アニメーション
  speed: 600, // フェードアニメーションの速度設定
});
