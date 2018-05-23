var timerGo;

$(function(){
    goClock();
    timerGo = setInterval(goClock ,1000/60);
});

function goClock() {
    var dateNow = new Date();
    var secondNow = dateNow.getSeconds();
    var minutNow = dateNow.getMinutes();
    var hourNow = dateNow.getHours();
    var millisecondsNow = dateNow.getMilliseconds();

    

    var secondShow = pad(secondNow,2);
    var minutShow = pad(minutNow,2);
    var hourShow = pad(hourNow,2);

    var isSecond = (secondNow * 6) - 90;
    var isMilliseconds =  isSecond + ( millisecondsNow * 0.006) ;
    var isMinut = (minutNow*6) - 90 + ( (secondNow /10 ));
    var isHour = (hourNow*30) -90 + ( (minutNow / 2 ));

    // $('.clock__hand-second_image').css("transform", "rotate("+isSecond+"deg)" )
    $('.clock__hand-second_image').css("transform", "rotate("+isMilliseconds+"deg)" )
    $('.clock__hand-minut_image').css("transform", "rotate("+isMinut+"deg)" )
    $('.clock__hand-hour_image').css("transform", "rotate("+isHour+"deg)" )
    $('.clock__heading_3').text(hourShow + ' : ' + minutShow + ' : ' + secondShow);
}

function pad (str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}