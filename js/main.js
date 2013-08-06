$(document).ready(function() {
    $("#feed-btn").click(function() {
        $("#directions").fadeOut();
         $("#feed").fadeIn();
    });
    $("#dir-btn").click(function() {
        $("#feed").fadeOut();
        $("#directions").fadeIn();
    });
    $("#shrink-arrow").click(function() {
        /*$(this).innerHTML='&#59237;';*/
        var type=$(this).data('type');
        if(type=='close') {
            $(this).data('type', 'open');
            $(this).html('&#59237;');
            $("#map-content").css('width','100%');
        } else {
            $(this).data('type', 'close');
            $(this).html('&#59238;');
            $("#map-content").css('width','');
        }
    });
});