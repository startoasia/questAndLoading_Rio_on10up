$(document).ready(function () {
    /*畫面跳到指定位置*/
    $("a.scrollLink").click(function (event) {
      event.preventDefault();
      $("html, body").animate(
        {
          /* 0 可以替換 $("class名稱(要記得加.)").height() 【header有需要固定在最上方時 使用這個👇】*/
          scrollTop: $($(this).attr("href")).offset().top - $(".header").height(),
          // 【header不用固定在最上方時 使用這個👇】
          // scrollTop: $($(this).attr("href")).offset().top - 0,
        },
        400
      );
    });
  });