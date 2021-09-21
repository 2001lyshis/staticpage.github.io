
$(".NyanCats").on( 'click' , function(){ location.href = 'http://123.57.65.138/'; } )


window.onpageshow=function (event) {

        if (event.persisted|| window.performance &&

            window.performance.navigation.type == 2){

            location.reload();

        }

    }