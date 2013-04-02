$(document).ready(function(){
    $('#infoContainer').children().hide();
    $('#partInfoText').children().hide();


    $('#interactivecar').hover(
        function() {
            $('#closedCar').fadeOut(200);
        },
        function () {
            $('#closedCar').fadeIn(200);
        }
    );

    $('#batteryMap').hover(
        function() {
            partHover("#battery");
        }, function() {
            partHoverEnd("#battery")
        }
    );

    $('#engineMap').hover(
        function() {
            partHover("#engine");
        }, function() {
            partHoverEnd("#engine")
        }
    );

    $('#gearboxMap').hover(
        function() {
            partHover("#gearbox");
        }, function() {
            partHoverEnd("#gearbox")
        }
    );

    $('#inverterMap').hover(
        function() {
            partHover("#inverter");
        }, function() {
            partHoverEnd("#inverter")
        }
    );

    $('#motorMap').hover(
        function() {
            partHover("#motor");
        }, function() {
            partHoverEnd("#motor")
        }
    );

    $('#tankMap').hover(
        function() {
            partHover("#tank");
        }, function() {
            partHoverEnd("#tank")
        }
    );

    $('#transMap').hover(
        function() {
            partHover("#trans");
        }, function() {
            partHoverEnd("#trans")
        }
    );

    $('#ureaMap').hover(
        function() {
            partHover("#urea");
        }, function() {
            partHoverEnd("#urea")
        }
    );
});


/*  Called when one of the defined map areas is hovered on
    Displays the highlighted image using the given
    base id (eg #urea) */
function partHover(backgroundStyle) {
    $(backgroundStyle + "Info").fadeIn(200);
    $(backgroundStyle + "InfoText").fadeIn(200);
}


/*  Called when one of the defined map areas is hovered off of
    hides all information pretaining to the previously hovered area */
function partHoverEnd(backgroundStyle) {
    $(backgroundStyle + "InfoText").fadeOut(200);
    $(backgroundStyle + "Info").fadeOut(200);
}