$(".openMenu").click(function() {
//$(".overlay").addClass("menu_overlay");
    $(".mobile_menu").removeClass("slideOut");
    $(".mobile_menu").css({"transform":"translate(0, 0)"});
//$(".mobile_menu_show").fadeIn(800,"swing");
})
$('.closeMenu').click(function() {
    $(".mobile_menu").addClass("slideOut");
    $(".mobile_menu").css({"transform":"translate(-100%, 0)"});
//$(".overlay").removeClass("menu_overlay");
});