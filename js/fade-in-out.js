var duration = 400;

$(window).ready(function() {
    var delay = 200;
    $(".fade-in-0").transition({ opacity: 1.0, delay: delay}, duration, 'linear');
    // delay += (duration + delay);
    $(".fade-in-1").transition({ opacity: 1.0, delay: delay}, duration, 'linear');
});
$(".nav-link").click(function(event) {
    event.preventDefault();
    var destination = this.getAttribute("href");
    $(".fade-out").transition({ opacity: 0.0 }, duration, 'linear', function() {
        window.location = destination;
    });
});
