var angle=180;//切換注意事項旁三角形的角度
$(document).ready(function(){
    $('.change').click(function(){
        $('.tips').slideToggle();
        angle+=180;
        $('.change').css("transform","rotate("+angle+"deg)");
    })
})
