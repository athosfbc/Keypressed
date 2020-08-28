$(document).ready(function() {
    $("body").keypress(function(e) {

            for(var i=1; i<2; i++) {
                $('body').text('this key was pressed: ' + e.key);
            };

       console.log( e.which);

     });

 });