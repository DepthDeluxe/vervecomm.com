$(document).ready(function() {
     // generate the request link
     var request_link = document.URL.replace(/(http|https)\:\/\/.*?\//, '');
     request_link = '/' + request_link;

     $("a[href='" + request_link + "']").parent().addClass('active');
});
