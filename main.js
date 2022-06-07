let speedHide = 200
let speedShow = 200
let summary = 50
let curryncy = "грн"




$(".chooseOpen").hide(0)
$(".item1").hide(0);
$(".total1").html("До сплати" + summary + curryncy)
$("#chooseChease").hide(0)
 $("#chooseMeet").hide(0)
 $("#chooseSous").hide(0)
 $("#choseVeg").hide(0)

$("#chease").click(function () {
    $("#chooseChease").slideToggle(speedShow)

})
$("#meet").click(function () {
    $("#chooseMeet").slideToggle(speedShow)

})
$("#sous").click(function () {
    $("#chooseSous").slideToggle(speedShow)

})
$("#veg").click(function () {
    $("#choseVeg").slideToggle(speedShow)

})
$('#feta').click(function () {
    $('.fetaGroup').fadeToggle(speedHide);
    $('#fetaHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
    doBounce($('#bounce'),100,'10px',500);
})
$('#fetaHide').click(function () {
    $('.fetaGroup').fadeToggle(speedHide);
    $('#fetaHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);

    
})

$('#moza').click(function () {
    $('.mozaGroup').fadeToggle(speedHide);
    $('#mozaHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#mozaHide').click(function () {
    $('.mozaGroup').fadeToggle(speedHide);
    $('#mozaHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})

$('#cheder').click(function () {
    $('.chederGroup').fadeToggle(speedHide);
    $('#chederHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#chederHide').click(function () {
    $('.chederGroup').fadeToggle(speedHide);
    $('#chederHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})

$('#blu').click(function () {
    $('.bluGroup').fadeToggle(speedHide);
    $('#bluHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#bluHide').click(function () {
    $('.bluGroup').fadeToggle(speedHide);
    $('#bluHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})

$('#parm').click(function () {
    $('.parmGroup').fadeToggle(speedHide);
    $('#parmHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#parmHide').click(function () {
    $('.parmGroup').fadeToggle(speedHide);
    $('#parmHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})

$('#chicken').click(function () {
    $('.chickenGroup').fadeToggle(speedHide);
    $('#chickenHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#chickenHide').click(function () {
    $('.chickenGroup').fadeToggle(speedHide);
    $('#chickenHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})

$('#bekon').click(function () {
    $('.bekonGroup').fadeToggle(speedHide);
    $('#bekonHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#bekonHide').click(function () {
    $('.bekonGroup').fadeToggle(speedHide);
    $('#bekonHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})

$('#shynka').click(function () {
    $('.shynkaGroup').fadeToggle(speedHide);
    $('#shynkaHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#shynkaHide').click(function () {
    $('.shynkaGroup').fadeToggle(speedHide);
    $('#shynkaHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})


$('#paperoni').click(function () {
    $('.paperoniGroup').fadeToggle(speedHide);
    $('#paperoniHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#paperoniHide').click(function () {
    $('.paperoniGroup').fadeToggle(speedHide);
    $('#paperoniHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})

$('#alfredo').click(function () {
    $('.alfredoGroup').fadeToggle(speedHide);
    $('#alfredoHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#alfredoHide').click(function () {
    $('.alfredoGroup').fadeToggle(speedHide);
    $('#alfredoHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})

$('#barbequ').click(function () {
    $('.barbequGroup').fadeToggle(speedHide);
    $('#barbequHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#barbequHide').click(function () {
    $('.barbequGroup').fadeToggle(speedHide);
    $('#barbequHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})

$('#chasnyk').click(function () {
    $('.chasnykGroup').fadeToggle(speedHide);
    $('#chasnykHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#chasnykHide').click(function () {
    $('.chasnykGroup').fadeToggle(speedHide);
    $('#chasnykHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})

$('#kukurudza').click(function () {
    $('.kukurudzaGroup').fadeToggle(speedHide);
    $('#kukurudzaHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#kukurudzaHide').click(function () {
    $('.kukurudzaGroup').fadeToggle(speedHide);
    $('#kukurudzaHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})

$('#ananas').click(function () {
    $('.ananasGroup').fadeToggle(speedHide);
    $('#ananasHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#ananasHide').click(function () {
    $('.ananasGroup').fadeToggle(speedHide);
    $('#ananasHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})


$('#tomato').click(function () {
    $('.tomatoGroup').fadeToggle(speedHide);
    $('#tomatoHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#tomatoHide').click(function () {
    $('.tomatoGroup').fadeToggle(speedHide);
    $('#tomatoHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})

$('#grub').click(function () {
    $('.grubGroup').fadeToggle(speedHide);
    $('#grubHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#grubHide').click(function () {
    $('.grubGroup').fadeToggle(speedHide);
    $('#grubHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})


$('#shpunat').click(function () {
    $('.shpunatGroup').fadeToggle(speedHide);
    $('#shpunatHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#shpunatHide').click(function () {
    $('.shpunatGroup').fadeToggle(speedHide);
    $('#shpunatHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})


$('#perets').click(function () {
    $('.peretsGroup').fadeToggle(speedHide);
    $('#peretstHide').fadeToggle(speedHide);
    summary += 30;
    $('.total').html('До сплати:' + summary + curryncy);
     doBounce($('#bounce'),100,'10px',500);
})
$('#peretsHide').click(function () {
    $('.peretsGroup').fadeToggle(speedHide);
    $('#peretsHide').fadeToggle(speedHide);
    summary -= 30;
    $('.total').html('До сплати:' + summary + curryncy);
})

function doBounce(element,times,distance,speed){
    for(i=0; i< times; i++){
        element.animate({
marginTop:'-=' + distance
        },speed)
        .animate({
            marginTop:'+='+ distance
        }, speed);
    }
    
}


