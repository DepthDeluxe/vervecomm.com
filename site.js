$(document).ready(function() {
    // generate the request link
    var request_link;
    try {
        request_link = document.URL.split('#')[1];
    } catch(e) {
        request_link = 'index';
    }

    console.log(request_link);
    request_link = '/' + request_link;

    // grab the content from the remote host
    $.ajax({
        url: 'pages/' + request_link + '.htm',
        success: function(result) {
            $('#site-content').html(result);
            console.log('content loaded');
        }
    });

    // light up the pill
    $("a[href='" + request_link + "']").parent().addClass('active');
});
