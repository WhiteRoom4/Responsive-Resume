$(document).ready(function() {

  $('.skills h3').click(function(event) {
    
    //技能skills,用選單呈現
    $(this).toggleClass('active');
    // 讓點擊到的 h2找到父元素 .question ，再找裡面的 P 判斷收闔
    $(this).parent().find('p').slideToggle();

    // 自己以外的 p 隱藏起來
    $(this).parent().siblings().find('p').slideUp();
    // 自己以外的 h2 移除樣式
    $(this).parent().siblings().find('h3').removeClass('active');

  });



  //認證certification,用輪播呈現
  //Swiper輪播效果
  var mySwiper = new Swiper ('.swiper-container', {
    // 可選參數
    loop: true,
    autoplay: {
      delay: 5000,
    },

    // 如果需要分頁設置
    pagination: {
      el: '.swiper-pagination',
    },

    // 上一個/下一個 按鈕
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })



  //讓捲軸用動畫的方式移動到 0 的位置
  //scrollTop：返回或设置匹配元素的滚动条的垂直位置，預設是返回以像素计的相对滚动条顶部的偏移
  $('.footer a').click(function(event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: 0}, 5000);
  });

});