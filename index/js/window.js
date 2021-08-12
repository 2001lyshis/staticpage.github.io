setTimeout(function () {
    $(document).ready(init());
    },2500);
jQuery(document).ready(function ($) {
    if (window.history && window.history.pushState) {
        $(window).on('popstate', function () {
            window.history.forward(1);
        });
    }
});
