window.onpageshow=function (event) {

        if (event.persisted|| window.performance &&

            window.performance.navigation.type == 2){

            location.reload();

        }

    }