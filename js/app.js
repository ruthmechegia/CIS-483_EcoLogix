$(document).ready(function () {
    $(".card").hide().fadeIn(600);

    $("nav a").each(function () {
        if (this.pathname === window.location.pathname) {
            $(this).addClass("active-link");
        }
    });

    $("nav a").on("click", function () {
        $("nav a").removeClass("active-link");
        $(this).addClass("active-link");
    });
});