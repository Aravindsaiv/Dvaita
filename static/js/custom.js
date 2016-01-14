
$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
});

// SPLASH SCREEN
$(document).ready(function() {
    $.SplashScreen({
            id: 'splashscreen',
            desktop: true,
            mobile: true,
            forceLoader: true,
            queryParameter: 'loader',
            progressCount: false,
            progressCountId: 'status',
            progressBar: false,
            progressBarId: 'progress',
            fadeEffect: true,
            timeToFade: 1000, 
            timeOut: 4000   
    });
});

$(document).ready(function() {
    $('.circle, .circle1').removeClass('stop');     
        $('.triggerFull').click(function() {
                $('.circle, .circle1').toggleClass('stop');
        });
});


// TIMER
$(function(){

    var note = $('#note'),
        ts = new Date(2016, 1, 19),
        newYear = true;

    if((new Date()) > ts){
        ts = (new Date()).getTime() + 10*24*60*60*1000;
        newYear = false;
    }

    $('#countdown').countdown({
        timestamp   : ts,
        callback    : function(days, hours, minutes, seconds){

            var message = "";

            message += days + " day" + ( days==1 ? '':'s' ) + ", ";
            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

            if(newYear){
                message += "left until the new year!";
            }
            else {
                message += "left to 10 days from now!";
            }

            note.html(message);
        }
    });

});