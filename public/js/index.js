$(window).on("resize scroll",function(){
    if($(window).scrollTop() > 0) {
        $(".header").addClass("scroll")
    }else {
        $(".header").removeClass("scroll")
    }
})

$(".btn-download").click(function(){
    $(".download-list").slideToggle(300);
})

$(document).click(function (event) {
    var d_con = $(".btn-download");
    if (!d_con.is(event.target) && d_con.has(event.target).length === 0) {
        $(".download-list").slideUp(300);
    }
});